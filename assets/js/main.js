$(window).on("scroll touchmove", function () {
  $('header').toggleClass('small', $(document).scrollTop() > 0);
});

function showGrid() {
  var link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("id", "grid-stylesheet");
  link.setAttribute("href", "http://basehold.it/" + parseInt(window.getComputedStyle(document.body).getPropertyValue("line-height"),10));
  document.head.appendChild(link);
  return false;
}

function hideGrid() {
  var style = document.getElementById('grid-stylesheet');
  document.head.removeChild(style);
  return false;
}

function toggle() {
  var e = document.getElementById('grid');
  if(e.class === 'grid-shown') {
    e.class = 'grid-hidden';
    hideGrid();
  } else {
    e.class = 'grid-shown';
    showGrid();
  }
  return false;
}

document.getElementById('grid').onclick = toggle;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41559036-3', 'auto');
ga('require', 'linkid', 'linkid.js');
ga('send', 'pageview');
