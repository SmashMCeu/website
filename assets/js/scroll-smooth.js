$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top - 64 }, 1000);
    return false;
  });
});
