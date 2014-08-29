var home = {
 title 		: "Home - Legacy of Hope",
 thumb_img	: "thumb_home.png",
 description	: "The Legacy of Hope Foundation is dedicated to increasing awareness and support for Nelson Mandela’s Legacy of Hope.",
 stylesheet	: "home2.css",
 currentpage	: "menu-home",
 board: [
 {name: "Charlize Theron", image: "/img/board_theron.png"},
 {name: "Barbara Walters", image: "/img/board_walters.png"},
 {name: "Ben Vereen", image: "/img/board_vereen.png"},
 {name: "Natalie Portman", image: "/img/board_portman.png"},
 {name: "Anthony Hopkins", image: "/img/board_hopkins.png"},
 {name: "Ruby Bridges", image: "/img/board_bridges.png"}
 ],
 stories: [
 {
  title: "Mandela Day 2014",
  image: "/img/card_mandela_day.jpg",
  blurb: "The Legacy of Hope Foundation hosted an evening of entertainment on Mandela Day to support a global campaign to fulfill the last living wish of Nelson Mandela—to build Africa’s 4th dedicated children’s hospital in Johannesburg, South Africa in 2016. ",
  date: "July 18, 2014",
  likes : "528",
  link: "/mandeladay"
},
{
  title: "The Gibson Guitar Initiative",
  image: "/img/card_guitar_initiative.jpg",
  blurb: "The Guitar Initiative is a campaign to increase awareness and support for Nelson Mandela’s Legacy of Hope, through the medium of music. This campaign is supported by Gibson and managed by veteran music producer and executive producer of Legacy of Hope Concerts, Eric Gast. ",
  date: "July 1, 2014",
  likes : "566",
  link: "/guitarinitiative"
},
{
  title: "The Legacy of Hope Concert",
  image: "/img/card_concert.jpg",
  blurb: "Join Legacy of Hope for a worldwide simulcast concert in support of raising $30M for the Nelson Mandela Children’s Hospital. The concert will feature a collection of the world’s most talented and respected musicians and will be broadcast around the world in celebration of Mr. Mandela’s Legacy.",
  date: "December 13, 2014",
  likes : "654",
  link: "/concert"
}
],
quotes:[
{author: "Graca Machel, the wife of the late Mr. Nelson Mandela   - June 2014", quote: "I am inspired by his rich legacy that promotes justice, compassion, and solidarity. Children were very dear to Madiba and his last wish was to build the Nelson Mandela Children’s Hospital."},
{author: "Sibongile Mkhabela", quote: "Tata felt very strongly about the hospital. His heart yearned for it."},
{author: "Nelson Mandela", quote: "The true character of a society is revealed in how it treats its children."},
{author: "Nelson Mandela", quote: "History will judge us by the difference we make in the everyday lives of children."},
{author: "Nelson Mandela", quote: "One way that we can build a better future for children is by empowering them through allowing them to speak up for themselves. Of course, we as adults have to guide them and to take ultimate responsibility but that is something quite different from patronizing them. The rights of children must, importantly, include the right to be themselves and to talk for themselves."},
{author: "Nelson Mandela", quote: "We understand and promote the notion that while children need to be guided they also have an entrenched right to be whatever they want to be and that they can achieve this only if they are given the space to dream and live out their dreams."},
{author: "Nelson Mandela", quote: "It always gives me great pleasure to be surrounded by the beautiful children of our land. Whenever I am with the energetic young people … I feel like a recharged battery, confident that our country can look forward to great things."},
{author: "Nelson Mandela", quote: "Together as a nation, we have the obligation to put sunshine into the hearts of our little ones. They are our precious possessions. They deserve what happiness life can offer."}
]
};

var board = {
  title: "Board of Directors - Legacy of Hope",
  thumb_img: "thumb_board.png",
  description: "The Legacy of Hope board of Directors.",
  stylesheet: "board.css",
  currentpage: "menu-board"
};
var concert = {
  title: "Concert - Legacy of Hope",
  thumb_img: "thumb_concerts.png",
  description: "This historic 4-6 hour concert event will feature a minimum of 10 national artists on stage and will be simulcast worldwide. This event plans to be more collaborative than any concert has ever been before.",
  stylesheet: "concert2.css",
  currentpage: "menu-concert"
};
var guitarinitiative = {
  title: "The Guitar Initiative - Legacy of Hope",
  thumb_img: "thumb_guitarinitiative.png",
  description: "The Guitar Initiative is a campaign to increase awareness and support for Nelson Mandela’s Legacy of Hope, through the medium of music. The Initiative has two main goals: to obtain musician and celebrity endorsements, and to produce ongoing recordings by artists to benefit the Children’s Hospital and its young patients.",
  stylesheet: "guitarinitiative.css",
  currentpage: "menu-guitar"
};
var legacy_of_hope_nmcht_concert = {
  title: "Sibongile - Legacy of Hope",
  thumb_img: "thumb_sibongile.png",
  description: "The loss of Sibongile Mkhabela’s son spurred her on in the almost impossible dream of creating the Nelson Mandela Children’s Hospital in South Africa.",
  stylesheet: "sibongile.css",
  currentpage: "menu-sibongile"
};

var mandeladay = {
  title: "Mandela Day 2014 - Legacy of Hope",
  thumb_img: "thumb_mandeladay.png",
  description: "Legacy of Hope hosted dignitaries, celebrities and advocates at the Beverly Hills Wallis Annenberg Theatre to celebrate the ongoing work of Nelson Mandela.",
  stylesheet: "mandeladay.css",
  currentpage: "menu-mandeladay"
};


var mission = {
  title: "Our Mission - Legacy of Hope",
  thumb_img: "thumb_mission.png",
  description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
  stylesheet: "mission.css",
  currentpage: "menu-mission"
};
var hospital = {
  title: "The Hospital - Legacy of Hope",
  thumb_img: "thumb_hospital.png",
  description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
  stylesheet: "hospital.css",
  currentpage: "menu-hospital"
};
var sponsors = {
  title: "Sponsors - Legacy of Hope",
  thumb_img: "thumb_mission.png",
  description: "The partnering of The Nelson Mandela Children's Hospital Trust and The Legacy of Hope Foundation was expressly formed to aid in the creation and awareness of The Nelson Mandela Children's Hospital.",
  stylesheet: "sponsors.css",
  currentpage: "menu-sponsors"
};


exports.getPageData = function(category, page, callback) {
	if(category === 'cms') {
    switch (page){
      case 'home':
      callback(null, home);
      break;
      case 'board':
      callback(null, board);
      break;
      case 'concert':
      callback(null, concert);
      break;
      case 'guitarinitiative':
      callback(null, guitarinitiative);
      break;
      case 'legacy-of-hope-nmcht-concert':
      callback(null, legacy_of_hope_nmcht_concert);
      break;
      case 'mandeladay':
      callback(null, mandeladay);
      break;
      case 'mission':
      callback(null, mission);
      break;
      case 'hospital':
      callback(null, hospital);
      break;
      case 'sponsors':
      callback(null, sponsors);
      break;
      default:
      callback(null, home);
      break;
    }
  } else callback({error:'invalid category'});
};
