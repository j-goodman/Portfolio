window.onload = function () {
  var loadPage;
  var loadArticle;
  var setUpFilterButtons;
  var mainDoc = document.getElementById('main');
  var loader = document.getElementById('loader');

  loadPage = function (tag) {
    var x; var y;
    for (y=mainDoc.childNodes.length-1;y>=0;y--) {
      mainDoc.removeChild(mainDoc.childNodes[y]);
    }
    for (x=0;x<contentList.length;x++) {
      if (!tag || contentList[x].tags.includes(tag)) {
        loadArticle(contentList[x]);
      }
    }
    console.log(contentList[0].tags);
  };

  setUpFilterButtons = function () {
    var about;
    var games;
    var title;
    about = document.getElementById('about');
    games = document.getElementById('games');
    title = document.getElementById('title');
    about.onclick = function () {
      loadPage('about');
    };
    games.onclick = function () {
      loadPage('games');
    };
    title.onclick = function () {
      loadPage();
    };
  };

  loadArticle = function (article) {
    var el;
    var title;
    var z;
    var section;
    var subEl;
    var imgEl;
    var capEl;
    el = document.createElement('article');
    title = document.createElement('h1');
    title.innerHTML = article.title;
    title.className = 'title';
    el.appendChild(title);
    for (z=0;z<article.body.length;z++) {
      section = article.body[z];
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
            subEl.target = '_blank';
            subEl.className = 'picture picture-link';
          } else {
            subEl.className = 'picture';
          }
          imgEl = document.createElement('img');
          capEl = document.createElement('p');
          imgEl.src = 'assets/images/' + section.filename;
          capEl.innerHTML = section.caption;
          imgEl.className = 'image';
          subEl.appendChild(imgEl);
          capEl.className = 'caption';
          subEl.appendChild(capEl);
          el.appendChild(subEl);
          break;
      }
    }
    el.className = 'column';
    mainDoc.appendChild(el);
  };
  setUpFilterButtons();
  loadPage();
};
