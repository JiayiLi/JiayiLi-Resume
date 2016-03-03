!function (window, document, $, undefined){

    var $topbar = $('#topbar'),
        $home = $('.home'),
        $about = $('.about'),
        $contact = $('.contact'),
        $tH = $('.tH');
        

    var init = function (){
        initEvent();
    };


    var initEvent = function (){
        $(window).on('scroll',function (){ 
            $this = $(this),
            st = $this.scrollTop();
            
            topbarShow();
        });

        $home.on('click', function (){
            toHome();
        });

        $about.on('click', function (){
            $firstPage = $('#firstPage'),
            $tHeight = $firstPage.height();

            toAbout();
        });

        $contact.on('click', function (){
            $firstPage = $('#firstPage'),
            $tHeight = $firstPage.height(),
            $secondPage = $('#aboutMe'),
            $sHeight = $secondPage.height();

            toContact();
        });

        $tH.on('click', function (){
            toHome();
        });


    };

    var topbarShow = function (){
        if (st >= 450) {
            $topbar.slideDown();
        }else {
            $topbar.slideUp();
        }
    };

    var toHome = function (){
        $('body').animate({scrollTop: 0}, 500);
    };


    var toAbout = function (){
        $('body').animate({scrollTop: $tHeight}, 500);
    };

    var toContact = function (){
        $('body').animate({scrollTop: $tHeight+$sHeight+100}, 500);
    };



    init();

}(window, document, jQuery);