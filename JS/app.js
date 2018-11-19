$(document).ready(function() {


$(window) .resize(function(){
    $('body, html') .css ('overflow', 'hidden');
    var screenWidth = $(window).width();
    $('body, html') .css ('overflow', 'visible');
    
        if (screenWidth >= 769) {
            $('#menu').css ({'display':'block'});
        } else {
            $('#menu').css ({'display':'none'});
        }
    
});




/*Slider*/
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}     
    
    


	

	
   

 
 // neuer Slider
    

 $('.carousel').carousel({
  interval: 2000
})
 
 
 
 
 
 
 
 
 
 
 // Diese }) gehören zur Document Ready Funktion und düefen deshal auf keinen Fall entfertn werden. 
})
	
	