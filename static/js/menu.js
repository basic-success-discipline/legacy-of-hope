  var open=false;
  var menu = document.getElementsByClassName('menu')[0];
  var dd = document.getElementsByClassName('menu-dropdown')[0];
              // var ddclick = document.getElementsByClassName('ddclick')[0];


              $('.ddclick').css('visibility', 'hidden');
              $('.ddclick').click(function(){
               closeMenu();           
             })
              ;

              menu.onclick=function(){ 
                if(!open){
                  $('.menu-dropdown').animate({
                   height: 270      //this is the max-height for mobile-landscape: $mobilewidth - $navheight
                }, 200, function(){});
                  open = true;
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
               open= false;
               $('.ddclick').css('visibility', 'hidden');

             }  


