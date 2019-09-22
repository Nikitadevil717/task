$('select').styler();

var slider = $('.slider_line'),
	slider_active = $('.slider_line-active'),
	point = $('.slider_circle'),
	click = false;

$(document).on( "mouseup touchend",function(){
    click = false;
    point.css('opacity', 1)
});

$(point).on( "mousedown touchstart", function(){
    click = true;
    point.css('opacity', .5)
});

// $(document).on("touchend", function() {
//     click = false;
// 	point.css('opacity', 1)
// });

// $(point).on("touchstart", function() {
//   click = true;
//   point.css('opacity', .5)
// });

// $(document).mousemove(function (e){
// 	if(click == false) return;
//        	var offset = $(slider).offset(),
// 			relativeX = (e.clientX - offset.left);
// 		if(relativeX > slider.width()) {
// 			point.css('left', slider.width());
// 			slider_active.css("width", slider.width());
// 		} else if(relativeX < 0){
// 			point.css('left', 0);
// 			slider_active.css("width", 0);
// 		} else {
// 			point.css('left', relativeX);
// 			slider_active.css("width", relativeX);
// 		}
// })

$(document).on("mousemove touchmove", function(e) {
    if(click == false) return;
       	var offset = $(slider).offset(),
       		page_cordinate = e.pageX || e.originalEvent.touches[0].pageX,
			relativeX = (page_cordinate - offset.left);
			console.log(e.pageX)
		if(relativeX > slider.width()) {
			point.css('left', slider.width());
			slider_active.css("width", slider.width());
		} else if(relativeX < 0){
			point.css('left', 0);
			slider_active.css("width", 0);
		} else {
			point.css('left', relativeX);
			slider_active.css("width", relativeX);
		}
  });

var a = 0;
$(window).scroll(function() {

	if(window.width > 767) {
		var oTop = $('.slider').offset().top - window.innerHeight / 1.2;
	} else {
		var oTop = $('.slider').offset().top - window.innerHeight / 1;
	}
	if (a == 0 && $(window).scrollTop() > oTop) {
		$(function() {
		$('.slider_line-active').animate({width: '70%'}, 1500)
		$('.slider_circle').animate({left: '70%'}, 1500)
		$('label').each(function(index, value) {
		  setTimeout(function() { 
		    $(value).click()
		  }, 150 * index);
		});
	})
   	a = 1;
 	} 
});

$('a[href^="#"]').click(function () { 
	var elementClick = $(this).attr("href"),
	destination = $(elementClick).offset().top - $('header').height();
	    $('html,body').animate( { scrollTop: destination }, 1000 );
	return false;
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 50) {
	        $("header").addClass('active')
	    } else {
	        $("header").removeClass('active')
	    };
});

$('.burger').click(function() {
	$('.burger').toggleClass('active')
	$('body').toggleClass('active')
})

$('.form_container input').on('keyup', function() {

        var $el = $(this),
        length = $el.val().length;

        if(length > 0) {
          $el.addClass('valid')
          $el.removeClass('invalid')
          message = true
        }  else {
          $el.addClass('invalid');
          $el.removeClass('valid');
          message = false
        }

    });
	
