var Article = function (inp) {
  this.type = 'article';
  this.date = inp.date;
  this.tags = inp.tags;
  this.title = inp.title;
  this.imageId = inp.imageId;
  this.link = inp.link;
  this.blurb = inp.blurb;
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

  new Article ({
    title: "Robotopia",
    date: '20170623',
    tags: ['games'],
    blurb: "You play as an advanced AI that's been banished to the frozen north. One of things I'm most satisfied about with this one is the sound design, but I also feel like it plays much smoother than some of my earlier games. It's mostly a building simulator, but it's got some combat-type gameplay as well as you find yourself in competition for resources with the tundra's non-mechanical inhabitants.",
    imageId: 'robotopia',
    link: 'http://www.johngoodman.io/robotopia/',
  }),

  new Article ({
    title: "Cannonfire",
    date: '20170508',
    tags: ['games'],
    blurb: "This one's a turn-based strategy simulator based on an idea I had after watching too much Ken Burns -- the goal for it is to be sort of <a href='https://en.wikipedia.org/wiki/The_Oregon_Trail_(video_game)'>Oregon Trail</a> meets <a href='https://en.wikipedia.org/wiki/Risk_(game)'>Risk</a>. You play as the commander of a single territory's troops, and can move freely around a map of western North America seeking out and battling other commanders and expanding your forces.",
    imageId: 'cannonfire',
    link: 'http://www.johngoodman.io/cannonfire/',
  }),

  new Article ({
    title: "Hooli",
    date: '20170501',
    tags: ['sites'],
    blurb: "The official hooli.com for HBO's Silicon Valley. Built to update with the release of the third episode of Season 4 and give fans some more details about some of that episode's plot points. For the benefit of non-viewers, Hooli is sort of the show's generic Google-type giant sinister tech corporation. Was given a lot of freedom to go wild with the animations on this one, and I was also tasked with building the mobile version of the design from scratch.",
    imageId: 'hooli',
    link: 'http://www.hooli.com',
  }),

  new Article ({
    title: "Merchant Marine",
    date: '20170424',
    tags: ['games'],
    blurb: "Submission for the 2017 Ludum Dare 3-Day Game Jam. A simple commodity trading game built in 72 hours for the Ludum Dare game jam. Definitely something I'd like to come back to some day and add some features to -- as it stands it's a little bit bare. Currently though, you can travel between planets trying to increase your bottom line by buying and selling goods. Optimized to work best in Chrome.",
    imageId: 'merchant-marine',
    link: 'http://www.johngoodman.io/merchant-marine/',
  }),

  new Article ({
    title: "Google EDU Transformation Center",
    date: '20170304',
    tags: ['sites'],
    blurb: "A web app built for the Google Education team with a full backend CMS and custom search system. Lets school administrators upload ideas about what has and hasn't worked for them when it comes to using Google technology for education.",
    imageId: 'google-transformation',
    link: 'https://edutransformationcenter.withgoogle.com/',
  }),

  new Article ({
    title: "Starbird",
    date: '20170321',
    tags: ['games'],
    blurb: "Mobile shooter game using tilt controls. You can play this one on desktop but it's mostly designed for mobile -- you can open it on your phone's browser to play using tilt. Gets a lot harder after you hit 100 points.",
    imageId: 'starbird',
    link: 'http://www.johngoodman.io/starbird/',
  }),

  new Article ({
    title: "Typewriter",
    date: '20170304',
    tags: ['tools'],
    blurb: "A typewriter simulator built to work in Chrome and Firefox. Allows immediate download as a PDF. This project came out of wanting a program for my own use that would let me write in stream-of-consciousness style without being able to edit what I'd written -- I find that having unlimited editing power can really make me overthink my writing. Eventually I did have to compromise on that concept a little bit and add in the whiteout key; it can get pretty annoying to not even be able to correct typos.",
    imageId: 'typewriter',
    link: 'http://www.johngoodman.io/typewriter/',
  }),

  new Article ({
    title: "Graphoid",
    date: '20170224',
    tags: ['tools'],
    blurb: "A dynamic data visualizer that lets the user upload CSVs to render data as a dynamic graph. Right now the only feature is dynamic bar graphs where the user can slide a timeline forward and back, but in the future I'd like to include other kinds of data representations as well. Obviously first on the to-do list for this one though is to actually quantify the bar graph so it could be usable as an iframed in element.",
    imageId: 'graphoid',
    link: 'http://www.johngoodman.io/graphoid/',
  }),

  new Article ({
    title: "3D Cube Demo",
    date: '20170311',
    tags: ['sites'],
    blurb: "A demo of the 3-D Transform functionality of HTML/CSS, integrated with Javascript to allow the user to freely spin the simulated cube using their W E D X Z and A keys. Use the spacebar to roll the dice.",
    imageId: 'cube-demo',
    link: 'http://www.johngoodman.io/3D-cube-demo/',
  }),

  new Article ({
    title: "Maya Numeral Converter",
    date: '20170104',
    tags: ['tools'],
    blurb: "A simple frontend app to convert numbers from standard base-10 Arabic numerals into base-20 Maya numerals. It's a really fascinating number system -- worlds better than Greek or Roman numerals -- so I definitely recommend reading up on it. As a system it's just as friendly for advanced math as the Hindu-Arabic system. The <a href='https://en.wikipedia.org/wiki/Maya_numerals'>wikipedia page</a> gives a pretty robust explanation of exactly how it works, always a good place to start.",
    imageId: 'mayanum',
    link: 'http://www.johngoodman.io/mayanum/',
  }),

  new Article ({
    title: "Germs",
    date: '20161118',
    tags: [],
    blurb: "The idea for this one is to be sort of a petri dish simulator -- I took some inspiration on it from Conway's Game of <a href='https://en.wikipedia.org/wiki/Cellular_automaton'>Life</a>. Each of the individual cells follows a basic set of rules, based on a thirteen character 'DNA string' that sets values like their size, speed, and number of offspring. When a cell overlaps with another cell that's lower on the food chain, it absorbs that cell's size into its own. Eventually it splits and replicates its DNA string. The replication process is imperfect so that it sometimes results in random errors, or mutations.",
    imageId: 'germs',
    link: 'http://www.johngoodman.io/germs2/',
  }),

  new Article ({
    title: "The Wendigo",
    date: '20160822',
    tags: [],
    blurb: "I wanted to make a text-adventure game building system that was straightforward and adaptable enough that when I get around to making one I'll have all the heavy mechanical lifting already done. This one includes traveling logic, stats, inventory, and a turn-based combat system. From a development philosophy perspective, my goal here was to use Javascript objects as literally as possible -- when the user picks up an object from their environment, the object where that item's data is stored is moved from the room object to the player's inventory object, as you'd intuitively expect.",
    imageId: 'wendigo',
    link: 'http://www.johngoodman.io/wendigo/',
  }),

  new Article ({
    title: "Third Person Shooter Demo",
    date: '20160804',
    tags: [],
    blurb: "Conceptual demo for a 2-D shooter game. I remember in high school I made a paintball game on GameMaker 6 using a similar control mechanic as this demo, but since then I've lost the files for it. Probably the longest full-length game I've made, and while the controls here are clunkier than I remember getting them to be it's still something I might want to think about going deeper into again. This is just proof of concept for the controls.",
    imageId: 'shooterdemo',
    link: 'http://www.johngoodman.io/demo/',
  }),

  new Article ({
    title: "More Tunnels",
    date: '20160527',
    tags: ['games'],
    blurb: "After cutting my teeth with Luna 3 I still had a few weeks of unemployment ahead of me so I figured I'd take some time to build another game. Had a lot of fun designing the controls and the combat mechanics, as well as creating the various enemies you fight in the game. Unfortunately never made it past level 2, but still hope to return to this one someday, I'm really happy with how the sprites and backgrounds ended up coming out. <a href='https://github.com/j-goodman/Luna3' target='_blank'>The source code is available</a> on my Github for anyone who's interested, or you can <a href='http://www.johngoodman.io/MoreTunnels/'>play it here</a>.",
    imageId: 'more-tunnels',
    link: 'http://www.johngoodman.io/MoreTunnels/',
  }),

  new Article ({
    title: "Dice",
    date: '20160820',
    tags: [],
    blurb: "This one's a pretty straightforward HTML dice game, it's based on a game we used to play at the summer camp I worked at -- it's a lot of fun with a big circle of people rolling, maybe not as much with just one player online, where it's just a game of trying to beat your own score. Anyway, I wanted to get some experience building a game just with DOM manipulation rather than rendering it onto a canvas element, which is my usual approach. Saves a lot of effort, as long as the game is simple enough.",
    imageId: 'dice-game',
    link: 'http://www.johngoodman.io/dice/',
  }),

  new Article ({
    title: "Luna 3",
    date: '20160527',
    tags: ['games'],
    blurb: "This was my first try at making an actual playable browser game. There are a lot of technical decisions I would have made very differently in retrospect (worst sin of all: the Javascript function that draws the images on the canvas is all condensed into a single drastically bloated file), but in terms of aesthetics and playability I think it actually turned out a lot better than some of my later more technically sound efforts. If you're interested in taking a look at the source code <a href='https://github.com/j-goodman/Luna3' target='_blank'>you can see it on my Github</a>, or click the image below to try playing.",
    imageId: 'luna-3',
    link: 'http://www.johngoodman.io/Luna3/',
  }),

  new Article ({
    title: "Cloudcast",
    date: '20160520',
    tags: ['sites'],
    blurb: "This was my final project when I was studying at AppAcademy in New York. It's built on Ruby on Rails, using React-Flux for the frontend. It wasn't the most challenging of the features I had to implement here, but probably the one I'm most happy with is that orange-white-and-blue audio slider you can see under each track: give it a slide.",
    imageId: 'cloudcast',
    link: 'http://cloud-cast.herokuapp.com/',
  }),

  new Article ({
    title: "DOMquixote",
    date: '20160507',
    tags: ['tools'],
    blurb: "This up in here as an example of the kind of projects I worked on as part of the AppAcademy curriculum. The assignment on that day was to create a DOM editor, intended to be a lightweight version of JQuery. It doesn't handle AJAX requests, but its basic functionality does work. Looking back though it's just interesting to recall how little I understood what I was building as was able to figure it out well enough to build it. <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>You can check it out here if you're curious</a>. Needed a lot of help from the other student I was partnered with that day. Thanks Adriana.",
    imageId: 'dom-quixote',
    link: 'https://github.com/j-goodman/DOMquixote',
  }),

  new Article ({
    title: "About Me",
    date: '20160501',
    tags: ['about'],
    blurb: "Hi, I'm John Goodman, this is my personal site. You can look me up on <a href='https://github.com/j-goodman/DOMquixote' target='_blank'>Github</a> or just browse around here to see what I'm working on. I'm a full-stack web developer specializing in Javascript, Django, and Angular.js, living in Brooklyn. This site is a place for me to keep my published projects in one place, mostly the things I work on in my free time. You can contact me at johncurtisgoodman@gmail.com",
    imageId: 'headshot',
    link: 'http://www.johngoodman.io/j-goodman-resume.pdf'
  }),
];
