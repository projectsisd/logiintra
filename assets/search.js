// assets/search.js
document.addEventListener('DOMContentLoaded', function () {
  var searchBox = document.getElementById('searchBox');
  var resultsContainer = document.getElementById('results');
  var searchWarn = document.getElementById('searchWarn');

  // Check if search index is loaded
  if (typeof idx === 'undefined') {
    if (searchWarn) {
      searchWarn.style.display = 'block';
      searchWarn.textContent = 'Search index not found. Please ensure search_index.js is loaded.';
    }
    return;
  }

  // ---------- Helpers ----------

  function escapeRegex(s) {
    return (s || '').replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
  }

  // Highlight matching text (safe)
  function highlightText(text, query) {
    if (!text || !query) return text || '';
    var words = query
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 0)
      .map(escapeRegex);
    if (!words.length) return text;
    var regex = new RegExp('(' + words.join('|') + ')', 'gi');
    return text.replace(regex, '<mark class="hl">$1</mark>');
  }

  // Optional: create a snippet around the first occurrence
  function generateSnippet(text, query, maxLength = 100) {
    if (!text) return '';
    var lower = text.toLowerCase();
    var q = (query || '').toLowerCase();
    var match = q ? lower.indexOf(q) : -1;
    var start = match >= 0 ? Math.max(0, match - 50) : 0;
    var snippet = text.substring(start, start + maxLength);
    if (start > 0) snippet = '...' + snippet;
    if (start + maxLength < text.length) snippet += '...';
    return highlightText(snippet, query);
  }

  // For short queries: check if any token starts with the query
  function tokenStartsWith(text, q) {
    if (!text || !q) return false;
    var ql = q.toLowerCase();
    return text
      .toLowerCase()
      .split(/[^a-z0-9_]+/i)
      .some(tok => tok && tok.startsWith(ql));
  }

  // Render a list of docs (array of doc objects from searchIndex)
  function renderDocs(docs, query) {
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '';

    var qLower = (query || '').toLowerCase();

    docs.forEach(function (doc) {
      if (!doc) return;

      // Decide which field matched best for the second line
      var label = '';
      var value = '';

      if ((doc.description || '').toLowerCase().includes(qLower)) {
        label = 'Description';
        value = doc.description || '';
      } else if ((doc.dependency || '').toLowerCase().includes(qLower)) {
        label = 'Dependency';
        value = doc.dependency || '';
      } else if ((doc.technical_name || '').toLowerCase().includes(qLower)) {
        label = 'Technical Name';
        value = doc.technical_name || '';
      } else if ((doc.title || '').toLowerCase().includes(qLower)) {
        label = 'Title';
        value = doc.title || '';
      } else {
        // fallback preference order
        if (doc.description) { label = 'Description'; value = doc.description; }
        else if (doc.dependency) { label = 'Dependency'; value = doc.dependency; }
        else if (doc.technical_name) { label = 'Technical Name'; value = doc.technical_name; }
        else { label = ''; value = ''; }
      }

      var li = document.createElement('li');
      li.className = 'result-item';

      var a = document.createElement('a');
      a.href = doc.url;
      a.innerHTML = `
        <div class="result-title">${highlightText(doc.title || '', query)}</div>
        <div class="result-snippet">
          ${label ? label + ' :- ' : ''}${highlightText(value, query)}
        </div>
      `;

      li.appendChild(a);
      resultsContainer.appendChild(li);
    });
  }

  // ---------- Main search ----------
  function runSearch() {
    var query = (searchBox.value || '').trim();
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';

    if (!query) return;

    var qLower = query.toLowerCase();

    // 1) PHRASE-FIRST exact matches (contiguous substring)
    var exactDesc = searchIndex.filter(d => (d.description || '').toLowerCase().includes(qLower));
    var exactDep = searchIndex.filter(d => (d.dependency || '').toLowerCase().includes(qLower));
    var exactTitle = searchIndex.filter(d => (d.title || '').toLowerCase().includes(qLower));
    var exactTech = searchIndex.filter(d => (d.technical_name || '').toLowerCase().includes(qLower));

    // Combine in priority order, de-duped: Description > Dependency > Title > Technical Name
    var seen = new Set();
    var exactResults = [];
    [exactDesc, exactDep, exactTitle, exactTech].forEach(arr => {
      arr.forEach(d => {
        if (!seen.has(d.id)) {
          seen.add(d.id);
          exactResults.push(d);
        }
      });
    });

    if (exactResults.length) {
      renderDocs(exactResults, query);
      return; // stop here; do not run Lunr if phrase matches exist
    }

    // 2) Lunr search as fallback
    var results = [];
    try {
      if (query.length <= 3) {
        // strict prefix for short queries (no fuzzy)
        var safe = query.replace(/([+\-!(){}\[\]^"~*?:\\])/g, '\\$1');
        results = idx.search(safe + '*');
      } else {
        // longer queries: prefix + light fuzzy
        var terms = query.split(/\s+/).filter(Boolean).map(t =>
          t.replace(/([+\-!(){}\[\]^"~*?:\\])/g, '\\$1')
        );
        var lunrQuery = terms.map(t => t + ' ' + t + '* ' + t + '~1').join(' ');
        results = idx.search(lunrQuery);
        if (!results.length) {
          results = idx.search(terms.map(t => t + '* ' + t + '~2').join(' '));
        }
      }
    } catch (e) {
      results = [];
    }

    // Post-filter for short queries: keep only token-start matches
    if (query.length <= 3 && results.length) {
      results = results.filter(function (r) {
        var d = searchIndex.find(x => x.id === r.ref);
        if (!d) return false;
        return (
          tokenStartsWith(d.title, query) ||
          tokenStartsWith(d.technical_name, query) ||
          tokenStartsWith(d.dependency, query) ||
          tokenStartsWith(d.description, query)
        );
      });
    }

    if (!results.length) {
      resultsContainer.style.display = 'block';
      resultsContainer.innerHTML = '<li class="nohit">No results found</li>';
      return;
    }

    // Map Lunr results back to docs and render
    var mapped = results
      .map(r => searchIndex.find(d => d && d.id === r.ref))
      .filter(Boolean);

    renderDocs(mapped, query);
  }

  // Input handler
  searchBox.addEventListener('input', runSearch);

  // Hide results when clicking outside (attach once)
  document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target) && !resultsContainer.contains(event.target)) {
      resultsContainer.style.display = 'none';
    }
  });

  // Show results when search box is focused (1+ char)
  searchBox.addEventListener('focus', function () {
    if (searchBox.value.trim().length >= 1) {
      resultsContainer.style.display = 'block';
    }
  });
});
