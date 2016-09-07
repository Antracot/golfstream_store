//мобильное устройство?
// var win_w = $(window).width();
// var win_h = $(window).height();
// var isMobile = false;
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     isMobile = true;
// }

// if (isMobile == true || win_w < 980 || win_h < 600) {
//     $('.animation').addClass('animated');
//     $('<style>.animation,.animation *{-webkit-transition:0s all 0s!important;transition:0s all 0s!important;-webkit-animation-duration:0s!important;animation-duration:0s!important;-webkit-animation-delay:0s!important;animation-delay:0s!important}.section .site-nav.down,.section .site-nav.up{display:none!important}.section{min-height:600px; margin-top: -1px;}</style>').appendTo('head');
// }

var isMobile = false; 
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.location = "../mobile/";    
    //isMobile = true;
}


$(document).ready(function() {

// слайдер 
$('.bxslider').bxSlider({
  pagerCustom: '#bx-pager'
});

//  меню и навигация по странице
$(".open_menu ul li a").on('click', function(event) {
        event.preventDefault();
        $(".open_menu").toggle();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

$(".fixed_header .menu_nav a").on("click", function(e) {
        e.preventDefault();
        $(".open_menu").toggle();
    });

$(".open_menu .close a").on("click", function(e) {
        e.preventDefault();
        $(".open_menu").toggle();
    });

// Popup window for success step 
$("#popup_close_btn").on("click", function(){
        $(".popup_success").slideUp(300);
    });  


// Video button header
$(".header .blue_btn").on("click", function(e) {
    $(".video_popup").show();
    $('.video_top').parent().find(".opacity").html('<iframe id="top_video" width="100%" height="100%" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    $('.video_top').parent().find(".opacity").css('opacity', '1');
    });
    
$(".video_popup .close_button").on("click", function(e) {
    $('.video_top').parent().find(".opacity").html('<iframe></iframe>')    
    $(".video_popup").hide();
    });


// меняем контент на транице
$("#href3 .button_wrapper a").on("click", function(e) {
				e.preventDefault();
        var $this = $(this);
        $("#href3 .button_wrapper a").removeClass("active");
        $this.addClass("active");
        var id = $this.attr("data-id");
        $("#href3 .sec3_content").hide();
        $("#href3 #sec3_cont" + id).show(500);
        $('.video_block .play_btn').parent().find(".opacity").html('<iframe></iframe>')
        $('.video_block .play_btn').parent().find(".opacity").css('opacity', '0');
        $('.video_block .play_btn').css('display', "");
    });



////////// запуск видео (примеры) - страница 3
$('.video_block .play_btn').click(function() {
    $(this).parent().find(".opacity").html('<iframe width="480px" height="270px" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>')
    $(this).parent().find(".opacity").css('opacity', '1');
    $(this).css('display', 'none');
    });




$("#href8 .button_wrapper a").on("click", function(e) {
				e.preventDefault();
        var $this = $(this);
        $("#href8 .button_wrapper a").removeClass("active");
        $this.addClass("active");
        var id = $this.attr("data-id");
        $("#href8 .sec8_content").hide();
        $("#href8 #sec8_tab" + id).show(500);
    });


// заполнение формы данными для отправки на мейл - 4 секция
$('.d_v1').click(function(){
      $("#step1_1").val('Какая ориентировочно площадь вам подойдет? : '+$(this).data('value'));
    });

$('.d_v2').click(function() {
       $('#step1_2').val('Где территориально планируете размещать магазин? : '+$(this).data('value'));
    });

$('.d_v3').click(function() {
       $('#step1_3').val('Когда планируете открывать магазин? : '+$(this).data('value'));
    });

////// выбор варианта ответа 4 секция
var but_arr4 = [0,0,0,0];
var counter4= 1;

 $("#href4 .sec4_form .sec_but").on("click", function() {
        but_arr4[counter4] = $(this).text();
        $("#sec4_item"+counter4).data($(this).text());
        $("#sec4_item"+counter4).hide();
        counter4 ++;
        $("#sec4_item"+counter4).fadeIn(700);
        if(counter4>1) {
            $("#href4 .back_arrow").fadeIn(500);
        	}
        else { $("#href4 .back_arrow").hide();
        }
    });

  
//func back to prev step page4
$("#href4 .back_arrow").on("click", function() {
        $("#sec4_item"+counter4).hide();
        counter4 --;
        $("#sec4_item"+counter4).show(1000);
        if(counter4>1) $("#href4 .back_arrow").show();
        	else $("#href4 .back_arrow").hide();
    });



// заполнение формы данными для отправки на мейл - 7 секция
$('.d_v21').click(function(){
      $("#step2_1").val('Какая ориентировочно площадь вам подойдет? : '+$(this).data('value'));
    });

$('.d_v22').click(function() {
       $('#step2_2').val('Где территориально планируете размещать магазин? : '+$(this).data('value'));
    });

$('.d_v23').click(function() {
       $('#step2_3').val('Когда планируете открывать магазин? : '+$(this).data('value'));
    });



////// выбор варианта ответа 7 секция
var but_arr = [0,0,0,0];
var counter= 1;

 $("#href7 .sec7_form .sec_but").on("click", function() {
        but_arr[counter] = $(this).text();
        $("#sec7_item"+counter).hide();
        counter ++;
        $("#sec7_item"+counter).fadeIn(700);
        if(counter>1) {
            $("#href7 .back_arrow").fadeIn(1000);
            }
        else { $("#href7 .back_arrow").hide();
        }
    });

//func back to prev step page7
$("#href7 .back_arrow").on("click", function() {
        $("#sec7_item"+counter).hide();
        counter --;
        $("#sec7_item"+counter).show(1000);
        if(counter>1) $("#href7 .back_arrow").show();
            else $("#href7 .back_arrow").hide();
    });


    $('input[name="name"]').blur(function() {
        if ($(this).val().length < 3) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="name"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {
        if ($(this).val().length != 18) {
            $(this).addClass('error-input');
        }
    });
    $('input[name="phone"]').focus(function() {
        $(this).removeClass('error-input');
    });

    $('textarea').blur(function() {
        if ($(this).val().length < 3) {
            $(this).addClass('error-input');
        }
    });
    $('textarea').focus(function() {
        $(this).removeClass('error-input');
    });

    // $('form').submit(function() { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "ajax/mail.php", //Change
    //         data: data()
    //     }).done(function() {
    //         alert("Спасибо! Ваше Сообщение Отправлено.");
    //         //$(".my_popup").show();
    //         //$("#form_popup").magnificPopup();
    //         setTimeout(function() {
    //             // Done Functions
    //             th.trigger("reset");
    //         }, 1000);
    //     });
    //     return false;
    // });


    $('form').submit(function(e) {
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        $(this).find('textarea').trigger('blur');
        if (!$(this).find('input[type="text"]').hasClass('error-input') && !$(this).find('textarea').hasClass('error-input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    //alert("Success");
                    $(".popup_success").slideToggle("slow")({
                        direction: "up"
                    }, 300);
                }
            });
        }
        $(this).trigger("reset");
    });

    // $('form').submit(function(e){
    //     e.preventDefault();
    //     $(this).find('input[type="text"]').trigger('blur');
    //     if(!$(this).find('input[type="text"]').hasClass('error-input')){
    //         var type=$(this).attr('method');
    //         var url=$(this).attr('action');
    //         var data=$(this).serialize();
    //         $.ajax({type: type, url: url, data: data,
    //         success : function(){
    //             $.arcticmodal('close');$('#popup_success').arcticmodal();
    //             ga('send','event','submit','submit');yaCounter36555965.reachGoal('submit');
    //         }
    //     }); 
    //     }
    // });






    //////////// добавляем карту
    $('<figure><object data="ajax/map.html"></object></figure>').appendTo('#map');
    console.log('map.append');


    ///////////   слайдер для видео
    $('#cascade-slider').cascadeSlider({});
    $('#cascade-slider img').on('click', function (){
        console.log("OK!");
        //$(this).parent().parent().find(".now .opacity").css('background', 'rgba(248, 248, 248, 0.0)');
        //$('.cascade-slider_item .now .opacity').css('opacity', '1');
        $(this).parent().parent().find(".opacity").html('<iframe style="display: none;"></iframe>');
        $(this).parent().parent().find(".opacity").html("");
    });    

    //////////  запуск видео в каруселе
    $('.video_btn').click(function() {
    	 console.log('dbltj ');
        $(this).parent().find(".opacity").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
        $(this).parent().find(".opacity").css('opacity', '1');
        $(this).css('display', 'none');
    });


});

//stabilization
function stabilize() {

    $('.section:not(.rewievs):not(:hidden)').each(function(index, el) {

        var eTop = $(this).offset().top;
        var posTop = eTop - $(window).scrollTop();

        if (posTop > -$(window).height() / 2 && posTop < $(window).height() / 2) {
            $("html, body").animate({
                scrollTop: $(this).offset().top
            }, 250);
            //console.log($(this).attr('class'));
        }

    });

}
$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function() {
    $("html, body").stop();
});
if (isMobile != true) {
    $(window).scroll(function() {

        clearTimeout($.data(this, 'scrollTimer'));

        $.data(this, 'scrollTimer', setTimeout(stabilize, 1500));

    });
}


