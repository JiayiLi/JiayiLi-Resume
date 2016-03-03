!function(window,document,$,undefined){

    var $aboutMe2 = $('.aboutMe2'),
        $h1s = $aboutMe2.find('h1'),
        $introMasker = $('.introMasker'),
        $masker = $introMasker.find('.masker'),
        $closeIcon = $introMasker.find('.intro-close-icon'),
        $imgs = $introMasker.find('img');


    var init = function (){
        initEvent();
    };

    var initEvent = function (){
        $h1s.on('click',function(){
            $this = $(this),
            index = $this.parent().index();

            renderH1();
        });

        $closeIcon.on('click',function (){
            closeImgs();
        });
    };

    var renderH1 = function (){
        $introMasker.show();
        $masker.show();
        $imgs.eq(index).show(300).siblings().hide();
    };

    var closeImgs = function (){
        $introMasker.hide();
        $masker.hide();
    };
    
    init();

}(window,document,jQuery);