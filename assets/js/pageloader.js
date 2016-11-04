window.onload = function () {
  var loadPage;
  var loadArticle;

  loadPage = function () {
    var x;
    for (x=0;x<contentList.length;x++) {
      loadArticle(contentList[x]);
    }
  };

  loadArticle = function (article) {
    var el;
    var title;
    var y;
    var section;
    var subEl;
    var imgEl;
    var capEl;
    el = document.createElement('article');
    title = document.createElement('h1');
    title.innerHTML = article.title;
    title.className = 'title';
    el.appendChild(title);
    for (y=0;y<article.body.length;y++) {
      section = article.body[y];
      switch (section.type) {
        case 'block':
          subEl = document.createElement('p');
          subEl.innerHTML = section.text;
          subEl.className = 'block';
          el.appendChild(subEl);
          break;
        case 'picture':
          subEl = document.createElement('a');
          if (section.link) {
            subEl.href = section.link;
          }
          imgEl = document.createElement('img');
          capEl = document.createElement('p');
          imgEl.src = './assets/images/' + section.filename;
          capEl.innerHTML = section.caption;
          imgEl.className = 'image';
          subEl.appendChild(imgEl);
          capEl.className = 'caption';
          subEl.appendChild(capEl);
          subEl.className = 'picture';
          el.appendChild(subEl);
          break;
      }
    }
    el.className = 'column';
    document.body.appendChild(el);
  };
  loadPage();
};
