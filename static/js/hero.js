var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod|Android|BlackBerry|IEMobile)/g) ? true : false );
if (iOS){
  document.getElementsByClassName('hero')[0].style.display='none';
  document.getElementsByClassName('herospacer')[0].getElementsByTagName('img')[0].style.visibility = "visible";
}