
              var mandeladay = document.getElementsByClassName('mandeladay')[0];
              var mission = document.getElementsByClassName('mission')[0];
              var hospital = document.getElementsByClassName('hospital')[0];
              var video = document.getElementsByClassName('video')[0];
              var closeVideo = document.getElementsByClassName('close-button')[0];
              var vidbg1 = document.getElementsByClassName('black_overlay')[0];
              var vidbg2 = document.getElementsByClassName('lb-content')[0];
              var concert1 = document.getElementsByClassName('concert')[0];
              var concert2 = document.getElementsByClassName('concert')[1];
              var guitar = document.getElementsByClassName('guitar')[0];

              mandeladay.onclick=function(){ 
                 window.location="mandeladay.html";
              };
               mission.onclick=function(){ 
                 window.location="mission.html";
              };
                hospital.onclick=function(){ 
                 window.location="mission.html#hospital";
              };
              video.onclick=function(){
                document.getElementById('light').style.display='block';
                document.getElementById('fade').style.display='block';
              };
              closeVideo.onclick=function(){
                document.getElementById('light').style.display='none';
                document.getElementById('fade').style.display='none';
                $('.lb-video').attr('src', '//www.youtube.com/embed/KrtR1bXF80A?controls=0&rel=0');
              };
              vidbg1.onclick=function(){
                document.getElementById('light').style.display='none';
                document.getElementById('fade').style.display='none';
                $('.lb-video').attr('src', '//www.youtube.com/embed/KrtR1bXF80A?controls=0&rel=0');
              };
               vidbg2.onclick=function(){
                document.getElementById('light').style.display='none';
                document.getElementById('fade').style.display='none';
                $('.lb-video').attr('src', '//www.youtube.com/embed/KrtR1bXF80A?controls=0&rel=0');
              };
                concert1.onclick=function(){ 
                 window.location="concert.html";
              
              
              };
                 concert2.onclick=function(){ 
                 window.location="concert.html";
              };
                guitar.onclick=function(){ 
                 window.location="guitarinitiative.html";
              };



          