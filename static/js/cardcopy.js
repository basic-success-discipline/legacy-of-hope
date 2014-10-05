 for (var i =0; i<$('.cardcopy').length; i++){
            var divHeight = $('.card h5').eq(i).height();
            var lineHeight = parseInt($('.card h5').eq(i).css('line-height'), 10);
            var lines = divHeight / lineHeight;
            if(lines==1){
              $('.cardcopy').eq(i).ellipsis({
                row: 4
              });
            }
            else if(lines==2){
              $('.card h5').eq(i).css('margin-bottom', 21);
              $('.cardcopy').eq(i).ellipsis({
                row: 2
              });
            }
            else if(lines==3){

              $('.card h5').eq(i).css('margin-bottom', 15);
              $('.cardcopy').eq(i).ellipsis({
                row: 1
              });
            }
            else if(lines>3){
              $('.card h5').eq(i).css('margin-bottom', 29);
              $('.card h5').eq(i).ellipsis({
                row: 4
              });
              $('.cardcopy').eq(i).hide();
            }
            }