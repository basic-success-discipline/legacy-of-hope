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
    ]
};

exports.getPageData = function(category, page, callback) {
	if(category === 'cms') {
		if(page === 'home') callback(null, home);
		else if(page === 'whatever') callback(null, home);
		else callback({error:'invalid page'});
	} else callback({error:'invalid category'});
};
