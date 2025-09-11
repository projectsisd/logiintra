let idx = null;
let store = {};

async function initSearch() {
  const response = await fetch('../search_index.json');
  store = await response.json();

  idx = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('content');

    store.docs.forEach((doc, i) => {
      this.add({
        id: i,
        title: doc.title,
        content: doc.content
      });
    });
  });

  document.getElementById('searchBox').addEventListener('input', function () {
    let query = this.value;
    let results = idx.search(query);
    let resultList = document.getElementById('results');
    resultList.innerHTML = "";

    results.forEach(r => {
      let item = store.docs[r.ref];
      let li = document.createElement('li');
      li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
      resultList.appendChild(li);
    });
  });
}

window.onload = initSearch;
