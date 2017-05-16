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
    title: "Cannonfire",
    date: '20170508',
    tags: ['games'],
    body: [
      new Block ({
        text: "This one's a work in progress based on an idea I had after watching too much Ken Burns -- the goal for it is to be sort of <a href='https://en.wikipedia.org/wiki/The_Oregon_Trail_(video_game)'>Oregon Trail</a> meets <a href='https://en.wikipedia.org/wiki/Risk_(game)'>Risk</a>. You play as the commander of a single territory's troops, and can move freely around a map of western North America seeking out and battling other commanders and expanding your forces."
      }),
      new Picture ({
        filename: 'cannonfire.png',
        link: 'http://www.johngoodman.io/cannonfire/',
        caption: "In-progress strategy game.",
      }),
    ]
  }),

  new Article ({
    title: "Hooli",
    date: '20170501',
    tags: [],
    body: [
      new Block ({
        text: "The official hooli.com for HBO's Silicon Valley. Built to update with the release of the third episode of Season 4 and give fans some more details about some of that episode's plot points."
      }),
      new Picture ({
        filename: 'hooli.png',
        link: 'http://www.hooli.com',
        caption: "Static site for HBO's Silicon Valley.",
      }),
      new Block ({
        text: "For the benefit of non-viewers, Hooli is sort of the show's generic Google-type giant sinister tech corporation. Was given a lot of freedom to go wild with the animations on this one, and I was also tasked with building the mobile version of the design from scratch."
      }),
    ]
  }),

  new Article ({
    title: "Merchant Marine",
    date: '20170424',
    tags: ['games'],
    body: [
      new Block ({
        text: "A simple commodity trading game built in 72 hours for the Ludum Dare game jam. Definitely something I'd like to come back to some day and add some features to -- as it stands it's a little bit bare. Currently though, you can travel between planets trying to increase your bottom line by buying and selling goods. Optimized to work best in Chrome."
      }),
      new Picture ({
        filename: 'merchant-marine.png',
        link: 'http://www.johngoodman.io/merchant-marine/',
        caption: "Submission for the 2017 Ludum Dare 3-Day Game Jam",
      }),
    ]
  }),

  new Article ({
    title: "Starbird",
    date: '20170321',
    tags: ['games'],
    body: [
      new Block ({
        text: "You can play this one on desktop but it's mostly designed for mobile -- you can open it on your phone's browser to play using tilt controls. Gets a lot harder once you hit 100 points."
      }),
      new Picture ({
        filename: 'starbird.png',
        link: 'http://www.johngoodman.io/starbird/',
        caption: "Mobile shooter game using tilt controls.",
      }),
    ]
  }),

  new Article ({
    title: "Typewriter",
    date: '20170304',
    tags: ['tools'],
    body: [
      new Block ({
        text: "A typewriter simulator built to work in Chrome and Firefox. Allows the user to type documents in the aesthetic style of a type-bar typewriter with a whiteout key (Delete or _), and download their pages immediately as a PDF."
      }),
      new Picture ({
        filename: 'typewriter.png',
        link: 'http://www.johngoodman.io/typewriter/',
        caption: "Type up documents that look like sheets from a typewriter and download as a PDF.",
      }),
      new Block ({
        text: "This project came out of wanting a program for my own use that would let me write in stream-of-consciousness style without being able to edit what I'd written -- I find that having unlimited editing power can really make me overthink my writing. Eventually I did have to compromise that vision a little bit and add in the whiteout key; it can get pretty annoying to not even be able to correct typos."
      }),
    ]
  }),

  new Article ({
    title: "Google EDU Transformation Center",
    date: '20170304',
    tags: [],
    body: [
      new Block ({
        text: "A web app built for the Google Education team with a full backend CMS and custom search system. Lets school administrators upload ideas about what has and hasn't worked for them when it comes to using Google technology for education."
      }),
      new Picture ({
        filename: 'transformation.png',
        link: 'https://edutransformationcenter.withgoogle.com/',
        caption: "Full stack webapp for the Google Education team.",
      }),
    ]
  }),

  new Article ({
    title: "Graphoid",
    date: '20170224',
    tags: ['tools'],
    body: [
      new Block ({
        text: "A dynamic data visualizer that lets the user upload CSVs to render data as a dynamic graph. Right now the only feature is dynamic bar graphs where the user can slide a timeline forward and back, but in the future I'd like to include other kinds of data representations as well. Obviously first on the to-do list for this one though is to actually quantify the bar graph so it could be usable as an iframed in element."
      }),
      new Picture ({
        filename: 'graphoid.png',
        link: 'http://www.johngoodman.io/graphoid/',
        caption: "Upload a CSV to generate a dynamic timeline graph.",
      }),
    ]
  }),

  new Article ({
    title: "3D Cube Demo",
    date: '20170311',
    tags: [],
    body: [
      new Block ({
        text: "A demo of the 3-D Transform functionality of HTML/CSS, integrated with Javascript to allow the user to freely spin the simulated cube using their W E D X Z and A keys."
      }),
      new Picture ({
        filename: 'cube.png',
        link: 'http://www.johngoodman.io/3D-cube-demo/',
        caption: "Use your keyboard to spin the cube.",
      }),
    ]
  }),

  new Article ({
    title: "Maya Numeral Converter",
    date: '20170104',
    tags: ['tools'],
    body: [
      new Block ({
        text: "A simple frontend app to convert numbers from standard base-10 Arabic numerals into base-20 Maya numerals."
      }),
      new Picture ({
        filename: 'mayanum.png',
        link: 'http://www.johngoodman.io/mayanum/',
        caption: "Convert standard numbers to Maya numerals.",
      }),
      new Block ({
        text: "This one's a really fascinating number system -- worlds better than Greek or Roman numerals -- so I definitely recommend reading up on it. As a system it's just as friendly for advanced math as the Hindu-Arabic system. Also it has a very elegant solution to the problem of base-20 number systems needing an unwieldy number of symbols: each digit's symbol can be further broken down into smaller units. The <a href='https://en.wikipedia.org/wiki/Maya_numerals'>wikipedia page</a> gives a pretty robust explanation of exactly how they work, always a good place to start."
      }),
    ]
  }),

  new Article ({
    title: "Germs",
    date: '20161118',
    tags: [],
    body: [
      new Block ({
        text: "The idea for this one is to be sort of a petri dish simulator -- I took some inspiration on it from Conway's Game of <a href='https://en.wikipedia.org/wiki/Cellular_automaton'>Life</a>. Each of the individual cells follows a basic set of rules, based on a thirteen character 'DNA string' that sets values like their size, speed, and number of offspring. The autotrophs grow naturally and split when they reach a certain radius, while the heterotrophs move around in search of prey and to avoid predators."
      }),
      new Picture ({
        filename: 'germs.png',
        link: 'http://www.johngoodman.io/germs2/',
        caption: "A digital petri dish that lets you set up and observe the processes of ecological competition and natural selection.",
      }),
      new Block ({
        text: "When a cell overlaps with another cell that's lower on the food chain, it absorbs that cell's size into its own. When it reaches its splitting radius, the germ splits. It replicates its DNA string and passes it on to its offspring. This replication process is deliberately imperfect so that it sometimes results in random errors, or mutations. A good starting setup is to put in 20-100 autotrophs and 1-10 herbivores and carnivores."
      }),
    ]
  }),

  new Article ({
    title: "The Wendigo",
    date: '20160822',
    tags: [],
    body: [
      new Block ({
        text: "I wanted to make a text-adventure game building system that was straightforward and adaptable enough that when I finally get around to making one I'll have all the heavy mechanical lifting already done. This one includes traveling logic, stats, inventory, and a turn-based combat system."
      }),
      new Picture ({
        filename: 'thewendigo.png',
        link: 'http://www.johngoodman.io/wendigo/',
        caption: "An in-progress text adventure game.",
      }),
      new Block ({
        text: "From a development philosophy perspective, my goal here was to take Javascript objects as literally as possible -- for instance, when the user picks up an object from their environment, the object where that item's data is stored is moved from being recorded in the room object to being kept in the player's inventory object, as you might intuitively expect. Unfortunately the 'progress' lately is more theoretically than practical on this project."
      }),
    ]
  }),

  new Article ({
    title: "Third Person Shooter Demo",
    date: '20160804',
    tags: [],
    body: [
      new Block ({
        text: "I remember in high school I made a painball game on GameMaker 6 using a similar control mechanic as this demo, but since then I've lost the files for it. Probably the longest full-length game I've made, and while the controls here are clunkier than I remember getting them to be it's still something I might want to think about going deeper into again. This is just proof of concept for the controls."
      }),
      new Picture ({
        filename: 'shooterdemo.png',
        link: 'http://www.johngoodman.io/demo/',
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
        text: "After cutting my teeth with Luna 3 I still had a few weeks of unemployment ahead of me so I figured I'd take some time to build another game. Had a lot of fun designing the controls and the combat mechanics, as well as creating the various enemies you fight in the game. Unfortunately never made it past level 2, but still hope to return to this one someday, I'm really happy with how the sprites and backgrounds ended up coming out. <a href='https://github.com/j-goodman/Luna3' target='_blank'>The source code is available</a> on my Github for anyone who's interested, or you can <a href='http://www.johngoodman.io/MoreTunnels/'>play it here</a>."
      }),
      new Picture ({
        filename: 'moretunnels.png',
        link: 'http://www.johngoodman.io/MoreTunnels/',
        caption: "Demo version of a browser based platform game, built from scratch with Javascript and HTML Canvas.",
      }),
    ]
  }),

  new Article ({
    title: "Dice",
    date: '20160820',
    tags: [],
    body: [
      new Block ({
        text: "This one's a pretty straightforward HTML dice game, it's based on a game we used to play at the summer camp I worked at -- it's a lot of fun with a big circle of people rolling, maybe not as much with just one player online, where it's just a game of trying to beat your own score. Anyway, I wanted to get some experience building a game just with DOM manipulation rather than rendering it onto a canvas element, which is my usual approach. Saves a lot of effort, as long as the game is simple enough."
      }),
      new Picture ({
        filename: 'dice.png',
        link: 'http://www.johngoodman.io/dice/',
        caption: "Simple dice game built with basic HTML and vanilla Javascript. About 160 lines of code.",
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
        link: 'http://www.johngoodman.io/Luna3/',
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
    tags: ['tools'],
    body: [
      new Block ({
        text: "This up in here as an example of the kind of projects I worked on as part of the AppAcademy curriculum. The assignment on that day was to create a DOM editor, intended to be a lightweight version of JQuery. It doesn't handle AJAX requests, but its basic functionality does work. Looking back though it's just interesting to recall how little I understood what I was building as was able to figure it out well enough to build it. <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>You can check it out here if you're curious</a>. Needed a lot of help from the other student I was partnered with that day. Thanks Adriana."
      }),
      new Picture ({
        filename: 'domquixote.png',
        caption: "Library for dynamic DOM editing with Javascript. Meant to be something like a less overwhelmingly big version of JQuery.",
      }),
    ]
  }),

  new Article ({
    title: "About Me",
    date: '20160501',
    tags: ['about'],
    body: [
      new Picture ({
        filename: 'headshot.jpg',
        caption: "Hi, I'm John Goodman, this is my personal site. You can look me up on <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>Github</a> or just browse around here to see what I'm working on.",
      }),
      new Block ({
        text: "I'm a full-stack web developer specializing in Javascript, Django, and Angular.js, living in Brooklyn and working in Manhattan at <a href='http://joystickinteractive.com/' target='_blank'>Joystick Interactive</a>, a digital production agency. This site is a place for me to keep my published projects in one place, mostly the things I work on in my free time. You can contact me at johncurtisgoodman@gmail.com"
      }),
    ]
  }),
];
