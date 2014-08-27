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
          blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: "July 18, 2014",
          likes : "528",
          link: "/mandeladay"
        },
        {
          title: "The Gibson Guitar Initiative",
          image: "/img/card_guitar_initiative.jpg",
          blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          date: "July 1, 2014",
          likes : "566",
          link: "/guitarinitiative"
        },
        {
          title: "The Legacy of Hope Concert",
          image: "/img/card_concert.jpg",
          blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
