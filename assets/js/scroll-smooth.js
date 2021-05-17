$(document).ready(function(){
  $('a[href^="#"]').click(function(e) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);
    return false;
    e.preventDefault();
    document.location.href = String( document.location.href ).replace( "#/", "" );
  });
});

// Hidden secret
let i = 0;
$("#molecraft").click(function () {
  if(i < 2) {
    i++;
    return;
  }
  let breakSound = new Audio("assets/js/cringe.wav");
  $("body").append(
    '<img id="cringe" src="assets/img/molecraft/item.png" alt="minecraft item" />'
  );
  document.onmousemove = function (e) {
    let el = $("#cringe");
    el.css("position", "fixed");
    el.css("top", e.clientY + 10);
    el.css("left", e.clientX + 10);
  };
  $("img, span, p, h1, h4, h5, li, a, button, .alert").click(function () {
    $(this).remove();
    breakSound.play();
  });
});
