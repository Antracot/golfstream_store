$(function() {

	//  меню и навигация по странице
$(".open_menu ul li a").on('click', function(event) {
        event.preventDefault();
        $(".open_menu").toggle();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

$("#menu_open").on("click", function(e) {
        e.preventDefault();
        $(".open_menu").show();
    });

$("#menu_close").on("click", function(e) {
        e.preventDefault();
        $(".open_menu").hide();
    });

// Popup window for success step 
$("#popup_close_btn").click(function(){
        $(".popup_success").fadeOut(300);
    });  


// Video button header
$(".header .blue_btn").on("click", function(e) {
    $(".video_popup").show();
    $('.video_top').parent().find(".opacity").html('<iframe id="top_video" width="480px" height="320px" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>')
    $('.video_top').parent().find(".opacity").css('opacity', '1');
    });

	$(".video_popup .close_button").on("click", function(e) {
	    $('.video_top').parent().find(".opacity").html('<iframe></iframe>')    
	    $(".video_popup").hide();
	    });

	//слайдер страница 3
	$('.bxslider1').bxSlider({
	  	mode: 'fade',
	  	pagerCustom: '#bx-pager1',
	  	preventDefaultSwipeY: false
	});

	//слайдер страница 5
	$('.bxslider2').bxSlider({
	  	mode: 'fade',
	  	pagerCustom: '#bx-pager2',
	  	preventDefaultSwipeY: false
	});

	//слайдер страница 6
		$('.bxslider3').bxSlider({
	  	mode: 'fade',
	  	pagerCustom: '#bx-pager3',
	  	preventDefaultSwipeY: false
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

	$("#href4 .sec4_form .sec4_but_wrap a").on("click", function() {
        but_arr4[counter4] = $(this).text();
        $("#sec4_item"+counter4).data($(this).text());
        $("#sec4_item"+counter4).hide();
        counter4 ++;
        $("#sec4_item"+counter4).show(1000);
        if(counter4>1) {
            $("#href4 .back_arrow").show(1000);
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

	 $("#href7 .sec7_form .sec7_but_wrap a").on("click", function() {
	        but_arr[counter] = $(this).text();
	        $("#sec7_item"+counter).hide();
	        counter ++;
	        $("#sec7_item"+counter).show(1000);
	        if(counter>1) {
	            $("#href7 .back_arrow").show(1000);
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

















// $("#href3 .slider a").on("click", function(e) {
// 				e.preventDefault();
//         var $this = $(this);
//         $("#href3 .slider a").removeClass("active");
//         $this.addClass("active");
//         var id = $this.attr("data-id");
//         $("#href3 .sec3_content img").hide();
//         $("#href3 #sec3_cont" + id).show(500);
//         $('.video_block .play_btn').parent().find(".opacity").html('<iframe></iframe>')
//         $('.video_block .play_btn').parent().find(".opacity").css('opacity', '0');
//         $('.video_block .play_btn').css('display', "");
//     });

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

	////////// запуск видео (примеры) - страница 3
	$('.video_block .play_btn').click(function() {
	    $(this).parent().find(".opacity").html('<iframe width="480px" height="270px" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>')
	    $(this).parent().find(".opacity").css('opacity', '1');
	    $(this).css('display', 'none');
	    });

	$('.section5_content .play_btn').click(function() {
	    $(this).parent().find(".opacity").html('<iframe width="480px" height="270px" src="https://www.youtube.com/embed/' + $(this).data('video') + '?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>')
	    $(this).parent().find(".opacity").css('opacity', '1');
	    $(this).css('display', 'none');
	    });

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

    $("#href8 .button_wrapper a").on("click", function(e) {
				e.preventDefault();
        var $this = $(this);
        $(".button_wrapper a").removeClass("active");
        $this.addClass("active");
        var id = $this.attr("data-id");
        $("#href8 .sec8_content").hide();
        $("#href8 #sec8_tab" + id).show(500);
    });

	 //////////// добавляем карту
    $('<figure><object data="ajax/map.html"></object></figure>').appendTo('#map');
    console.log('map.append');


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
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
                    $(".popup_success").show('fast');
                }
            });
        }
        $(this).trigger("reset");
    });

	//question fucn
	// $("#question_close").click(function(){
 //        $(".question_close").hide(300);
 //        $(".qu_open").show(300);
 //    });

 //    $("#question_open").click(function(){
 //        $(".qu_open").hide(300);
 //        $(".question_close").show(300);
 //    });  

   //  $('#question_close, #question_open').click(function () {
   //  	$('.qu_open').slideToggle("slow")({
   //    		direction: "up"
   //  		}, 500);
  	// });

	// $("#question_open, #question_close").on("click", function(e) {
 //        e.preventDefault();
 //        $(".qu_open").slideToggle("slow");
 //    });

     $("#question_close").on("click", function(){
        $(".qu_open").fadeIn(300);
        $(".question_close").fadeOut(300);
    });
    $("#question_open").on("click",function(){
        $(".qu_open").fadeOut(300);
        $(".question_close").fadeIn(300);
    });


});
