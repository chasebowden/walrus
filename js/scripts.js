$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
    $(".pic1").toggle();
  });
  $(".clickable2").click(function() {
    $(".pic2").toggle();
  });
});
