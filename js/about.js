/*
* @Author: hp
* @Date:   2019-09-03 14:11:44
* @Last Modified by:   17938
* @Last Modified time: 2019-09-15 11:15:01
*/
$(function(){
	// 轮播图部分
	$('.team-banner-img').hover(function() {
		$(this).children('.team-small-li').addClass('team-small-li-one');
	}, function() {
		$(this).children('.team-small-li').removeClass('team-small-li-one');
	});
	var timer;
	// 移动次数
	var q=0;
	// 判断移动的最大次数后拉回到原点
	var m;
	//判断每次移动的距离
	var n;
	var myindex=0;
	if($(window).width()<786){
		m=4;
		n=100;
	}else{
		m=2;
		n=33.33;
	}
	function indexone(){
		if($(window).width()<768){
			if(q*n>=0&&q*n<99){
			myindex=0;	
	       }else if(q*n>=99&&q*n<199){
	       	    myindex=1;
	       }else if(q*n>=199&&q*n<299){
	       	    myindex=2;
	       }else if(q*n>=299&&q*n<399){
	       	    myindex=3;
	       }else{
	       	   myindex=4;
	       }
	   }else{
	   	    if(q*n>=0&&q*n<66){
	   	    	myindex=0;
	   	    }else{
	   	    	myindex=1;
	   	    }
	   }
		
       if(n==100){
       	    $('.team-ol-5 .team-li').eq(myindex).addClass('team-color').siblings().removeClass('team-color');
       }else{
       	    $('.team-ol-2 .team-li').eq(myindex).addClass('team-color').siblings().removeClass('team-color');
       }
        
	}
    
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			q++;
             if(q>m){
             	q=0;
             }
             $('.team-banner-ul').animate({'margin-left':-q*n+"%"}, 1000)
             indexone();
		},4000)
	}
	$(window).resize(function(event) {
		if($(window).width()<786){
			m=4;
		    n=100;
		    $('.team-banner-ul').css('margin-left',-q*n+"%");
	}else{
		// 有一屏向三屏切换的时候，当一屏走了三次或者四次的时候，防止出现空白情况
		if(q>2){
            q=2;
		}
	        m=2;
			n=33.33;
            $('.team-banner-ul').css('margin-left',-q*n+"%");
	}
	});
	go();
	$('.team-li').click(function(){
		clearInterval(timer);
		var index=$(this).index();
		$(this).addClass('team-color').siblings().removeClass('team-color');
		if($(window).width()<786){
            $('.team-banner-ul').animate({'margin-left':-index*n+"%"}, 1000);
		}else{
			$('.team-banner-ul').animate({'margin-left':-(index*2)*n+"%"}, 1000);
		}
		q=index;
        
	})
	$('.team-ol').mouseleave(function(event) {
		go();
	});
	// 当滚轮滚动到一定高度时，元素以动画的形式出现

	
	if($(document).scrollTop()<=100&&$(document).scrollTop()>=0){
		$('.company-introduct .title').addClass('fadeInUp');
	}

	
	$('.word1').addClass('fadeInLeft');
     $(window).scroll(function(event) {
     	if($(document).scrollTop()<=100&&$(document).scrollTop()>=0){
		$('.company-introduct .title').addClass('fadeInUp');
			}
     	var h=$('.company-introduct').offset().top;
     	var h1=$('.cultural-company').offset().top;
     	var h2=$('.team-strength').offset().top;
     	if($(document).scrollTop()>h-200&&$(document).scrollTop()<h1-300){
             $('.word2').addClass('fadeInLeft');
     	}
     	// if($(document).scrollTop()<h1){
     	// 	$('.company-introduct .title').css('opacity',1);
     	// 	$('.word1').css('opacity',1);;
     	// }
     	// if($(document).scrollTop()>h1){
     	// 	$('.company-introduct .title').removeClass('fadeInUp');
     	// 	$('.word1').removeClass('fadeInLeft');
     	// }
     	if($(document).scrollTop()>h&&$(document).scrollTop()<h1-200){
     		$('.introduct-ewm').addClass('swing');
     		$('.introduct-ewm').css('opacity','1');
     	}
     	if($(document).scrollTop()>h+300&&$(document).scrollTop()<h2-400){
     		$('.cultural-company .title').addClass('fadeInUp');
     	}
     	if($(document).scrollTop()>h+500&&$(document).scrollTop()<h2-300){
     		$('.cultural-word1').addClass('fadeInLeft');
     		$('.cultural-word2').addClass('fadeInRight');
     	}
     	if($(document).scrollTop()>h1+200){
     		$('.team-strength .title').addClass('fadeInUp');
     	}
     });
})