var home = {
  	title 		: "Home - Legacy of Hope",
  	thumb_img	: "thumb_home.png",
  	description	: "The Legacy of Hope Foundation is dedicated to increasing awareness and support for Nelson Mandela’s Legacy of Hope.",
  	stylesheet	: "home2.css",
    currentpage	: "menu-home",
    board: ["/img/board_hopkins.png", 
            "/img/board_bridges.png", 
            "/img/board_vereen.png", 
            "/img/board_portman.png",
            "/img/board_portman.png",
            "/img/board_vereen.png",
            "/img/board_bridges.png",
            "/img/board_hopkins.png"],
    stories: [
        {
          title: "Mandela Day 2014",
          image: "/img/card_mandela_day.jpg",
          blurb: "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam.",
          date: "July 18, 2014",
          likes : "528",
          link: "/mandeladay"
        },
        {
          title: "The Gibson Guitar Initiative",
          image: "/img/card_guitar_initiative.jpg",
          blurb: "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam.",
          date: "July 1, 2014",
          likes : "566",
          link: "/guitarinitiative"
        },
        {
          title: "The Legacy of Hope Concert",
          image: "/img/card_concert.jpg",
          blurb: "Etiam porta sem malesuada magna mollis euismod. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam.",
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
