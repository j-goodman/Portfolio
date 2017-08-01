mainPageOnload = function () {
  var loadPage;
  var loadArticle;
  var parseDate;
  var setUpOutlinks;
  var setUpFilterButtons;
  var mainDoc = document.getElementById('main');

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
  };

  setUpOutlinks = function () {
    var i;
    var outlinks;
    outlinks = document.getElementsByClassName('outlink');
    for (i=0 ; i<outlinks.length ; i++) {
      outlinks[i].onclick = function () {
        window.location = this.dataset.href;
      };
    }
  };

  setUpFilterButtons = function () {
    var about;
    var title;
    about = document.getElementById('about-trigger');
    games = document.getElementById('games-trigger');
    sites = document.getElementById('updates-trigger');
    about.onclick = function () {
      loadPage('about');
    };
    games.onclick = function () {
      loadPage('games');
    };
    sites.onclick = function () {
      loadPage('sites');
    };
  };

  parseDate = function (date) {
    var string = '';
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    string += months[parseInt(date.slice(4, 6))-1];
    string += ' ';
    string += parseInt(date.slice(6, 8)).toString();
    string += ', ';
    string += parseInt(date.slice(0, 4)).toString();
    return string;
  };

  addAnalyticsEvent = function () {
    ga('send', {
      hitType: 'event',
      eventCategory: 'content',
      eventAction: 'navigate',
      eventLabel: this,
    });
  };

  loadArticle = function (article) {
    var el = {};
    el.mainPanel = document.createElement('div');
    el.mainPanel.className = 'story-panel';

    el.imageContainer = document.createElement('div');
    el.imageContainer.className = 'image-container';
    el.mainPanel.appendChild(el.imageContainer);

    el.image = document.createElement('div');
    el.image.id = article.imageId;
    el.image.className = 'image';
    el.imageFrame = document.createElement('div');
    el.imageFrame.className = 'image-frame';
    el.imageContainer.appendChild(el.image);
    el.imageContainer.appendChild(el.imageFrame);
    el.imageContainer.onclick = function () {
      window.location = article.link;
    };

    el.textPanels = document.createElement('section');
    el.textPanels.className = 'text-panels';
    el.mainPanel.appendChild(el.textPanels);

    el.titlePanel = document.createElement('div');
    el.titlePanel.className = 'title-panel';
    el.titleLink = document.createElement('a');
    el.titleLink.innerText = article.title;
    el.titleLink.href = article.link;
    el.titlePanel.appendChild(el.titleLink);
    el.textPanels.appendChild(el.titlePanel);

    el.descriptionPanel = document.createElement('div');
    el.descriptionPanel.className = 'description-panel';
    el.descriptionPanel.innerHTML = article.blurb;
    el.textPanels.appendChild(el.descriptionPanel);

    mainDoc.appendChild(el.mainPanel);
  };
  setUpFilterButtons();
  setUpOutlinks();
  loadPage();
};
