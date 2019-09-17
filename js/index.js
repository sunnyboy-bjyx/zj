/*
* @Author: hp
* @Date:   2019-08-26 15:03:09
* @Last Modified by:   hp
* @Last Modified time: 2019-09-16 20:35:59
*/
$(function(){
	/*导航条*/
	// $(".nav-toggle").click() /*只要打开页面 就触发按钮事件，让nav-content一直出现*/

	// $('.nav-toggle i').click(function(){
		
	// 	$('.nav-bigbox').slideDown(500);
	// 	return false;
	// })
	// $('.back-color').click(function(){
	// 	$('.nav-bigbox').slideUp(500)


	// })
	// $('.aside-content ul').hover(function() {
	// 	$(this).addClass('thr');
	// }, function() {
	// 	$(this).removeClass('thr')
		
	// });
    
	// 我们的服务部分
    $('.col-my').hover(function() {
       $(this).addClass('col-my1');
       $(this).children().css('color','#fff');
    }, function() {
        $(this).removeClass('col-my1');
        $(this).children().css('color','');
    });
    $('.col-my').hover(function() {
       $(this).children('.mysever-left').addClass('mysever-left1');
       $(this).children('.mysever-right').addClass('mysever-right1');

    }, function() {
        $(this).children('.mysever-left').removeClass('mysever-left1');
       $(this).children('.mysever-right').removeClass('mysever-right1');
    });
     // 当滚动条滚动到一定高度的时候，元素会以动画的形式出现
    $(window).scroll(function(){
        var h5=$('.my-pic').offset().top;
        var h=$('.pro-case').offset().top;
        var h1=$('.my-area').offset().top;
        var h2=$('.circle').offset().top;
        var h3=$('.my-new').offset().top;
        var h4=$('.my-contcat').offset().top;
    	if($(document).scrollTop()>250&&$(document).scrollTop()<h5-300){
    		$('.mysever-top h3').addClass('fadeInUpBig');
    		$('.mysever-top span').addClass('fadeInUpBig');
    	}
        if($(document).scrollTop()>330&&$(document).scrollTop()<h5-300){
    		$('.mysever-top p').addClass('fadeInUpBig');
    	}
        if($(document).scrollTop()>400&&$(document).scrollTop()<h5-200){
    		$('.col-my').addClass('fadeInDownBig');
    		$('.col-my').css('opacity','1');
    	}
        // 我的图片部分
       if($(document).scrollTop()>h5-400&&$(document).scrollTop()<h-300){
            $('.one-img').addClass('fadeInLeft');
            $('.two-img').addClass('fadeInLeft');
        }
        if($(document).scrollTop()>h5-300&&$(document).scrollTop()<h-200){
            $('.word').addClass('bounceInUp');
            $('.word').css('opacity','1');
        } 
        if($(document).scrollTop()>h5-200&&$(document).scrollTop()<h-100){
            $('.three-img').addClass('fadeInLeft');
        } 
        if($(document).scrollTop()>h5-100&&$(document).scrollTop()<h){
            $('.four-img').addClass('fadeInLeft');
        }
        // 案例产品的轮播图
         if($(document).scrollTop()>h-500&&$(document).scrollTop()<h1){
            $('.pro-case .pro-title h2').addClass('fadeInUpBig');
            $('.pro-case .pro-title p').addClass('fadeInUpBig');
        } 
        if($(document).scrollTop()>h-200&&$(document).scrollTop()<h1){
            $('.banner-pic').addClass('zoomIn');
            $('.banner-pic').css('opacity','1');
        }
        // 行业领先部分
         if($(document).scrollTop()>h1-500&&$(document).scrollTop()<h2-400){
            $('.my-area .pro-title h2').addClass('bounceInLeft');
            $('.my-area .pro-title p').addClass('bounceInLeft');
            $('.my-area .pro-title h2').css('opacity','1');
            $('.my-area .pro-title p').css('opacity','1');
        }
        if($(document).scrollTop()>h1-350&&$(document).scrollTop()<h2-300){
            $('.my-area1').eq(0).addClass('bounceInLeft');
            $('.my-area1').eq(0).css('opacity','1');
        } 
        if($(document).scrollTop()>h1-250&&$(document).scrollTop()<h2-200){
            $('.my-area1').eq(1).addClass('flipInX');
            $('.my-area1').eq(1).css('opacity','1');
        } 
        if($(document).scrollTop()>h1-100&&$(document).scrollTop()<h2-100){
            $('.my-area1').eq(2).addClass('bounceInRight')
            $('.my-area1').eq(2).css('opacity','1');
        }
        // 圆部分
        if($(document).scrollTop()>h2-400&&$(document).scrollTop()<h3-100){
            $('.big-circle-banner').addClass('rotateIn');
            $('.big-circle-banner').css('opacity','1');
        }
        // 最新动态部分
        if($(document).scrollTop()>h3-400&&$(document).scrollTop()<h4-500){
            $('.my-new .pro-title h2').addClass('fadeInUpBig');
            $('.my-new .pro-title p').addClass('fadeInUpBig');
        } 
        if($(document).scrollTop()>h3-150&&$(document).scrollTop()<h4-100){
            $('.big-box-new').addClass('zoomIn');
            $('.big-box-new').css('opacity','1');
        }
        // 联系我们
         if($(document).scrollTop()>h4-400){
            $('.my-contcat .pro-title h2').addClass('fadeInUpBig');
            $('.my-contcat .pro-title p').addClass('fadeInUpBig');
        } 
        if($(document).scrollTop()>h4-200){
            $('.title-top').addClass('bounceInUp');
            $('.title-top').css('opacity','1');
        }
         if($(document).scrollTop()>h4){
            $('.title-bottom').addClass('bounceInUp');
            $('.title-bottom').css('opacity','1');
        }
        
    })
	// 案例产品的轮播图
	var i=0;
  $('.my-right3').click(function(){
    i++;
    if(i>7){
      i=0;
      $('.banner-pic ul').css('left',0+"%");
      i=1;
    }
      $('.banner-pic ul').stop().animate({'left':-100*i+"%"},1000);
  })

  $('.my-left3').click(function(){
    i--;
    if(i<0){
      i=7;
      $('.banner-pic ul').css('left',-100*i+"%");
      i=6;
    }
    $('.banner-pic ul').stop().animate({'left':-100*i+"%"},1000);
  })

	$('.my-right1').click(function(){
        i++;
        if(i>7){
        	i=0;
        	$('.banner-pic ul').css('left',0+"%");
        	i=1
        }
		$('.banner-pic ul').stop().animate({'left':-50*i+"%"},1000);
	})
	$('.my-left1').click(function(){
		i--;
		if(i<0){
			i=7;
			$('.banner-pic ul').css('left',-50*i+"%");
			i=6;
		}
		$('.banner-pic ul').stop().animate({'left':-50*i+"%"},1000);
	})
	$('.my-right2').click(function(){
        i++;
        if(i>7){
        	i=0;
        	$('.banner-pic ul').css('left',0+"%");
        	i=1
        }
		$('.banner-pic ul').stop().animate({'left':-33.333*i+"%"},1000);
	})
	$('.my-left2').click(function(){
		i--;
		if(i<0){
			i=7;
			$('.banner-pic ul').css('left',-33.333*i+"%");
			i=6;
		}
		$('.banner-pic ul').stop().animate({'left':-33.333*i+"%"},1000);
	})

	$(window).resize(function(event) {
    if($(window).width()<496){
      $('.banner-pic ul').css({'left':-100*i+"%"})
    }
		else if($(window).width()<768){	
			$('.banner-pic ul').css({'left':-50*i+"%"})
		}else{
			$('.banner-pic ul').css({'left':-33.333*i+"%"})
		}
	});
  // 行业领先部分
  $('.my-area1').hover(function() {
    $(this).children('.banner-area-position').slideDown(200);
  }, function() {
     $(this).children('.banner-area-position').slideUp(200);
  });
	// 圆部分 banner
	var timer;
	var j=0;
	var k,h;
  // k表示每次移动的距离，h代表移动的最大次数
  if($(window).width()<496){
     k=-100;
       h=6;
  }
	else if($(window).width()<786){
       k=-50;
       h=5;
	}else if($(window).width()<1012){
		k=-33.333;
		h=4;
	}else if($(window).width()<1218){
		k=-25;
		h=3;
	}else{
		k=-16.666;
		h=1
	}
	function aa(){
      clearInterval(timer); 
      timer=setInterval(function(){
         j--;
         if(j<0){
         	j=h;
         }
        $('.circle-banner1').animate({'margin-left':k*j+"%"},1000);
      },4000) 
	}
	// 每伸缩一次窗口使circle-banner1的margin-left移动的距离改变
	$(window).resize(function(event){
      if($(window).width()<496){
          k=-100;
          h=6;
      }
      else if($(window).width()<786){
       	k=-50;
          h=5;
       	$('.circle-banner1').css('margin-left',k*j+"%");
       }else if($(window).width()<1012){
       	k=-33.33;
       	 h=4;
       	$('.circle-banner1').css('margin-left',k*j+"%");
       }else if($(window).width()<1218){
       	k=-25;
       	h=3;
       	$('.circle-banner1').css('margin-left',k*j+"%");
       }else{
       	k=-16.6666;
       	h=1;
       	$('.circle-banner1').css('margin-left',k*j+"%");
       }
   })
	$('.left-circle').click(function(){
		j--;
         if(j<0){
         	j=h;
         }
        $('.circle-banner1').animate({'margin-left':k*j+"%"},1000);
	})
	$('.right-circle').click(function(){
		j++;
		if(j>h){
			j=0;
		}
		$('.circle-banner1').animate({'margin-left':k*j+"%"},1000);

	})
	$('.right-circle').hover(function() {
		clearInterval(timer);
	}, function() {
		aa();
	});
	$('.left-circle').hover(function() {
		clearInterval(timer);
	}, function() {
		aa();
	});
	aa();
	$('.circle-banner1 li').hover(function() {
	   $('.circle-banner1 li img').css('opacity','0.2');
       $(this).children().css('opacity','1');
	}, function() {
		$('.circle-banner1 li img').css('opacity','1');
	});
	// 最新动态部分
	// a是索引值
	var a=0;
	// m:最大点击次数
	var m;
	// n:一次走多少
	var n;
	if($(window).width()<618){
		m=11;
		n=-100;
	}else if($(window).width()<929){
        m=10;
        n=-50;
	}else if($(window).width()<1318){
        m=9;
        n=-33.333;
    }else{
        m=8;
        n=-25;
    }
    var cirnum=0;
    function circle(){
    	if((a*-n)>=0&&(a*-n)<99){
    		cirnum=0;
    	}else if((a*-n)>99&&(a*-n)<=199){
        	cirnum=1;
    	}else if((a*-n)>199&&(a*-n)<=299){
            cirnum=2;
    	}else if((a*-n)>299&&(a*-n)<=399){
            cirnum=3;
    	}else if((a*-n)>399&&(a*-n)<=499){
            cirnum=4;
    	}else if((a*-n)>499&&(a*-n)<=599){
            cirnum=5;
    	}else if((a*-n)>599&&(a*-n)<=699){
            cirnum=6;
    	}else if((a*-n)>699&&(a*-n)<=799){
            cirnum=7;
    	}else if((a*-n)>799&&(a*-n)<=899){
            cirnum=8;
    	}else if((a*-n)>899&&(a*-n)<=999){
            cirnum=9;
    	}else if((a*-n)>999&&(a*-n)<=1099){
            cirnum=10;
    	}else{
            cirnum=11;
    	}
    	if(n==-100){
    		$('.new-ol-12 .circle-new').eq(cirnum).addClass('circle-new-orang').siblings().removeClass('circle-new-orang');
    	}else if(n==-50){
    		$('.new-ol-6 .circle-new').eq(cirnum).addClass('circle-new-orang').siblings().removeClass('circle-new-orang');
    	}else if(n==-33.333){
    		$('.new-ol-4 .circle-new').eq(cirnum).addClass('circle-new-orang').siblings().removeClass('circle-new-orang');
    	}else{
    		$('.new-ol-3 .circle-new').eq(cirnum).addClass('circle-new-orang').siblings().removeClass('circle-new-orang');
    	}
    }
	$('.leftbtn-new').click(function(){
        a--;
        if(a<0){
        	a=m;
        }
        $('.new-banner').animate({'margin-left':a*n+"%"},1000);
        circle();
	})
	$('.rightbtn-new').click(function(){
        a++;
        if(a>m){
        	a=0;
        }
      $('.new-banner').animate({'margin-left':a*n+"%"},1000);
      circle();
	})
    $(window).resize(function(event) {
    	if($(window).width()<618){
    		m=11;
		    n=-100;
		    $('.new-banner').css('margin-left',a*n+"%");
    	}else if($(window).width()<929){
	        m=10;
	        n=-50;
	        $('.new-banner').css('margin-left',a*n+"%");
	    }else if($(window).width()<1318){
	        m=9;
	        n=-33.333;
	        $('.new-banner').css('margin-left',a*n+"%");
	    }else{
	        m=8;
	        n=-25;
	        $('.new-banner').css('margin-left',a*n+"%");
	    }
    });
    // 点击圆点ul移动的距离
    $('.circle-new').click(function(){
          var index=$(this).index();
          $(this).addClass('circle-new-orang').siblings().removeClass('circle-new-orang');
          if($(window).width()<618){
             $('.new-banner').animate({'margin-left':index*n+"%"},1000);
          }else if($(window).width()<929){
             $('.new-banner').animate({'margin-left':index*2*n+"%"},1000);
          }else if($(window).width()<1318){
              $('.new-banner').animate({'margin-left':index*3*n+"%"},1000);
          }else{
               $('.new-banner').animate({'margin-left':index*4*n+"%"},1000);
          }
          a=index;
    })
})

