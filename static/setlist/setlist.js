$(document).ready(function(){

	if($("#cs-setlist").length){
		return false;
	}
		
	// Add the setlist DIV
	$("#crowdsurfing-wrapper").append("<div id='cs-setlist'></div>");
	var setlistContainer = $("#cs-setlist");
	setlistContainer.append("<div id='nowWatching'>"+
								"<div id='cs-trigger'></div>"+
								"<span id='nowWatchingText'></span>"+
								"<span id='current-item'></span>"+
								"<div id='nowWatchingLogo'></div>"+
							"</div>");
							
	setlistContainer.append("<div id='fullSetlist'></div>");
	var fullSetlist = $("#fullSetlist");
	
	fullSetlist.append("<ul id='tabs'></ul>");
	
	window.currentTab = "";
	window.tabAnimating = false;
	
	var setlistArray = [];
	
	var gotSetlist = getSetlist();
	calculateMaxHeight();
	
	window.onresize = calculateMaxHeight;
	
	function calculateMaxHeight(){
		var height = $(window).height() - 288;
		$(".setlistContainer").css("max-height", height+"px");
	}
	
	window.setInterval(function(){
		if(window.tabAnimating == false && gotSetlist == true){
			setUpSetlist();	
		}
	}, 60000);

	
	$("#cs-trigger").on("click", function(){
		if($(this).hasClass("active")){
			$("#fullSetlist").slideToggle(function(){
				$("#cs-setlist").prepend($("#nowWatching"));
				$("#cs-setlist").toggleClass("active");
				$("#nowWatching").append($("#cs-trigger"));
				$("#cs-trigger").removeClass("active");
				$("#scheduleBar").detach();
			});
		} else {
			$("#cs-setlist").toggleClass("active");
			$("#fullSetlist").prepend($("#nowWatching"));
			$("#fullSetlist").prepend($("<div id='scheduleBar'></div>"));
			$("#fullSetlist").slideToggle();
			$("#scheduleBar").append($(this));
			$(this).addClass("active");			
		}
	});

	function getSetlist(currentTab){
		var gotSetlist = false;
		$.ajax({
			type: 'GET',
			dataType: "json",
			async: false,
			url: 'setlist/setlist.json',
			contentType: "application/json",
			timeout: 5000,
			success: function(json){
				populateSetlist(json);
				gotSetlist = true;
			},
			error: function(xhr, ajaxOptions, thrownError) {
				console.log("Setlist AJAX Error: " + thrownError + " | Options were: " + ajaxOptions);
				setlistError();
			},
			fail: function(x, t, m){
				if(t==="timeout") {
					console.log("Couldnt load setlist. AJAX fail (timeout).");
					setlistError();
				} else {
					console.log("Couldnt load setlist. AJAX fail.");
					setlistError();
				}
			}
		});
		return gotSetlist;
	}  
	
	function setlistError(){
		$("#nowWatchingText").text("Schedule Unavailable");
		$("#current-item").html("Please check back in a bit");
	}

	function populateSetlist(json){
		var today = getToday();
		var tabActive;
		var thisDay;
		var isStreaming;
						
		$(".setlist").empty();
		$.each( json, function( key, val ) {
			
			if(key == "settings"){
				$("#nowWatchingText").text(val.topbar);
			} else {
				thisDay = key;
			}
			
			if(thisDay == today){
				hidden = false;
			} else {
				hidden = true;
			}
			
			if($(".setlist."+thisDay).length){
				// WE ALREADY HAVE THE SETLIST STRUCTURE, JUST CLEAN AND REPLACE
				$(".setlist."+thisDay).empty();
			} else if (key != "settings") {
				// NOT SET UP YET, CREATE TABS AND SETLISTS
				window.currentTab = today;
				if(thisDay == today) { tabActive = "active"; } else { tabActive = ""; }
				$("#fullSetlist").prepend("<div class='setlistContainer " + thisDay + " " + tabActive + "'><ul class='setlist " + thisDay + " " + tabActive + "'></ul></div>");
				$("ul#tabs").append("<li class='tabOption "+tabActive+"' data-day='"+thisDay+"'>" + thisDay + "</li>");
				$(".setlistContainer."+thisDay).prepend("<div class='setlistBranding'></div>");
			}
			
			
			var setlist = $(".setlist."+thisDay);
			
			if(key !== "settings"){
				$.each( val, function( key, val ) {
					if(val.streaming == "true"){
						isStreaming = "isStreaming";
					} else {
						isStreaming = "notStreaming";
					}
					
					var thisTime = new Date(key).getTime();
					var dateString = new Date(thisTime);
					var timeplaying = formatAMPM(dateString);
					if(val.streaming == "true"){
					  setlistArray[thisTime] = val.band;
					}
					
					setlist.prepend("<li id='"+thisTime+"' class='" + val.stage + " " + val.status + " " + isStreaming + "'>"+ "<div class='timePlaying'>"+timeplaying+"</div>" + val.band + "</li>");
				});				
			}
			
		});
		setupTabs(today);
		setUpSetlist(setlistArray);
	}
	
	function setupTabs(){	
		$(".tabOption").unbind();
		window.tabAnimating = false;
		$(".tabOption").on("click", function(){
			var thisDay = $(this).data("day");
			if(thisDay == window.currentTab || window.tabAnimating == true){
				return;
			} else {
				window.tabAnimating = true;
			}
			$(".tabOption").removeClass("active");
			$(this).addClass("active");
			$(".setlistContainer.active").slideUp(400, function(){	
				$(".setlistContainer").removeClass("active");
					$(".setlistContainer."+thisDay).slideDown(600, function(){
						$(".setlist."+thisDay).animate({"opacity": "1"}, 100, function(){
							$(".setlistContainer."+thisDay).animate({"opacity": "1"}, function(){
								$(".setlistContainer."+thisDay).addClass("active");
								window.currentTab = thisDay;
								window.tabAnimating = false;
							});
						});
					});							
				});
			});
		}
	
	function setUpSetlist(){
		//var currentTime = convertToServerTimeZone();
		var currentTime = new Date("Saturday Jul 19 2014 19:29:00").getTime();
		//var UTC = currentTime.getUTCDate();
		var dateString = new Date(currentTime);	
		//console.log(dateString);
		//console.log(setlistArray);
		var foundCurrent = false;
		for (var time in setlistArray) {
			var keys = Object.keys(setlistArray).sort();
			var loc = keys.indexOf(time);
			var next = findNextInObject(setlistArray, loc);
			var oneHour = 1 * 60 * 60 * 1000;
			if(! next){
				next = parseInt(time) + oneHour;
			}
			if(currentTime > time && currentTime < next && (currentTime - time < oneHour)){
				var prettyTime = formatAMPM(new Date(parseInt(time)));
				$(".isStreaming").removeClass("current");
				$("#nowWatchingText").text("NOW WATCHING:");
				$("#"+time).addClass("current");
				$("#current-item").html(prettyTime+"&nbsp;&nbsp;" + setlistArray[time]);
				foundCurrent = true;
			}
		}
		if(!foundCurrent){
				$(".isStreaming").removeClass("current");
				$("#nowWatchingText").text("LIVE STREAM NOT AVAILABLE");
				$("#current-item").html("click to see the full schedule");
		}
	}

	function convertToServerTimeZone(){
	
	    //CDT
	    offset = -5;
	
	    clientDate = new Date();
	    utc = clientDate.getTime() + (clientDate.getTimezoneOffset() * 60000);
	
	    serverDate = new Date(utc + (3600000*offset));
	
	    return serverDate;
	}
	
	function getCurrentTime() {
	    if (!Date.now) {
	        Date.now = function () {
	            return new Date().getTime();
	        };
	    }
	    return Date.now();
	}

	function getToday(){
		var today = new Date().getDay();
		switch (today) {
		    case 5:
		        today = "friday";
		        break;
		    case 6:
		        today = "saturday";
		        break;
		    case 0:
		        today = "sunday";
		        break;
		    default:
				today = "friday";
				// We want the first day to be highlighted in case we're
				// looking at the schedule on a day besides fri/sat/sun		       
		}
		return "saturday";
		//return today;
	}
	
	function findNextInObject(array, loc){
		i = 0;
		var length = getObjectSize(array);
		for (var key in array) {
			if(i == loc + 1){
				if(key !== "undefined") {
					return key;
				} else {
					return "No band after";
				}
			}
			i++;
		}
    }

	function getObjectSize(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	};
	
	function formatAMPM(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var ampm = hours >= 12 ? 'pm' : 'am';
	  hours = hours % 12;
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes + ' ' + ampm;
	  return strTime;
	}

});