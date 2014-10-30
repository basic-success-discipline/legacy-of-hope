var rss = require('node-rss');
var fs = require('fs');



var newsStories = [


{
  title: "Larry King shares his thoughts on 'The Last Hero,' Nelson Mandela",
  image: "/img/card_larry.jpg",
  blurb: "In support of the Nelson Mandela Children’s Hospital, Larry King shares his thoughts and experience when he had the opportunity to meet with Mr. Mandela in South Africa.",
  date: "October 23, 2014",
  link: "/2014/10/25/LarryKing"
},

{
  title: "Graça Machel mourns her husband, Mandela",
  image: "/img/card_graca.jpg",
  blurb: "Christiane Amanpour speaks with Graça Machel about her late husband, her first TV interview after six months of mourning.",
  date: "June 30, 2014",
  link: "/2014/6/30/GraçaMachel"
},

{
  title: "Chuck Nice Spotlight",
  image: "/img/card_chuck.jpg",
  blurb: "In support of the Legacy of Hope Foundation and the Nelson Mandela Children’s Hospital, Chuck Nice was the emcee for both the 2013 and 2014 Legacy of Hope Mandela Day events held in New York and Los Angeles. At both events, the audience certainly laughed, but they were also given a strong and meaningful message: Nelson Mandela had a final wish. It’s now our turn to work hard and honor this wish and his legacy for future generations.",
  date: "October 11, 2014",
  link: "/2014/10/11/ChuckNice"
},
{
  title: "Middleweight Boxer Sam Soliman Named Legacy of Hope Ambassador",
  image: "/img/card_soliman.jpg",
  blurb: "Soliman, the Melbourne boxer and former IBF World Middleweight Champion, welcomed the opportunity to align himself with the great South African statesman and humanitarian by becoming an Ambassador for the Legacy of Hope Foundation, a group dedicated to bringing Mandela’s last living wish to fruition.",
  date: "October 5, 2014",
  link: "/2014/10/5/SamSolimanLOHAmbassador"
},
{
  title: "Arun Gandhi Spotlight",
  image: "/img/card_arun.jpg",
  blurb: "Millions around the world have been influenced and inspired by Nelson Mandela. Of those millions, relatively few met the great South African Leader in person. Arun Gandhi, the fifth grandson of Mahatma Gandhi, was one of those fortunate few.",
  date: "October 4, 2014",
  link: "/2014/10/4/ArunGandhi"
},

 {
  title: "Ruby Bridges Spotlight",
  image: "/img/card_ruby.jpg",
  blurb: "Ruby Bridges was honored on July 18th, 2014 during the Legacy of Hope Mandela Day Celebration at the Wallis Annenberg Center for the Performing Arts in Beverly Hills. Following this event, Ruby shared her thoughts on what Nelson Mandela meant to her and how a children’s hospital in his name would honor his legacy.",
  date: "September 27, 2014",
  link: "/2014/9/27/RubyBridges"
},
 {
  title: "Táta Vega Spotlight",
  image: "/img/card_tata.jpg",
  blurb: "In a moving conversation, Táta Vega shared her thoughts following the July 18th, 2014 Legacy of Hope Mandela Day event held at the Wallis Annenberg Center for the Performing Arts, on what would have been Nelson Mandela’s 96th birthday.",
  date: "September 20, 2014",
  link: "/2014/9/20/TataVega"
},
 {
  title: "Youth Ambassador Botlhale Boikanyo",
  image: "/img/card_botlhale.jpg",
  blurb: "Botlhale Boikanyo is a young, ambitious and inspired Poet from Johannesburg, South Africa. At the age of 11 and well beyond her years in both maturity and insight, Bolthale’s early career was put to test under the bright light auditions of the 2012 South Africa’s Got Talent competition. In that setting, Bolthale’s (pronounced bo-thall-ee) took judges firmly by the heart and walked away the clear and undeniable winner for her gut wrenching and heart lifting prose, inspired by her greatest mentor, Nelson Mandela.",
  date: "September 13, 2014",
  link: "/2014/9/13/botlhale"
},
 {
  title: "Mandela Day 2014",
  image: "/img/card_mandela_day.jpg",
  blurb: "The Legacy of Hope Foundation hosted an evening of entertainment on Mandela Day to support a global campaign to fulfill the last living wish of Nelson Mandela—to build Africa’s 4th dedicated children’s hospital in Johannesburg, South Africa in 2016. ",
  date: "July 18, 2014",
  link: "/mandeladay"
},
{
  title: "The Gibson Guitar Initiative",
  image: "/img/card_guitar_initiative.jpg",
  blurb: "The Guitar Initiative is a campaign to increase awareness and support for Nelson Mandela’s Legacy of Hope, through the medium of music. This campaign is supported by Gibson and managed by veteran music producer and executive producer of Legacy of Hope Concerts, Eric Gast. ",
  date: "July 1, 2014",
  link: "/guitarinitiative"
},
{
  title: "The Legacy of Hope Concert",
  image: "/img/card_concert.jpg",
  blurb: "Join Legacy of Hope for a worldwide simulcast concert in support of raising $30M for the Nelson Mandela Children’s Hospital. The concert will feature a collection of the world’s most talented and respected musicians and will be broadcast around the world in celebration of Mr. Mandela’s Legacy.",
  date: "December 13, 2014",
  link: "/concert"
}

];


var feed = rss.createNewFeed('Legacy of Hope News', 'http://legacyofhope.org/news',
                            'Keep up with the Legacy of Hope',
                            'Legacy of Hope',
                            'http://legacyofhope.org/rss/news.xml',
                            {});

newsStories.forEach(function (story) {
  var d = new Date(Date.parse(story.date)).toUTCString();
    feed.addNewItem(story.title, "http://legacyofhope.org" + story.link, d, story.blurb, {});
});


var path = 'static/rss/';
fs.mkdir(path,function(e){
    if(!e || (e && e.code === 'EEXIST')){
       fs.writeFile('static/rss/news.xml', rss.getFeedXML(feed), function (err) {
  if (err) return console.log(err);
});
    } else {
        //debug0
        console.log(e);
    }
});




var pressStories = [

{
  title: "Graça Machel mourns her husband, Mandela",
  image: "/img/card_graca.jpg",
  blurb: "Christiane Amanpour speaks with Graça Machel about her late husband, her first TV interview after six months of mourning.",
  date: "June 30, 2014",
  link: "/2014/6/30/GraçaMachel"

},

{
  title: "Boxer Sam Soliman made an ambassador of Legacy of Hope Foundation",
  image: "/img/card_soliman.jpg",
  blurb: "AS AN ardent boxing fan all his long life - and not a bad mover in the ring when he was in his prime - Nelson Mandela might have enjoyed meeting Sam Soliman. The reverse certainly applies but, alas, that’s never going to happen now. But in New York this week/the other day, the Melbourne boxer and former IBF World Middleweight Champion eagerly seized the opportunity to align himself with the great South African statesman and humanitarian.",
  date: "October 5, 2014",
  link: "http://www.foxsports.com.au/more-sports/boxing/boxer-sam-soliman-made-an-ambassador-of-legacy-of-hope-foundation/story-e6frf5h3-1227080318078?nk=cfb0d9c6994c780c6ddce669ab008471"
},
 {
  title: "Honoring Nelson Mandela In the Voice of a 13-Year Old",
  image: "/img/card_botlhale.jpg",
  blurb: "Friday, July 18, Nelson Mandela would have been 96 years old. He was honored at the Legacy of Hope concert at the Wallis Annenberg Center for the Performing Arts. Guests enjoyed the setting sun, in the garden reception while drinking champagne and munching on watermelon radishes stuffed with tomato compote. Legacy of Hope is working to raise funds to build South Africa’s first children’s hospital in Mr. Mandela's name. It was Nelson Mandela’s dream. Working to make that dream come true is youth ambassador Botlhale Boikayno. At 11, she won, “South Africa’s Got Talent” competition. Now, 13, she wowed Friday’s crowd with first a reading of Dr. Maya Angelou’s and then a poem of her own.",
  date: "July 21, 2014",
  link: "http://www.myfoxla.com/story/26070793/honoring-nelson-mandela-in-the-voice-of-a-13-year-old"
}

];


var swag = [

{
  name: "Bumper Sticker",
  price: 10,
  pic: "/img/swag_bumpersticker.jpg",
  blurb: "Be the envy of cars everywhere with this LOH bumper sticker."
},


{
  name: "Shirt",
  price: 50,
  pic: "/img/swag_shirt.jpg",
  blurb: "Receive this totally dope LOH shirt as a gift when you select this donation option."
},

{
  name: "Turtle",
  price: 300,
  pic: "/img/swag_turtle.jpg",
  blurb: "Nelson Mandela loved children. Children love turtles. You do the math."
},

{
  name: "Wing of the Nelson Mandela Children's Hospital",
  price: 20000000,
  pic: "/img/swag_wing.jpg",
  blurb: "$20 MILLION! SERIOUSLY?! I'm sure we can get a wing of the hospital named after you. At least the cafeteria or the roof access hatch or something."
},

];


var donate_options= [

  {
    name: "Clean a Beach",
    amount: 9,
    description: "Help provide essential tools needed to clean up beaches",
    stats:[
      "One Off Donation",
      "10kg Trash Removal",
      "Avatar on Site",
      "Photo Updates",
      "Kause Newsletter"
    ]
  },

{
    name: "Repair a Reef",
    amount: 22,
    description: "Provides much needed tools needed to repair barrier reefs.",
    stats:[
      "One Off Donation",
      "10kg Trash Removal",
      "Fills 1 Scuba tank",
       "Avatar on Site",
      "Photo Updates",
      "Kause Newsletter"
    ]
  },

  {
    name: "Resuscitate a River",
    amount: 34,
    description: "Help provide essential tools to resuscitate our rivers.",
    stats:[
      "One Off Donation",
      "10kg Trash Removal",
       "Avatar on Site",
      "Photo Updates",
      "Kause Newsletter"
    ]
  }

];


  var partnerlist = [
    { name:"Bespin Holdings, Inc", logo:"/img/logo_bhi.png", link:"http://bespinholdings.com/"},
    { name:"Akamai Technologies", logo:"/img/logo_akamai.png", link:"http://www.akamai.com/"},
    { name:"Bulldog Media", logo:"/img/logo_bulldog.png", link:"http://bulldogdm.com/"},
    { name:"LiveOne", logo:"/img/logo_liveone.png", link:"http://liveonegroup.com/"},
    { name:"Oyster Labs", logo:"/img/logo_oyster.png", link:"http://www.oysterlabs.com/#aqua"},
     { name:"Creative Artist Agency", logo:"/img/logo_caa.png", link:"http://www.caa.com/"},
     { name:"Celebrity Services Africa", logo:"/img/logo_csa.png", link:"http://www.celebsa.com/"},
     { name:"Internet Media Labs", logo:"/img/logo_iml.png", link:"http://www.internetmedialabs.com/"},
     { name:"Kirklin Ellis LLP", logo:"/img/logo_kirklinellis.png", link:"http://www.kirkland.com/"},
     { name:"Langdon Wilson International", logo:"/img/logo_langdonwilson.png", link:"http://www.langdonwilson.com/"},
     { name:"PRG Nocturne", logo:"/img/logo_prg.png", link:"http://www.nocturneproductions.com/"},
     { name:"ProjectPitcher.com", logo:"/img/logo_projectpitcher.png", link:"http://projectpitcher.com/"},
     // { name:"Woodstock Inc.", logo:"", link:""}
  ];





var home = {
 title 		: "Home - Legacy of Hope",
 thumb_img	: "thumb_home.jpg",
 description	: "The LEGACY OF HOPE FOUNDATION will produce a historical evening of music and entertainment this December in support of a global campaign to fulfill the last living wish of Nelson Mandela—to build a dedicated children’s hospital in Johannesburg, South Africa.",
 stylesheet	: "home2.css",
 url: "http://legacyofhope.org",
 currentpage	: "menu-home",
 type: "website",
 board: [
 {name: "The late Dr. Maya Angelou", image: "img/board_angelou.jpg"},
 {name: "Ruby Bridges", image: "img/board_bridges.jpg"},
 {name: "Christy Turlington Burns", image: "img/board_turlington_burns.jpg"},
 {name: "Ed Burns", image: "img/board_burns.jpg"}, 
 {name: "Viola Davis", image: "img/board_davis.jpg"}, 
 {name: "Dame Judi Dench", image: "img/board_dench.jpg"}, 
 {name: "Arun Gandhi", image: "img/board_gandhi.jpg"}, 
 {name: "Whoopi Goldberg", image: "img/board_goldberg.jpg"}, 
 {name: "Dr. Sanjay Gupta", image: "img/board_gupta.jpg"}, 
 {name: "Katherine Heigl", image: "img/board_heigl.jpg"}, 
 {name: "Sir Anthony Hopkins", image: "img/board_hopkins.jpg"},
 {name: "Ashley Judd", image: "img/board_judd.jpg"}, 
 {name: "Nicole Kidman", image: "img/board_kidman.jpg"}, 
 {name: "Larry King", image: "img/board_king.jpg"}, 
{name: "Sir Ben Kingsley", image: "img/board_kingsley.jpg"},
{name: "Salma Hayek Pinault", image: "img/board_hayek_pinault.jpg"},
 {name: "Natalie Portman", image: "img/board_portman.jpg"},
  {name: "Susan Sarandon", image: "img/board_sarandon.jpg"},
    {name: "Octavia Spencer", image: "img/board_spencer.jpg"},
 {name: "Charlize Theron", image: "img/board_theron.jpg"},
  {name: "Ben Vereen", image: "img/board_vereen.jpg"},
 {name: "Barbara Walters", image: "img/board_walters.jpg"},
 {name: "Elie and Marion Wiesel", image: "img/board_wiesel.jpg"},
 ],
 stories: newsStories,
quotes:[
{author: "Graça Machel, the wife of the late Mr. Nelson Mandela   - June 2014", quote: "I am inspired by his rich legacy that promotes justice, compassion, and solidarity. Children were very dear to Madiba and his last wish was to build the Nelson Mandela Children’s Hospital."},
{author: "Sibongile Mkhabela", quote: "Tata felt very strongly about the hospital. His heart yearned for it."},
{author: "Nelson Mandela", quote: "The true character of a society is revealed in how it treats its children."},
{author: "Nelson Mandela", quote: "History will judge us by the difference we make in the everyday lives of children."},
{author: "Nelson Mandela", quote: "One way that we can build a better future for children is by empowering them through allowing them to speak up for themselves. Of course, we as adults have to guide them and to take ultimate responsibility but that is something quite different from patronizing them. The rights of children must, importantly, include the right to be themselves and to talk for themselves."},
{author: "Nelson Mandela", quote: "We understand and promote the notion that while children need to be guided they also have an entrenched right to be whatever they want to be and that they can achieve this only if they are given the space to dream and live out their dreams."},
{author: "Nelson Mandela", quote: "It always gives me great pleasure to be surrounded by the beautiful children of our land. Whenever I am with the energetic young people … I feel like a recharged battery, confident that our country can look forward to great things."},
{author: "Nelson Mandela", quote: "Together as a nation, we have the obligation to put sunshine into the hearts of our little ones. They are our precious possessions. They deserve what happiness life can offer."}
]
};



var arun = {
  title: "Arun Gandhi Spotlight - Legacy of Hope",
  url: "http://legacyofhope.org/2014/10/4/ArunGandhi",
  thumb_img: "arun_hero.jpg",
  description: "Millions around the world have been influenced and inspired by Nelson Mandela. Of those millions, relatively few met the great South African Leader in person. Arun Gandhi, the fifth grandson of Mahatma Gandhi, was one of those fortunate few. \"Mandela is my hero. He is the best example of how a person can change and see the light.\”",
  stylesheet: "arun.css",
  currentpage: "menu-news",
  type: "article"
};

var board = {
  title: "Board of Directors - Legacy of Hope",
  url: "http://legacyofhope.org/board",
  thumb_img: "thumb_board.jpg",
  description: "The Legacy of Hope board of Directors.",
  stylesheet: "board.css",
  currentpage: "menu-board",
  type: "website"
};

var botlhale = {
  title: "Youth Ambassador Botlhale Boikanyo on Fox TV - Legacy of Hope",
  url: "http://legacyofhope.org/2014/9/13/botlhale",
  thumb_img: "thumb_botlhale.jpg",
  description: "Botlhale Boikanyo (pronounced bo-thall-ee) is a young, ambitious and inspired poet from Johannesburg, South Africa. The following video interview is from Fox News 11 (KTTV) Anchor Susan Hirasuna, following Botlhale’s performance at the 2014 Legacy of Hope Mandela Day Event.",
  stylesheet: "botlhale.css",
  currentpage: "menu-news",
  type: "article"
};

var chuck = {
  title: "Chuck Nice Spotlight - Legacy of Hope",
  url: "http://legacyofhope.org/2014/10/11/ChuckNice",
  thumb_img: "chuck_hero.jpg",
  description: "In support of the Legacy of Hope Foundation and the Nelson Mandela Children’s Hospital, Chuck Nice was the emcee for both the 2013 and 2014 Legacy of Hope Mandela Day events held in New York and Los Angeles. At both events, the audience certainly laughed, but they were also given a strong and meaningful message: Nelson Mandela had a final wish. It’s now our turn to work hard and honor this wish and his legacy for future generations.",
  stylesheet: "chuck.css",
  currentpage: "menu-news",
  type: "article"
};

var concert = {
  title: "Concert - Legacy of Hope",
  url: "http://legacyofhope.org/concert",
  thumb_img: "thumb_concert.jpg",
  description: "The LEGACY OF HOPE FOUNDATION will produce a historic evening of music and entertainment this December in support of a global campaign to fulfill the last living wish of Nelson Mandela—to build a dedicated children’s hospital in Johannesburg, South Africa.",
  stylesheet: "concert2.css",
  currentpage: "menu-concert",
  type: "website",
  artists: [
    {name: "Robert Plant"},
    {name: "John Legend"},
    {name: "K'naan"},
    {name: "The Crystal Method"},
     {name: "De La Sol"},
    {name: "Stevie Wonder"},
    {name: "Shaka Khan"},
    {name: "Macklemore"},
    {name: "Mumford & Sons"},
    {name: "Parliament Funkadelic"},
    {name: "Blue Man Group"},
    {name: "Beck"}
  ]
};


var donate = {
  title: "Donate to the Legacy of Hope",
  url: "http://legacyofhope.org/donate",
  thumb_img: "mission_hero.jpg",
  description: "Donate to the Legacy of Hope",
  stylesheet: "donate.css",
  currentpage: "menu-donate",
  type: "website",
  swag: swag,
  donate_options: donate_options
};



var graca = {
  title: "Graça Machel mourns her husband, Mandela",
  url: "http://legacyofhope.org/2014/6/30/GraçaMachel",
  thumb_img: "card_graca.jpg",
  description: "Christiane Amanpour speaks with Graça Machel about her late husband, her first TV interview after six months of mourning.",
  stylesheet: "graca.css",
  currentpage: "menu-press",
  type: "article"
};



var guitarinitiative = {
  title: "The Guitar Initiative - Legacy of Hope",
  url: "http://legacyofhope.org/guitarinitiative",
  thumb_img: "thumb_guitarinitiative.jpg",
  description: "The Guitar Initiative is a campaign to increase awareness and support for Nelson Mandela’s Legacy of Hope, through the medium of music. The Initiative has two main goals: to obtain musician and celebrity endorsements, and to produce ongoing recordings by artists to benefit the Children’s Hospital and its young patients.",
  stylesheet: "guitarinitiative.css",
  currentpage: "menu-guitar",
  type: "article"
};


var larry = {
  title: "Larry King Spotlight - Legacy of Hope",
  url: "http://legacyofhope.org/2014/10/25/LarryKing",
  thumb_img: "larry_suspenders.jpg",
  description: "In support of the Nelson Mandela Children’s Hospital, Larry King shares his thoughts and experience when he had the opportunity to meet with Mr. Mandela in South Africa.",
  stylesheet: "larry.css",
  currentpage: "menu-news",
  type: "article"
};




var legacy_of_hope_nmcht_concert = {
  title: "Sibongile - Legacy of Hope",
  url: "http://legacyofhope.org/legacy-of-hope-nmcht-concert",
  thumb_img: "thumb_home.jpg",
  description: "Ten years ago, Nelson Mandela enriched his living legacy by unfolding his dream of the Nelson Mandela Children’s Hospital, a crucially needed institution for the millions of underserved children in South Africa. Sibongile Mkhabela, then CEO of the Nelson Mandela’s Children Fund, was chosen by Mandela to play a key role in this vision as he appointed her CEO of the Nelson Mandela Children's Hospital Trust.",
  stylesheet: "sibongile.css",
  currentpage: "menu-news",
  type: "article"
};


var LOHsponsors = {
  title: "Sponsors - Legacy of Hope",
  url: "http://legacyofhope.org/LOHsponsors",
  thumb_img: "thumb_home.jpg",
  description: "Contact us for sponsorship enquiry.",
  stylesheet: "LOHsponsors.css",
  currentpage: "menu-sponsors",
  type: "website"
};

var mandeladay = {
  title: "Mandela Day 2014 - Legacy of Hope",
  url: "http://legacyofhope.org/mandeladay",
  thumb_img: "thumb_mandeladay.jpg",
  description: "Legacy of Hope hosted dignitaries, celebrities and advocates at the Beverly Hills Wallis Annenberg Center for the Performing Arts, to celebrate the life and Legacy of Nelson Mandela. During this event held on Mandela Day (July 18th), the Legacy of Hope announced plans for a worldwide simulcast concert scheduled to take place in New York on December 13th, 2014.",
  stylesheet: "mandeladay.css",
  currentpage: "menu-news",
  type: "article"
};


var mission = {
  title: "Our Mission - Legacy of Hope",
  url: "http://legacyofhope.org/mission",
  thumb_img: "thumb_mission.jpg",
  description: "The Legacy of Hope Foundation was created to provide medical care and facilities for underserved children and communities around the world. The first initiative for Legacy of Hope is to help build the Nelson Mandela Children’s Hospital in Johannesburg, South Africa.",
  stylesheet: "mission2.css",
  currentpage: "menu-mission",
  type: "website"
};


var news = {
  title: "Latest News - Legacy of Hope",
  url: "http://legacyofhope.org/news",
  thumb_img: "thumb_mission.jpg",
  description: "The latest news from the Legacy of Hope.",
  stylesheet: "news.css",
  currentpage: "menu-news",
  type: "website",
 stories: newsStories
};
var hospital = {
  title: "The Hospital - Legacy of Hope",
  url: "http://legacyofhope.org/hospital",
  thumb_img: "thumb_hospital.jpg",
  description: "This new hospital will celebrate the legacy of Mr. Mandela and his love of children while advancing his vision for future generations. The Nelson Mandela Children’s Hospital will be a turning point on how the world views specialized pediatric care to all children, regardless of their ability to pay.",
  stylesheet: "hospital.css",
  currentpage: "menu-hospital",
  type: "website"
};

var partners = {
  title: "Partners - Legacy of Hope",
  url: "http://legacyofhope.org/partners",
  thumb_img: "thumb_mission.jpg",
  description: "Legacy of Hope and its partners",
  stylesheet: "partners.css",
  currentpage: "menu-partners",
  type: "website",
  partnerlist: partnerlist
};

var press = {
  title: "Press - Legacy of Hope",
  url: "http://legacyofhope.org/press",
  thumb_img: "thumb_mission.jpg",
  description: "Legacy of Hope press",
  stylesheet: "press.css",
  currentpage: "menu-press",
  type: "website",
  stories: pressStories
};

var ruby = {
  title: "Ruby Bridges Spotlight - Legacy of Hope",
  url: "http://legacyofhope.org/2014/9/27/RubyBridges",
  thumb_img: "thumb_ruby.jpg",
  description: "My message and the message of Legacy of Hope is everything that has anything to do with children. It’s about healthcare, education, sound mental health and making that child whole again. I understand that Africa has four children’s hospitals serving the entire continent. That’s an imbalance. I think there are some 12 children’s hospitals in Florida alone. Legacy of Hope and the Nelson Mandela Children’s Hospital is a great cause and I want to see it through, and be involved to the end.",
  stylesheet: "ruby.css",
  currentpage: "menu-news",
  type: "article"
};

var soliman = {
  title: "Middleweight Boxer Sam Soliman Named Legacy of Hope Ambassador",
  url: "http://legacyofhope.org/2014/10/5/SamSolimanLOHAmbassador",
  thumb_img: "soliman_hero.jpg",
  description: "Soliman, the Melbourne boxer and former IBF World Middleweight Champion, welcomed the opportunity to align himself with the great South African statesman and humanitarian by becoming an Ambassador for the Legacy of Hope Foundation, a group dedicated to bringing Mandela’s last living wish to fruition.",
  stylesheet: "soliman.css",
  currentpage: "menu-news",
  type: "article"
};


var sponsors = {
  title: "Sponsors - Legacy of Hope",
  url: "http://legacyofhope.org/sponsors",
  thumb_img: "thumb_home.jpg",
  description: "The Legacy of Hope Foundation thanks you for your consideration of being part of this momentous historic event. Download the print version or the web version of the Legacy of Hope Sponsor Deck below. (Right click and choose 'Save As').",
  stylesheet: "sponsors.css",
  currentpage: "menu-sponsors",
  type: "website"
};

var tata = {
  title: "Tata Vega Spotlight - Legacy of Hope",
  url: "http://legacyofhope.org/2014/9/20/TataVega",
  thumb_img: "thumb_tata.jpg",
  description: "I love Nelson Mandela. I love what he stood for. I love the fact that he was willing to go to PRISON or DIE for what he believed in. I know poverty. I’ve lived on the streets. I sang on the streets for spare change so that I could eat. I slept outdoors on hard cold concrete at night. It was rough. But it’s nothing…IT WAS NOTHING, compared to being a citizen in a country where a government failed to recognize you as an intelligent and capable human being based on color. For this fact alone, I will support Mr. Mandela’s dream and be a part of seeing this hospital come to life.",
  stylesheet: "tata.css",
  currentpage: "menu-news",
  type: "article"
};


exports.getPageData = function(category, page, callback) {
	if(category === 'cms') {
    switch (page){
      case 'home':
      callback(null, home);
      break;
      case 'arun':
      callback(null, arun);
      break;
      case 'board':
      callback(null, board);
      break;
      case 'botlhale':
      callback(null, botlhale);
      break;
      case 'chuck':
      callback(null, chuck);
      break;
      case 'concert':
      callback(null, concert);
      break;
      case 'donate':
      callback(null, donate);
      break;
      case 'graca':
      callback(null, graca);
      break;
      case 'guitarinitiative':
      callback(null, guitarinitiative);
      break;
      case 'hospital':
      callback(null, hospital);
      break;
      case 'larry':
      callback(null, larry);
      break;
      case 'legacy-of-hope-nmcht-concert':
      callback(null, legacy_of_hope_nmcht_concert);
      break;
      case 'LOHsponsors':
      callback(null, LOHsponsors);
      break;
      case 'mandeladay':
      callback(null, mandeladay);
      break;
      case 'mission':
      callback(null, mission);
      break;
      case 'news':
      callback(null, news);
      break;
      case 'partners':
      callback(null, partners);
      break;
      case 'press':
      callback(null, press);
      break;
      case 'ruby':
      callback(null, ruby);
      break;
      case 'sponsors':
      callback(null, sponsors);
      break;
      case 'soliman':
      callback(null, soliman);
      break;
      case 'tata':
      callback(null, tata);
      break;
      default:
      callback(null, home);
      break;
    }
  } else callback({error:'invalid category'});
};
