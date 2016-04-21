jQuery(document).ready(function(){

    // jquery for all page
    revapi3 = jQuery('#rev_slider_3_1').show().revolution({
        dottedOverlay:"none",
        delay:6000,
        startwidth:1140,
        startheight:800,
        hideThumbs:200,

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:4,

        navigationType:"none",
        navigationArrows:"solo",
        navigationStyle:"round",

        touchenabled:"on",
        onHoverStop:"off",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,


        keyboardNavigation:"off",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,

        shadow:0,
        fullWidth:"on",
        fullScreen:"off",

        spinner:"spinner3",

        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,

        shuffle:"off",

        autoHeight:"off",
        forceFullWidth:"off",


        hideTimerBar:"on",
        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResolution:0,

        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        startWithSlide:0
    });


    // jquery for onepage
    revapi6 = jQuery('#rev_slider_6_1').show().revolution(
        {
            dottedOverlay:"none",
            delay:9000,
            startwidth:1170,
            startheight:450,
            hideThumbs:200,

            thumbWidth:100,
            thumbHeight:50,
            thumbAmount:3,

            navigationType:"none",
            navigationArrows:"solo",
            navigationStyle:"round",

            touchenabled:"on",
            onHoverStop:"off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,


            keyboardNavigation:"off",

            navigationHAlign:"center",
            navigationVAlign:"bottom",
            navigationHOffset:0,
            navigationVOffset:20,

            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,

            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,

            shadow:0,
            fullWidth:"off",
            fullScreen:"on",

            spinner:"spinner0",

            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,

            shuffle:"off",


            forceFullWidth:"off",
            fullScreenAlignForce:"off",
            minFullScreenHeight:"",
            hideTimerBar:"on",
            hideThumbsOnMobile:"off",
            hideNavDelayOnMobile:1500,
            hideBulletsOnMobile:"off",
            hideArrowsOnMobile:"off",
            hideThumbsUnderResolution:0,

            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            startWithSlide:0
        });
});
jQuery(window).load(function(){
    jQuery('#rev_slider_6_1 div.slotholder').prepend('<div class="bk-responsive-slide"></div>');
});