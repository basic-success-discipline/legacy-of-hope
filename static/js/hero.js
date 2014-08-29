var is_safari = navigator.userAgent.indexOf("Safari") > -1;
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
{
	
  $('.herofix').addClass("safari");
  $('.herospacer').addClass("safari");
}