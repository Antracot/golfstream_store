function stabilize(){$(".section:not(.rewievs):not(:hidden)").each(function(e,t){var i=$(this).offset().top,o=i-$(window).scrollTop();$("body").position().top;o>-$(window).height()/2&&o<$(window).height()/2&&$("html, body").animate({scrollTop:$(this).offset().top},250)})}var isMobile=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(window.location="../mobile/"),$(document).ready(function(){$(".fixed_header").show(),$(window).on("hashchange",function(){var e=window.location.hash.substring(1);$("section").hide(),$("#"+e).show()}),$(".bxslider").bxSlider({pagerCustom:"#bx-pager"}),$(".open_menu ul li a").on("click",function(e){e.preventDefault(),$(".open_menu").toggle(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)}),$(".fixed_header .menu_nav a").on("click",function(e){e.preventDefault(),$(".open_menu").toggle()}),$(".open_menu .close a").on("click",function(e){e.preventDefault(),$(".open_menu").toggle()}),$("#popup_close_btn, .popup_success").click(function(){$(".popup_success").hide()}),$("#error_popup_close_btn, .inp_error").on("click",function(){$(".inp_error").hide()}),$("#privacy_policy").on("click",function(){$(".privacy_policy").show()}),$("#privacy_policy_close, .privacy_policy").on("click",function(){$(".privacy_policy").hide()}),$(".header .blue_btn").on("click",function(e){$(".video_popup").show(),$(".video_top").parent().find(".opacity").html('<iframe id="top_video" width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data("video")+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),$(".video_top").parent().find(".opacity").css("opacity","1")}),$(".video_popup .close_button").on("click",function(e){$(".video_top").parent().find(".opacity").html("<iframe></iframe>"),$(".video_popup").hide()}),$("#href3 .button_wrapper a").on("click",function(e){e.preventDefault();var t=$(this);$("#href3 .button_wrapper a").removeClass("active"),t.addClass("active");var i=t.attr("data-id");$("#href3 .sec3_content").fadeOut(300),$("#href3 #sec3_cont"+i).fadeIn(300),$(".video_block .play_btn").parent().find(".opacity").html("<iframe></iframe>"),$(".video_block .play_btn").parent().find(".opacity").css("opacity","0"),$(".video_block .play_btn").css("display","")}),$(".video_block .play_btn").click(function(){$(this).parent().find(".opacity").html('<iframe width="480px" height="270px" src="https://www.youtube.com/embed/'+$(this).data("video")+'?autoplay=1&showinfo=0&controls=0" frameborder="0" allowfullscreen></iframe>'),$(this).parent().find(".opacity").css("opacity","1"),$(this).css("display","none")}),$("#href8 .button_wrapper a").on("click",function(e){e.preventDefault();var t=$(this);$("#href8 .button_wrapper a").removeClass("active"),t.addClass("active");var i=t.attr("data-id");$("#href8 .sec8_content").fadeOut(300),$("#href8 #sec8_tab"+i).fadeIn(300)}),$(".d_v1").click(function(){$("#step1_1").val("Какая ориентировочно площадь вам подойдет? : "+$(this).data("value"))}),$(".d_v2").click(function(){$("#step1_2").val("Где территориально планируете размещать магазин? : "+$(this).data("value"))}),$(".d_v3").click(function(){$("#step1_3").val("Когда планируете открывать магазин? : "+$(this).data("value"))});var e=[0,0,0,0],t=1;$("#href4 .sec4_form .sec_but").on("click",function(){e[t]=$(this).text(),$("#sec4_item"+t).data($(this).text()),$("#sec4_item"+t).hide(),t++,$("#sec4_item"+t).fadeIn(1e3),t>1?$("#href4 .back_arrow").fadeIn(1e3):$("#href4 .back_arrow").hide()}),$("#href4 .back_arrow").on("click",function(){$("#sec4_item"+t).hide(),t--,$("#sec4_item"+t).fadeIn(1e3),t>1?$("#href4 .back_arrow").show():$("#href4 .back_arrow").hide()}),$(".d_v21").click(function(){$("#step2_1").val("Какая ориентировочно площадь вам подойдет? : "+$(this).data("value"))}),$(".d_v22").click(function(){$("#step2_2").val("Где территориально планируете размещать магазин? : "+$(this).data("value"))}),$(".d_v23").click(function(){$("#step2_3").val("Когда планируете открывать магазин? : "+$(this).data("value"))});var i=[0,0,0,0],o=1;$("#href7 .sec7_form .sec_but").on("click",function(){i[o]=$(this).text(),$("#sec7_item"+o).hide(),o++,$("#sec7_item"+o).fadeIn(700),o>1?$("#href7 .back_arrow").fadeIn(1e3):$("#href7 .back_arrow").fadeOut()}),$("#href7 .back_arrow").on("click",function(){$("#sec7_item"+o).hide(),o--,$("#sec7_item"+o).fadeIn(1e3),o>1?$("#href7 .back_arrow").show():$("#href7 .back_arrow").hide()}),$('input[name="name"]').blur(function(){$(this).val().length<3&&$(this).addClass("error-input")}),$('input[name="name"]').focus(function(){$(this).removeClass("error-input")}),$('input[name="phone"]').mask("+7 (999) 999-99-99"),$('input[name="phone"]').submit(function(){18!=$(this).val().length&&$(this).addClass("error_input")}),$('input[name="phone"]').focus(function(){$(this).removeClass("error_input")}),$("textarea").blur(function(){$(this).val().length<3&&$(this).addClass("error_input")}),$("textarea").focus(function(){$(this).removeClass("error_input")}),$("form").submit(function(e){if(e.preventDefault(),$("form").find('input[type="text"]').trigger("red"),$("form").find("textarea").trigger("blur"),!$(this).find('input[type="text"]').hasClass("error_input")&&!$(this).find("textarea").hasClass("error_input")){var t=$(this).attr("method"),i=$(this).attr("action"),o=$(this).serialize();$.ajax({type:t,url:i,data:o,success:function(){$(".popup_success").slideToggle("slow")({direction:"up"},300)}})}$(this).trigger("reset")}),document.addEventListener("invalid",function(){return function(e){e.preventDefault()}}(),!0),$('<figure><object data="ajax/map.html"></object></figure>').appendTo("#map"),console.log("map.append"),$("#cascade-slider").cascadeSlider({}),$("#cascade-slider img").on("click",function(){$(this).parent().parent().find(".video_section").find(".opacity").css("opacity","1"),$(this).parent().parent().find(".video_section").find(".video_btn").css("opacity","0"),$(this).parent().parent().find(".video_section").find(".opacity").html('<iframe style="display: none;"></iframe>')}),$(".cascade-slider_item").click(function(){if($(this).hasClass("now"))$(this).find(".video_section").find(".opacity").html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data("video")+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'),$(this).find(".video_section").find(".opacity").css("opacity","1"),$(this).find(".video_section").find(".video_btn").css("opacity","0");else if($(this).hasClass("next")){var e=document.getElementById("next_button");$(e).trigger("click"),$(this).parent().parent().find(".opacity").html('<iframe style="display: none;"></iframe>'),$(this).find(".video_section").find(".opacity").css("opacity","0"),$(this).find(".video_section").find(".video_btn").css("opacity","1")}else if($(this).hasClass("prev")){var t=document.getElementById("prev_button");$(t).trigger("click"),$(this).parent().parent().find(".opacity").html('<iframe style="display: none;"></iframe>'),$(this).find(".video_section").find(".opacity").css("opacity","0"),$(this).find(".video_section").find(".video_btn").css("opacity","1")}})}),$("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",function(){$("html, body").stop()}),1!=isMobile&&$(window).scroll(function(){clearTimeout($.data(this,"scrollTimer"));var e=$(window).scrollTop();console.log(e),e>$(window).height()-60?$(".fixed_header").css("background","rgba(0, 0, 0, 0.5)"):$(".fixed_header").css("background","rgba(0, 0, 0, 0.0)"),$.data(this,"scrollTimer",setTimeout(stabilize,1500))});