$(document).ready(function(){
	// isotope plugin
	// init Isotope
	var $grid = $('.iso-item').isotope({
	// options
  	});
  // filter items on button click
  	$('.custom_ul').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
  	});

  	$('.custom_ul').on( 'click', 'li', function() {
		const list = document.querySelectorAll("li");
      
            list.forEach(function(e) {
                e.addEventListener("click", function ()
                {

                    for (let x = 0; x < list.length; x++)
                    {
                        list[x].classList.remove("active");
                    }
                    this.classList.add("active");

            })})
  	});

  	// lightbox plugin
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	  })
	// counter up
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

});



