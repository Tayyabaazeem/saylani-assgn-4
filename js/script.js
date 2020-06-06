
$(document).ready(function (){


$('#whytalk').click(function(){
		$('html,body').animate({
        'scrollTop': $("#w_t_way").offset().top},
        1000);
       
	});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
    if (scroll >= 400 ) {
    	
        $('nav').addClass("set_nav");
        $('#set_img').addClass("set_nav_img");
        
    } else {
        $('nav').removeClass("set_nav");
         $('#set_img').removeClass("set_nav_img");

        
    }
});
var slide= document.getElementsByClassName('slide');
console.log(slide);
});