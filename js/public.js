/*
* @Author: hp
* @Date:   2019-09-03 14:12:14
* @Last Modified by:   hp
* @Last Modified time: 2019-09-16 19:05:15
*/
$(function(){
	$(".nav-toggle").click() /*只要打开页面 就触发按钮事件，让nav-content一直出现*/

	$('.nav-toggle i').click(function(){
		
		$('.nav-bigbox').slideDown(500);
		return false;
	})
	$('.back-color').click(function(){
		$('.nav-bigbox').slideUp(500)


	})
	$('.aside-content ul').hover(function() {
		$(this).addClass('thr');
		$(this).children().css('transition-delay','0.4s');
		$(this).children().removeClass('orange-color1');
	}, function() {
		$(this).removeClass('thr');
		if($(this).children().hasClass('myhover')){
            $(this).children().css('transition-delay','0s');
			$(this).children().addClass('orange-color1');
		}
	});
	// 侧导航
	$('.close1').hover(function() {
		$(this).addClass('close2');
	}, function() {
		$(this).removeClass('close2');
	});
	$('.close1').click(function(){
		$('.aside-one-infor').css('width','0px');
		$('.aside-one').removeClass('aside-one1');
		return false;
	})
	$('.aside-one').click(function(){
		$('.aside-one-infor').css('width','179px');
		return false;
	})
    $('.aside-two').click(function(){
    	$('.aside-two').addClass('aside-one1');
    	$('.aside-fixed1').fadeIn(500);
    	return false;
    })
    $('.aside-fixed1').click(function(){
    	$('.aside-two').removeClass('aside-one1');
    	$('.aside-fixed1').fadeOut(500);
    	return false;
    })
    $('.share-three').hover(function() {
    	$(this).addClass('share-three1');
    }, function() {
    	$(this).removeClass('share-three1');
    });
    $(window).scroll(function(){
    	if($(document).scrollTop()>500){
    		$('.aside-three').removeClass('aside-three1');
    	}
    	if($(document).scrollTop()<500){
    		$('.aside-three').addClass('aside-three1');
    	}
    })
})