/*
* @Author: 17938
* @Date:   2019-09-15 12:42:06
* @Last Modified by:   17938
* @Last Modified time: 2019-09-15 13:32:00
*/
$(function(){
	$('.case-img div').hover(function() {
		$(this).css('padding-top','0px');
		$(this).children().children('img').addClass('img1');
	}, function() {
		$(this).children().children('img').removeClass('img1');
	});
})