/*
* @Author: hp
* @Date:   2019-09-05 18:37:03
* @Last Modified by:   hp
* @Last Modified time: 2019-09-08 11:38:14
*/
$(function(){
	$('.infor-zhaoping').click(function(){
		$(this).removeClass('infor-zhaoping').parent().siblings().children('.infor-one').addClass('infor-zhaoping');
		$(this).addClass('infor-color').parent().siblings().children('.infor-one').removeClass('infor-color');
		$(this).children('.infor-right').children('span').attr('class','iconfont icon-iconfontmove jian white')
		.parents('.infor-word1').siblings().find('span').attr('class','iconfont icon-jiahao2 jian');
		$(this).next().css('display','block').parent().siblings().children('.infor-person').css('display','none');
	})
	$(window).scroll(function(){
		var h=$('.talent-concept').offset().top;
		var h1=$('.information').offset().top;
		var h2=$('.infor-word2').offset().top;
		if($(document).scrollTop()>h&&$(document).scrollTop()<h1-200){
			$('.talent-word').addClass('fadeInLeft');
		}
		if($(document).scrollTop()>h+100&&$(document).scrollTop()<h2){
			$('.information .title').addClass('fadeInUp');
            $('.information .infor').addClass('fadeInUp');
		}
		if($(document).scrollTop()>h1-200){
			$('.infor-word1').addClass('fadeInUp');
		}
	})
	var can = document.getElementById("can");
	var ctx = can.getContext("2d");

	var w = can.width = window.innerWidth;
	var h = can.height = window.innerHeight;

	window.onresize = function(){
		w = can.width = window.innerWidth;
		h = can.height = window.innerHeight;
	}
$('.infor-color').removeClass('infor-zhaoping')
	function Rain(){}  //使用函数构造器来创建对象
		Rain.prototype = {    //通过对象的prototype原型链属性来给对象添加功能
			init:function(){
				this.x = ranNum(0,w);   //雨滴的初始位置
				this.y = 0;             //雨滴的初始位置
				this.maxHeight = ranNum(1.2*h,1.5*h);   //落点位置
				this.s = ranNum(4,6);   //下落的速度
				this.r = 1;             //波纹初始化半径
				this.rs = 1;            //波纹初始化扩散速度
				this.a = 1;             //波纹初始化透明度
				this.as = 0.96;         //波纹初始化透明度的变化率
			},
			draw:function(){        //绘画
				if (this.y>this.maxHeight) {   //画波纹
					ctx.beginPath();
					ctx.strokeStyle = "rgba(0,255,255,"+this.a+")";      //设置笔触的颜色、渐变或模式
					ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);     //波纹圆心x、y,波纹半径r,0度-360度,顺时针方向画波纹
					ctx.stroke();
				}else{                        //画雨滴
					ctx.fillStyle = "rgb(0,255,255)";
					ctx.fillRect(this.x,this.y,2,10);   //画刷填充矩形  X和Y用于指定矩形左上角也就是相对于原点的位置，width和height用于指定矩形的宽和高。
				}
				this.update();  //画完一滴雨要更新
			},
			update:function(){
				if (this.y<this.maxHeight) {  
					this.y += this.s;
				}else{
					if (this.a>0.03) {
						this.r += this.rs;
						if (this.r >20 ) {
							this.a *= this.as;
						}
					}else{
						this.init();
					}
				}
			}
		}

		var rains = [];   //对象的实例化：假设已经定义了一个雨滴数组rains
		for(var i=0;i<30;i++){   //利用循环结构来实例化30滴雨
			setTimeout(function(){
				var rain = new Rain();
				rain.init();
				rains.push(rain);
			},i*300)

		}

		function move(){
			ctx.fillStyle = "rgba(0,0,0,0.1)";
			ctx.fillRect(0,0,w,h);
			for(var i=0;i<rains.length;i++){
				rains[i].draw();
			}
			requestAnimationFrame(move);
		}
		move();

		function ranNum(min,max){
			return Math.random()*(max-min) + min;
		}
	
})