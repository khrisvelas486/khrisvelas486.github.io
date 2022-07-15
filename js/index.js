$("nav ul li a[href^='#']").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();
        // store hash
        var hash = this.hash;
        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top -90
          }, 1000, function(){
          });
     });


     $('#myModal').modalPopover(options)