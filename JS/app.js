$(document).ready(function() {
/* Ihr jQuery Code */ 
/*$(function() {
  var menuVisible = false;
  $('#icon').click(function() {
    if (menuVisible) {
     // $('#menu').css({'display':'none'});
	  $('#menu').slideUp();
      menuVisible = false;
      return;
    }
    $('#menu').css({'display':'block'});
    menuVisible = true;
  });
});*/

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


//scroll 
/* 
$(function() {
      $('a').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
        var targetOffset = $target.offset().top;
		//var HeaderHeight = $("#menuBtn").outerHeight();
        $('html,body').animate({scrollTop: targetOffset}, 700 );
        
		// Bei mobiler Ansicht soll die Navigation nach Betätigung ausgeblendet werden
		if ($(window).width() <= 768) {
		$('#menu').slideUp()
		}	
		return false;
    }
}
  });
});
*/

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
    
    

/*
	
//ScrollSpy zeigt die aktuelle Position der Seite in der Navigation


 function scrollSpy() {
      var sections = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5'];
      var current;
      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }
      $("nav a[href='#"+current+"']").addClass('active');
      $("nav a").not("a[href='#"+current+"']").removeClass('active');      
    }
    // smooth scrolling navigation
/*	
    $("nav a").click( function() {
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 300);
	  if ($(window).width() <= 768) {
		$('nav').slideUp()
		}
      return false;
    });
*/	
    //scrollSpy call
	
   
    $(window).scroll( function() {
      scrollSpy();

 });
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 // Diese }) gehören zur Document Ready Funktion und düefen deshal auf keinen Fall entfertn werden. 
})
	
	