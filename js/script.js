(function($) {

    $(document).ready(function() {
        // console.log(alert("hiii"))
        $(".search").hide();
        $("#search-submit").hide();
        $("#search-submit-mobile").hide();
        $(".mobile-menu-container").hide();
        $("header .toggle-btn, header .search-btn.mobile").click(function() {
            $(".mobile-menu-container").slideToggle("easeOut");
            $(".toggle-btn").toggleClass("active");
            $("html").toggleClass("overflow-hidden");
        })
        $(".search-btn#desktop-search").click(function() {
            $(".search").slideToggle(500);
        })
        $(".search #search").on("input", function() {
            if ($(".search #search").val().length) {
                $("#voice").hide();
                $("#search-submit").show();
            } else {
                $("#voice").show();
                $("#search-submit").hide();
            }

        })

        $("#search-mobile").on("input", function() {
            if ($("#search-mobile").val().length) {
                $("#voice-mobile").hide();
                $("#search-submit-mobile").show();
            } else {
                $("#voice-mobile").show();
                $("#search-submit-mobile").hide();
            }

        })
        $('.banner-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            speed: 500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/slick-prev.svg' class='desktop-only'> <img src='img/yellow-prev.svg' class='mobile-only'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/slick-next.svg' class='desktop-only'> <img src='img/yellow-next.svg' class='mobile-only'></button>"
        });
        $('.tab-l2-slider').not('.slick-initialized').slick({
            slickSetOption: true,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            speed: 500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/slick-prev.svg'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/slick-next.svg'></button>",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 4,
                  }
                }
            ]
        });
        $('#tabsl1 .tab-one-head .know-more-l1').click(function() {
            $('#tabsl1 .tab-one-head').removeClass('active');
            tab = $(this).data('hl1');
            $('[data-h1="' + tab + '"]').addClass('active');
            $('.tab').removeClass('active');
            $('#' + tab + '').addClass('active');
            $('#' + tab + ' .tab-l2-slider').slick('refresh');
        });
        $(".tab-l3 .tab-l3-tab-heads .tab-l3-tab-heads-hd").click(function() {
            $(".tab-l3 .tab-l3-tab-heads .tab-l3-tab-heads-hd").removeClass("active");
            $(".tab-l3 .tab-l3-tabs-tab").removeClass("active");
            $(this).addClass("active");
            tab = $(this).data('hl3');
            $('#' + tab).addClass("active");
        });
        $(".tab-l2 .tab-head-l2").click(function() {
            $(".tab-l2").addClass("active");
            $(".tab-l2 .tab-l2-slider-slide").removeClass("active");
            $(".tab-l3").removeClass("active");
            tab = $(this).data("hl4");
            $('[data-hid="' + tab + '"]').addClass("active");
            $("#" + tab).addClass("active");
        });
        // var infotab = "0";
        // $(".information .information-container-header").mouseenter(function() {
        //     $(".information .information-container-content img").removeClass("active");
        //     tab = $(this).data("id");
        //     $("#" + tab).addClass("active");
        // });
        // $(".information .information-container-header").mouseleave(function() {
        //     $(".information .information-container-content img").removeClass("active");
        //     $("#" + infotab).addClass("active");
        // });
        $(".information .information-container-header").click(function() {
            $(".information .information-container-header").removeClass("active");
            $(".information .information-container-content img").removeClass("active");
            tab = $(this).data("id");
            $(this).addClass("active");
            $("#" + tab).addClass("active");
            // infotab = $(this).data("it");
        });
        $(".information .info-buttons .info-button").click(function() {
            $(".information .info-buttons .info-button").removeClass("active");
            $(".information .information-container").removeClass("active");
            tab = $(this).data("id");
            $(this).addClass("active");
            $("#" + tab).addClass("active");
            $(".information .information-container-header:first-child").addClass("active");
            $(".information .information-container-header:last-child").removeClass("active");
            $(".information .information-container-content img:first-child").addClass("active");
            $(".information .information-container-content img:last-child").removeClass("active");
        });
        $('.solutions-slider').not('.slick-initialized').slick({
            slickSetOption: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            speed: 500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/slick-prev.svg'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/slick-next.svg'></button>",
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1.3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        $('.celeb-slider').not('.slick-initialized').slick({
            slickSetOption: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            speed: 500,
            prevArrow: "<button type='button' class='slick-prev pull-left'><img src='img/slick-prev.svg'></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><img src='img/slick-next.svg'></button>",
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }]
        });

        //Get In Touch Form Modal
        $(".contact-cta, .get-in-touch-btn").click(function() {
            $(".modal-overlay").addClass("active");
        });
        $(".modal-overlay .close-btn, .modal-overlay-outer").click(function() {
            $(".modal-overlay").removeClass("active");
        })
        $(".category .category-list .category-list-head").click(function() {
            $(".category .category-list .category-list-head").removeClass("active");
            $(this).addClass('active');
            $(".category .tab").removeClass("active");
            tab = $(this).data("tabid")
            $("#" + tab).addClass("active")
            $(".category .category-list").scrollLeft($(this).position().left - 30)
        })
        $(".category .category-list .category-list-head:last-child, .category .category-list .category-list-head:nth-last-child(2), .category .category-list .category-list-head:nth-last-child(3)").click(function() {
            $(".category .category-list .category-list-head").removeClass("active");
            $(this).addClass('active');
            $(".category .tab").removeClass("active");
            tab = $(this).data("tabid")
            $("#" + tab).addClass("active")
            $(".category .category-list").scrollLeft($(this).position().left + 200)
        })
        $(".information-mobile .category-list .category-list-head").click(function() {
            $(".information-mobile .category-list .category-list-head").removeClass("active");
            $(this).addClass('active');
            $(".information-mobile .tab").removeClass("active");
            $(".information-mobile .view-all").removeClass("active");
            tab = $(this).data("tabid")
            $("#" + tab).addClass("active")
            $("." + tab).addClass("active")
            $("#" + tab).slick('refresh');
            $(".information-mobile .category-list").scrollLeft($(this).position().left - 30)
        })
        $(".information-mobile .category-list .category-list-head:last-child").click(function() {
            $(".information-mobile .category-list .category-list-head").removeClass("active");
            $(this).addClass('active');
            $(".information-mobile .tab").removeClass("active");
            $(".information-mobile .view-all").removeClass("active");
            tab = $(this).data("tabid")
            $("#" + tab).addClass("active")
            $("." + tab).addClass("active")
            $("#" + tab).slick('refresh');
            $(".information-mobile .category-list").scrollLeft($(this).position().left + 200)
        })
        $('#checklist2').not('.slick-initialized').slick({
            slickSetOption: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 500
        });
        $('#shortvideo2').not('.slick-initialized').slick({
            slickSetOption: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            speed: 500
        });
        $(".accordian .accordian-header").click(function() {
            $(this).siblings().slideToggle();
            $(this).parent().toggleClass("active");
        })
        $(".accordian .accordian-body").hide();
        $(".accordian.active .accordian-body").show();

        function heightFix() {
            var h3height = 0;
            $('.checklist .checklist-block').each(function() {
                if(h3height < $(this).outerHeight()){
                    h3height = $(this).outerHeight();
                };
            });
            jQuery('.checklist .checklist-block').css('min-height', h3height);
        }

        var vWidth = $(window).width();
        if(vWidth > 700 && vWidth < 1000) {
            console.log("test")
            heightFix();
            $('.category-list').on('click', function() {
                console.log("tests")
                heightFix();
            })
            
        }

    });
})(jQuery);