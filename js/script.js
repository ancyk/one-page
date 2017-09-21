(function() {
    var $window = $(window);
    var $images = $('.parallax');
    var $up = $('#btn-up');
    var $winScroll, $imgOffset, $imgHeight;
    
    // ustalenie rozmiaru pierwszego obrazka
    $('.parallax-lotus').css({
        backgroundPosition: '50% 50%',
        height: $window.height()
    });
    
    // reakcje na przewijanie strony
    $window.on('scroll', function() {
        $winScroll = $window.scrollTop();
        
        // aktywny element menu
        if (($winScroll > ($('.tlo1').offset().top + 300)) && ($winScroll < ($('.tlo2').offset().top - 300))) { $('#nav1').addClass('current'); } else { $('#nav1').removeClass('current'); }    
        
        if (($winScroll >= ($('.tlo2').offset().top - 300)) && ($winScroll < ($('.tlo3').offset().top - 300))) { $('#nav2').addClass('current'); } else { $('#nav2').removeClass('current'); }
        
        if (($winScroll >= ($('.tlo3').offset().top - 300)) && ($winScroll < ($('.tlo4').offset().top - 300))) { $('#nav3').addClass('current'); } else { $('#nav3').removeClass('current'); }
        
        if (($winScroll >= ($('.tlo4').offset().top - 300)) && ($winScroll < ($('.tlo5').offset().top - 300))) { $('#nav4').addClass('current'); } else { $('#nav4').removeClass('current'); }
        
        if (($winScroll >= ($('.tlo5').offset().top - 300)) && ($winScroll < $('footer').offset().top)) { $('#nav5').addClass('current'); } else { $('#nav5').removeClass('current'); }
        
        // wysuwany przycisk 
        if ($winScroll >= 400) {
            $up.animate({
                right: '2rem'
            }, 500, 'swing');
        } else {
            $up.stop(true).animate({
                right: '-10rem'
            }, 500, 'swing');
        }
        
        // zmiana wyglądu menu
        if ($winScroll >= 150) {
            $('nav').addClass('nav-scroll');
        } else {
            $('nav').removeClass('nav-scroll');
        }
        
        // efekt parallax
        $images.each(function() {
            $imgOffset = $(this).offset().top;
            $imgHeight = $(this).height();
            
            $(this).css({
                backgroundPosition: '50%' + ' ' + (Math.round(($imgOffset - $winScroll)*3/8)-120) + 'px'
            });
        }); 
        
    }); // koniec - reakcje na przewijanie strony
})();




