$(document).ready(function(){
	var w_width = $(window).width();
	if(w_width < 768){
		$('.main-navigation li').on('click',function(){
			$('.main-navigation li').removeClass('active');
			if($(this).children('.wrap-sub-nav').length){
				var sub = $(this).children('.wrap-sub-nav');
				console.log(sub);
				if(sub.is(':visible')){

					$(this).removeClass('active');
					sub.slideUp();
				}else{
					$(this).addClass('active');
					sub.slideDown();
				}
				return false;
			}
		})
	}else{
		$('.main-navigation li').hover(function(){
			var pos_li = $(this).position();
			var sub = $(this).children('.wrap-sub-nav');

			sub.css({'left':pos_li.right});
			if(sub.length){
				$('.main-navigation li div.wrap-sub-nav').slideUp();
				// $(this).addClass('active');
				sub.stop().slideDown();
			}
		},function(){
			var sub = $(this).children('.wrap-sub-nav');
			sub.stop().slideUp();
		})
	}
})

function animation(classname, animate){
	classname  = classname || 'animation';

	$('.'+classname).each(function(index,el){
		new Waypoint({
			element: el,
			handler:function(direction){
				var element = $(this.element),
				delay = element.attr("data-delay");
				// $(el).removeClass('hide-ani');	
				setTimeout(function(){
					$(el).addClass('animated '+animate+' show-ani');
				},delay);
				this.destroy();
			},
			offset: '60%'
		});
	});
}