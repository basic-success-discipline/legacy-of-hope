


/* Contact Form */


	$('#contact-form-sponsors').submit(function(evt) {
        evt.preventDefault();

        console.log('attempt form validation');
        $( "#contact-form-sponsors" ).validate({
		  	rules: {
				semail2: { equalTo: "#semail"}
		  	},
		  	messages: {
               semail2: { equalTo: "Emails should match!" }
            }
		});

        if($('#contact-form-sponsors').valid()) {
       		console.log('contact-form was valid. send data to server');
	        var cfdata = {
	            name    : $('#sname').val(),
	            email   : $('#semail').val(),
	            subject : $('#ssubject').val(),
	            message : $('#smessage').val(),
	            sponsor : true,
	            company : $('#scompany').val(),
	            phone   : $('#sphone').val(),
	            referrer: $('#sreferrer').val(),
	            interest : $('#sinterest').val()
	        };

	        $.post( "/contact", cfdata, function(data) {
	          if(data.error) {
	          	console.log('error: ' + data['error']);
	          	$('.contactresult-sponsors').html( "<p>There was an error sending your email.</p>" );  	
	          	$('.contactresult-sponsors').toggle();
	          	$('.contactresult-sponsors').delay(3000).fadeOut(2200);
	          }
	          else {
	          	console.log('status: ' + data['status']);
	          	$('.contactresult-sponsors').html( "<p>Your email has been sent. Thanks for contacting us!</p>" );
	          	$('.contactresult-sponsors').toggle();
	          	$('.contactresult-sponsors').delay(3000).fadeOut(2200);
	          	$('#contact-form-sponsors')[0].reset();
	          }
	        });
	    }
     	return true;
     }); //end submit
