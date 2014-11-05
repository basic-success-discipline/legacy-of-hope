  var menuOpen=false;
  var lohmenu = document.getElementsByClassName('menu')[0];
  var dd = document.getElementsByClassName('menu-dropdown')[0];
              // var ddclick = document.getElementsByClassName('ddclick')[0];


              $('.ddclick').css('visibility', 'hidden');
              $('.ddclick').click(function(){
               closeMenu(); 
               closeFollow();          
             })
              ;

              lohmenu.onclick=function(){ 
                if(!menuOpen){
                  $('.menu-dropdown').animate({
                   height: 305      //this is the max-height for mobile-landscape with social sharing: $mobilewidth - $navheight - $sharing-margin
                }, 200, function(){});
                  menuOpen = true;
                  $('.ddclick').css("visibility", "visible");
                }
                else{
                  closeMenu();
                }
              };  

              function closeMenu(){
                 $('.menu-dropdown').animate({
                  height: 0
                }, 200, function(){});
               menuOpen= false;
               $('.ddclick').css('visibility', 'hidden');

             }  



  var followOpen=false;
            $('.open-follow').click(function(){
              if(!followOpen){
              $('.follow-dropdown').animate({
                height: 140
               }, 200, function(){});
                  followOpen = true;
                  $('.ddclick').css("visibility", "visible");
                }
                else{
                  closeFollow();
                }
            });

            function closeFollow(){
                 $('.follow-dropdown').animate({
                  height: 0
                }, 200, function(){});
               followOpen= false;
               $('.ddclick').css('visibility', 'hidden');

             } 

             $('.follow-dropdown .social-icons').click(function(){
              event.stopPropagation();
             });




