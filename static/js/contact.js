
var openContact = document.getElementsByClassName('open-contact')[0];
var closeContact = document.getElementsByClassName('close-contact')[0];
var contact = document.getElementById('contact');
var contactfade = document.getElementById('contactfade');
     openContact.onclick=function(){
                contact.style.display='block';
                contactfade.style.display='block';
              };
              closeContact.onclick=function(){
                contact.style.display='none';
                contactfade.style.display='none';
              };
              contactfade.onclick=function(){
                contact.style.display='none';
                contactfade.style.display='none';
              };
            


/* Contact Form */


	$('#contact-form').submit(function(evt) {
        evt.preventDefault();

        console.log('attempt form validation');
        $( "#contact-form" ).validate({
		  	rules: {
				company: { required: "#sponsor:checked" },
		  		phone: { phoneUS: "#sponsor:checked" },
				interest: { required: "#sponsor:checked" },
				email2: { equalTo: "#email"}
		  	},
		  	messages: {
               email2: { equalTo: "Emails should match!" }
            }
		});

        if($('#contact-form').valid()) {
       		console.log('contact-form was valid. send data to server');
	        var cfdata = {
	            name    : $('#name').val(),
	            email   : $('#email').val(),
	            subject : $('#subject').val(),
	            message : $('#message').val(),
	            sponsor : $('#sponsor').is(":checked"),
	            company : $('#company').val(),
	            phone   : $('#phone').val(),
	            referrer: $('#referrer').val(),
	            interest : $('#interest').val()
	        };

	        $.post( "/contact", cfdata, function(data) {
	          if(data.error) {
	          	console.log('error: ' + data['error']);
	          	$('#contactresult').html( "<p>There was an error sending your email.</p>" );  	
	          	$('#contactresult').toggle();
	          	$('#contactresult').delay(3000).fadeOut(2200);
	          }
	          else {
	          	console.log('status: ' + data['status']);
	          	$('#contactresult').html( "<p>You're email has been sent. Thanks for contacting us!</p>" );
	          	$('#contactresult').toggle();
	          	$('#contactresult').delay(3000).fadeOut(2200);
	          	$('#contact-form')[0].reset();
	          }
	        });
	    }
     	return true;
     }); //end submit

      $('#sponsor').change(function() {
          //console.log('sponsor checkbox changed');
          if($(this).is(":checked")) {
            $('#sponsorarea').show( "fast" );
          } else {
            $('#sponsorarea').hide( "fast" );
          }
      });