
                  // set the date we're counting down to
                  var target_date = new Date("Dec 13, 2014 13:00:00").getTime();

                  // variables for time units
                  var days, hours, minutes, seconds;

                  // get tag element
                  var tdays = document.getElementById("days");
                  var thours = document.getElementById("hours");
                  var tminutes = document.getElementById("minutes");

                  // update the tag with id "countdown" every 1 second
                  setInterval(function () {

                      // find the amount of "seconds" between now and target
                      var current_date = new Date().getTime();
                      var seconds_left = (target_date - current_date) / 1000;

                      // do some time calculations
                      days = parseInt(seconds_left / 86400);
                      seconds_left = seconds_left % 86400;

                      hours = parseInt(seconds_left / 3600);
                      seconds_left = seconds_left % 3600;

                      minutes = parseInt(seconds_left / 60);
                      seconds = parseInt(seconds_left % 60);

                      // format countdown string + set tag value
                      $('.days').css('visibility', 'visible');
                      $('.hours').css('visibility', 'visible');
                      $('.minutes').css('visibility', 'visible');

                      $('.days').addClass('animated fadeIn');
                      $('.hours').addClass('animated fadeIn');
                      $('.minutes').addClass('animated fadeIn');

                      $('#days').addClass('animated fadeIn');
                      $('#hours').addClass('animated fadeIn');
                      $('#minutes').addClass('animated fadeIn');
                      tdays.innerHTML = days;
                      thours.innerHTML = hours;
                      tminutes.innerHTML = minutes; 

                    }, 1000);