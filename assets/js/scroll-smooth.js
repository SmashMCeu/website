$(document).ready(function(){
  $('a[href^="#"]').click(function(e) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top-64}, 1000);
    return false;
    e.preventDefault();
    document.location.href = String( document.location.href ).replace( "#/", "" );
  });
});
