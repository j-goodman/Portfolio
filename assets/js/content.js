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
  //   ]
  // }),

  new Article ({
    title: "Dice",
    date: '20160820',
    tags: [],
    body: [
      new Picture ({
        filename: 'dice.png',
        link: 'http://www.abolbridge.com/dice/',
        caption: "Simple dice game built with basic HTML and vanilla Javascript. About 160 lines of code.",
      }),
    ]
  }),

  new Article ({
    title: "The Wendigo",
    date: '20160822',
    tags: ['games'],
    body: [
      new Picture ({
        filename: 'thewendigo.png',
        link: 'http://www.abolbridge.com/wendigo/',
        caption: "An in-progress text adventure game.",
      }),
    ]
  }),

  new Article ({
    title: "Third Person Shooter Demo",
    date: '20160804',
    tags: [],
    body: [
      new Picture ({
        filename: 'shooterdemo.png',
        link: 'http://www.abolbridge.com/dice/',
        caption: "Conceptual demo for a 2-D gameplay third person shooter.",
      }),
    ]
  }),

  new Article ({
    title: "More Tunnels",
    date: '20160527',
    tags: ['games'],
    body: [
      new Block ({
        text: "After cutting my teeth with Luna 3 I still had a few weeks of unemployment ahead of me so I figured I'd take some time to build another game. Had a lot of fun designing the controls and the combat mechanics, as well as creating the various enemies you fight in the game. Unfortunately never made it past level 2, but still hope to return to this one someday, I'm really happy with how the sprites and backgrounds ended up coming out. <a href='https://github.com/j-goodman/Luna3' target='_blank'>The source code is available</a> on my Github for anyone who's interested."
      }),
      new Picture ({
        filename: 'moretunnels.png',
        link: 'http://www.abolbridge.com/MoreTunnels/',
        caption: "Demo version of a browser based platform game, built from scratch with Javascript and HTML Canvas.",
      }),
    ]
  }),

  new Article ({
    title: "Luna 3",
    date: '20160527',
    tags: ['games'],
    body: [
      new Block ({
        text: "This was my first try at making an actual playable browser game. There are a lot of technical decisions I would have made very differently in retrospect (worst sin of all: the Javascript function that draws the images on the canvas is all condensed into a single drastically bloated file), but in terms of aesthetics and playability I think it actually turned out a lot better than some of my later more technically sound efforts. If you're interested in taking a look at the source code <a href='https://github.com/j-goodman/Luna3' target='_blank'>you can see it on my Github</a>, or click the image below to try playing."
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
      new Block ({
        text: "This was my final project when I was studying at AppAcademy in New York. It's built on Ruby on Rails, using React-Flux for the frontend. It wasn't the most challenging of the features I had to implement here, but probably the one I'm most happy with is that orange-white-and-blue audio slider you can see under each track: give it a slide.",
      }),
      new Picture ({
        filename: 'cloudcast.png',
        link: 'http://www.cloudcast.space/',
        caption: "An audio sharing site designed for podcast creators, inspired by SoundCloud.",
      }),
    ]
  }),

  new Article ({
    title: "DOMquixote",
    date: '20160507',
    tags: [],
    body: [
      new Block ({
        text: "This up in here as an example of the kind of projects I worked on as part of the AppAcademy curriculum. The assignment on that day was to create a DOM editor, intended to be a lightweight version of JQuery. It doesn't handle AJAX requests, but its basic functionality does work. Looking back though it's just interesting to recall how little I understood what I was building as was able to figure it out well enough to build it. <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>You can check it out here if you're curious</a>. Needed a lot of help from the other student I was partnered with that day. Thanks Adriana!"
      }),
      new Picture ({
        filename: 'domquixote.png',
        caption: "Library for dynamic DOM editing with Javascript. Meant to be something like a less overwhelmingly big version of JQuery.",
      }),
    ]
  }),

  new Article ({
    title: "Abol Bridge",
    date: '20160501',
    tags: ['about'],
    body: [
      new Picture ({
        filename: 'abolbridge.jpeg',
        caption: "Hi, I'm John Goodman, this is my personal site. You can look me up on <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>Github</a> or just browse around here to see what I'm working on.",
      }),
      new Block ({
        text: "I'm a full-stack web developer specializing in Javascript, Ruby on Rails, and Angular.js, living in Brooklyn and working in Manhattan. This site is a place for me to keep my published projects in one place, mostly the things I work on in my free time. You can contact me at johncurtisgoodman@gmail.com"
      }),
    ]
  }),
];