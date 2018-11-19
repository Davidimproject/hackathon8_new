$(document).ready(function () {
    
    var mobileNavOpen = false;
    
    function scrollToElement (elementid) {
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(elementid).offset().top
        }, 1000);
        
    }
    
    // Indext alle Sections mit deren ID + Navigationspunkten (Verbindung wird an data-scrollid festgestellt)
    function getSectionPositions () {
        var allSections = $(".section");
        
    var sectionPositions = [];
        
    $(".section").each(function (index, sec) {
            
        var secId = $(sec).attr("id");
        var secPosition = $(sec).offset().top;
        
        var nav = null;
        
        $(".scrollNav").each(function (sc, idx) {
            
            var scrollNavSectionId = $(idx).attr("data-scrollto");
            
            if (scrollNavSectionId == secId) {
                nav = idx;
            }
            
        });
        
        sectionPositions.push({
            id: secId,
            position: secPosition,
            nav: nav
        });
            
    });
        return sectionPositions
    }
    
    // Holt sich die Sections und deren Navigationspunkte (siehe getSectionPositions)
    var allSecs = getSectionPositions();
    
    console.log(allSecs);
    
    // Window Scroll Navigation Transform
    $( window ).scroll(function(e) {
        
        var wScroll = $(window).scrollTop();
        
        navigationTransform(wScroll);
        
        currentNavPoint(wScroll);
        
    });
    
    function currentNavPoint (wScroll) {
        
        allSecs.forEach(function (element, index) {
            
            if (wScroll >= element.position) {
                $(".active").removeClass("active");
                $(element.nav).addClass("active");
            }
            
        });
        
    }
    
    function navigationTransform (wScroll) {
        
        if (wScroll > 45) {
        
            $("#navigation").addClass("scrolled");
            
        }
        
        if (wScroll < 45) {
        
            $("#navigation").removeClass("scrolled");
            
        }
    }
    
    ///////////////////////////////////////////////
    
    $(".scrollNav").click(function () {
        
        var scrollTo = $(this).attr("data-scrollto");
        var scrollid = "#" + scrollTo;
        
        $(".active").removeClass("active");
        $(this).addClass("active");
        
        scrollToElement(scrollid);
        
        if (mobileNavOpen) {
            
            mobileNavOpen = false;
            
            $("#hamburgerNavIcon").fadeOut(200,function () {
            
                $("#hamburgerNavIcon i").html("menu");
                $("#hamburgerNavIcon").fadeIn(200);
            
                $("#navigation nav").fadeOut(200);
            
            });
            
        }
        
    });
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Mobile Navigation
    
    $("#hamburgerNavIcon").click(function (){
        
        if (!mobileNavOpen) {
         
            mobileNavOpen = true;
            
            $("#hamburgerNavIcon").fadeOut(200,function () {
            
                $("#hamburgerNavIcon i").html("close");
                $("#hamburgerNavIcon").fadeIn(200);
            
                //$("#navigation nav").fadeIn(200);
                $("#navigation nav").addClass("animated fadeInRight");
                $("#navigation nav").show();
                
            });
            
        } else {
            
            mobileNavOpen = false;
            
            $("#hamburgerNavIcon").fadeOut(200,function () {
            
                $("#hamburgerNavIcon i").html("menu");
                $("#hamburgerNavIcon").fadeIn(200);
            
                $("#navigation nav").fadeOut(200);
            
            });
            
        }
        
    });
    
    
    
    
});