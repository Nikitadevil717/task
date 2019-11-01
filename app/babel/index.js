$('.slider__container').slick({
		slidesPerRow: 3,
	    rows: 2,
	    dots: true,
	    responsive: [
	    {
	      breakpoint: 1201,
	      settings: {
	        slidesPerRow: 2,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesPerRow: 1,
	        rows: 1,
	        arrow: false,
	        infinite: false
	      }
	    }
	  ]
	})

