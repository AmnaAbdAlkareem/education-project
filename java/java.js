$(document).ready(function(){


    //remove log in
    var modal = document.getElementById('login-form');
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display="none";
    }
}

$("#menu").click(function(){

$(".navbar").toggleClass("nav-toggle");
});
$(window).on('load scroll',function(){
  
    $(".navbar").removeClass("nav-toggle");

});
$("#login").click(function(){
$("#login-form").fadeToggle();
});

//start testimonial
AOS.init({
    delay:500
});

    });