(function() {
    var $window = $(window);
    var $images = $('.parallax');
    var $up = $('#btn-up');
    var $winScroll, $imgOffset, $imgHeight, $number;
    
    // ustalenie rozmiaru pierwszego obrazka
    // poprzez pobranie wysokości okna
    function refreshImgHeight() {
        $('.parallax-lotus').css({
            backgroundPosition: '50% 50%',
            height: $window.height()
        });
    }
    refreshImgHeight();
    
    // zmiana wysokości obrazka przy
    // każdej zmianie wielkości okna
    $(window).on('resize', function() {
        refreshImgHeight();
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
    
    // płynne przewijanie strony - wysuwany przycisk
    $up.on('click', function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: 0
        }, 1000, 'swing');
    });

    // płynne przewijanie strony - linki menu
    $('[href^="#sec"]').on('click', function(e) {
        e.preventDefault();
        $number = (this.getAttribute('href')).substring(4,5);
        $('body').animate({
            scrollTop: $('#sec' + $number).offset().top
        }, 1000, 'swing');
    });
    
    // podmiana koloru logo po najechaniu
    $('.img-logo').on('mouseover', 'img', function() {
        $logoCol = (this.getAttribute('src')).substr(-5,1);
        $logoSrc = (this.getAttribute('src')).slice(0,-5);
        $logoExt = (this.getAttribute('src')).substr(-4);
        this.setAttribute('src', $logoSrc + 'Y' + $logoExt);
    });
    
    // powrót do podstawowego koloru loga
    $('.img-logo').on('mouseout', 'img', function() {
        $logoCol = (this.getAttribute('src')).substr(-5,1);
        $logoSrc = (this.getAttribute('src')).slice(0,-5);
        $logoExt = (this.getAttribute('src')).substr(-4);
        this.setAttribute('src', $logoSrc + 'G' + $logoExt);
    });
    
})();