function shareWithFacebook(el) {
	document.write('<a onClick="return shareWithFacebookClick(600, 400)" target="_blank" href="http://facebook.com/sharer.php?u=' + 
		encodeURIComponent(document.URL) + 
		'" title="Facebook share" >' + el + '</a>')
}
function shareWithFacebookClick(width, height) {
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + 
	    ",width=" + width + 
	    ",resizable=yes,left=" + leftPosition + 
	    ",top=" + topPosition + 
	    ",screenX=" + leftPosition + 
	    ",screenY=" + topPosition + 
	    ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";   
	u = location.href;
    t = document.title;
    window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t),'sharer', windowFeatures);
    return false;
}

function shareWithTwitter(el,text,via) {
	var encText = encodeURIComponent(text);
	var encUrl = encodeURIComponent(document.URL);
	twitterShareUrl = 'http://twitter.com/intent/tweet?u=' + encUrl + '&text=' + encText;
	if(via) twitterShareUrl += '&via=' + via;
	document.write('<a onClick="return shareWithTwitterClick(600, 400)" target="_blank" href="' + twitterShareUrl + '" >' + el + '</a>')
} 
function shareWithTwitterClick(width, height) {
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + 
	    ",width=" + width + 
	    ",resizable=yes,left=" + leftPosition + 
	    ",top=" + topPosition + 
	    ",screenX=" + leftPosition + 
	    ",screenY=" + topPosition + 
	    ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";   
	u = location.href;
    t = document.title;
    window.open('http://twitter.com/intent/tweet?u=' + encodeURIComponent(u) + '&text=' + encodeURIComponent('Check this out!'), 'sharer', windowFeatures);
    return false;
}

function showSignupForm() {
    window.signupForm = new Boxy($('#signup-dialog').html(), {
      title: "Sign up for updates", 
      modal: true
    });
}

function submitSignupForm() {
	var $dlg = this;
	var $email = document.getElementsByClassName('register_email')[1].value;
	if(!$email) {
		alert('please fill in email field.');
		return;
	}
	return alert($email);
	$.post('http://ec2-54-191-42-61.us-west-2.compute.amazonaws.com/auth/register', {
		username    : $email,
		password    : $email,
		email       : $email,
		autoconfirm : 1
	}, function() {
		alert('thank you for signing up for email updates from the Legacy of Hope.')
		Boxy.get($dlg).hide();
	});
}