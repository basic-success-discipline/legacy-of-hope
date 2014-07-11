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
                dd.style.opacity='1.0';
                dd.style.visibility='visible';
                open = true;
                $('.ddclick').css("visibility", "visible");

              }
              else{
                  closeMenu();
              }
              };  

         function closeMenu(){
                 dd.style.opacity='0.0';
                dd.style.visibility='hidden';
                open= false;
                $('.ddclick').css('visibility', 'hidden');
                
         }  


var openContact = document.getElementsByClassName('open-contact')[0];
var closeContact = document.getElementsByClassName('close-contact')[0];
var contact = document.getElementById('contact');
var contactfade = document.getElementById('contactfade');
     openContact.onclick=function(){
                contact.style.display='block';
                contactfade.style.display='block';
              };
              contactfade.onclick=function(){
                contact.style.display='none';
                contactfade.style.display='none';
              };
            

