
(function($) {

    $(document).ready(function() {
        jQuery(".mobile-footer h3").click(function(){
            jQuery(this).parent(".nav").toggleClass("open"); 
            jQuery('html, body').animate({ scrollTop: jQuery(this).offset().top - 170 }, 1500 );
        });

    });
})(jQuery);