function render(results, query, panel){
  // Always clear & show the panel when searching
  panel.style.display = 'block';
  panel.innerHTML = "";

  if (!results.length){
    panel.innerHTML = `<li class="nohit">No matches</li>`;
    return;
  }

  const needle = query.toLowerCase();
  const rows = results.map(res=>{
    const doc = store.docs[res.ref];
    const snippets = snippetsFromMatch(doc.content||'', res.matchData);
    const frag = buildTextFragment(needle, snippets[0]||'');
    const href = frag ? `${doc.url}#:~:text=${encodeURIComponent(frag)}` : doc.url;

    const snipHtml = (snippets.length?snippets:[truncate(doc.content||'', SNIPPET_CHARS)])
      .map(s=>highlight(s, needle))
      .map(h=>`<div class="result-snippet">${h}</div>`).join('');

    return `
      <li class="result-item">
        <a href="${href}" target="_parent">
          <div class="result-title">${escapeHtml(doc.title||doc.url)}</div>
          ${snipHtml}
        </a>
      </li>`;
  });

  panel.innerHTML = rows.join('\n');
}
