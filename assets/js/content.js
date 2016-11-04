var Article = function (inp) {
  this.type = 'article';
  this.date = inp.date;
  this.tags = inp.tags;
  this.title = inp.title;
  this.body = inp.body;
};

var Picture = function (inp) {
  this.type = 'picture';
  this.filename = inp.filename;
  this.caption = inp.caption;
  this.link = inp.link;
};

var Block = function (inp) {
  this.type = 'block';
  this.text = inp.text;
};

var contentList = [
  // new Article ({
  //   title: "The Segment Title",
  //   date: '04112016',
  //   tags: [],
  //   body: [
  //     new Block ({
  //       text: "Herein be the content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Now is the winter of our discontent made glorious summer by this son of York, and all the clouds that lour'd upon our house in the deep bosom of the ocean buried. Grim visaged War hath smoothed his wrinkled front and now distinctly I remember it was in the bleak December, and each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow, vainly I had sought to borrow from my books surcease of sorrow, sorrow for the lost Lenore.",
  //     }),
  //     new Picture ({
  //       filename: 'fox.jpg',
  //       caption: "Here's a quick summary of the article that relates to the image.",
  //     }),
  //     new Block ({
  //       text: "Herein be the content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Now is the winter of our discontent made glorious summer by this son of York, and all the clouds that lour'd upon our house in the deep bosom of the ocean buried. Grim visaged War hath smoothed his wrinkled front and now distinctly I remember it was in the bleak December, and each separate dying ember wrought its ghost upon the floor. Eagerly I wished the morrow, vainly I had sought to borrow from my books surcease of sorrow, sorrow for the lost Lenore.",
  //     }),
  //   ]
  // }),
  new Article ({
    title: "Luna 3",
    date: '20160527',
    tags: ['game'],
    body: [
      new Block ({
        text: "This was my first try at making an actual playable browser game. There are a lot of technical decisions I would have made very differently in retrospect (worst sin of all: the Javascript function that draws the images on the canvas is all condensed into a single drastically bloated file), but in terms of aesthetics and playability I think it actually turned out a lot better than some of my later more technically sound efforts. If you're interested in taking a look at the source code <a href='https://github.com/j-goodman/Luna3' target='_blank'>you can see it on my GitHub</a>, or click the image below to try playing."
      }),
      new Picture ({
        filename: 'luna3.png',
        link: 'http://www.abolbridge.com/Luna3/',
        caption: "Luna 3 is a missile-defense browser game made with HTML Canvas and Javascript. Try the bolo rocket!",
      }),
    ]
  }),
  new Article ({
    title: "Cloudcast",
    date: '20160520',
    tags: [],
    body: [
      new Picture ({
        filename: 'cloudcast.png',
        link: 'http://www.cloudcast.space/',
        caption: "An audio sharing site designed for podcast creators, inspired by SoundCloud. Cloudcast was my final project when I was studying at AppAcademy in New York.",
      }),
    ]
  }),
];
