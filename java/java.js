$(document).ready(function(){
$("#menu").click(function(){

$(".navbar").toggleClass("nav-toggle");
});
$(window).on('load scroll',function(){
  
    $(".navbar").removeClass("nav-toggle");

});
$("#login").click(function(){
$("#login-form").fadeToggle();
});
var modal = document.getElementById('login-form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display="none";
    }
}
//start testimonial


});