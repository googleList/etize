/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Metize - Startup & SaaS Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {


		/* ==================================================
		    # Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();

 

		/* ==================================================
		    # Scrolla active
		===============================================*/
		$('.animate').scrolla({
			mobile: false,
		});

 


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
			$('.timer').countTo();
		}, {
			accY: -100
		});


 

 

		/* ==================================================
		    _Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 130,
						thickness: 13,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#2667FF', '#00bfff']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});

		}

		animateElements();
		$(window).scroll(animateElements);

   

		/* ==================================================
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							phone: $('#phone').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});


		/* ==================================================
		    Services Hover JS
		================================================== */
		const link = document.querySelectorAll('.service-hover-item');
		const linkHoverReveal = document.querySelectorAll('.service-hover-wrapper');
		const linkImages = document.querySelectorAll('.service-hover-placeholder');
		for (let i = 0; i < link.length; i++) {
			link[i].addEventListener('mousemove', (e) => {
				linkHoverReveal[i].style.opacity = 1;
				linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(-3deg)`;
				linkImages[i].style.transform = 'scale(1, 1)';
				linkHoverReveal[i].style.left = e.clientX + "px";
			})
			link[i].addEventListener('mouseleave', (e) => {
				linkHoverReveal[i].style.opacity = 0;
				linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(5deg)`;
				linkImages[i].style.transform = 'scale(0.8, 0.8)';
			})
		}


		/* ==================================================
		    GSAP animation
		================================================== */

		// gsap.set(".animation-shape", {
		// 	yPercent: 10
		// });

		// gsap.to(".animation-shape", {
		// 	yPercent: -200,
		// 	ease: "none",
		// 	scrollTrigger: {
		// 		trigger: ".animation-shape",
		// 		scrub: 1
		// 	},
		// });


		// // Start Text Animation
		// const animEls = document.querySelectorAll('.animation-text');
		// animEls.forEach(el => {
		// 	var splitEl = new SplitText(el, {
		// 		type: "lines, words",
		// 		linesClass: "line"
		// 	});
		// 	var splitTl = gsap.timeline({
		// 		duration: .35,
		// 		ease: 'power4',
		// 		scrollTrigger: {
		// 			trigger: el,
		// 			start: 'top 90%'
		// 		}
		// 	});

		// 	splitTl.from(splitEl.words, {
		// 		yPercent: "100",
		// 		stagger: 0.025,
		// 	});

		// });

		// let animGSAP = new SplitText('.anim-gsap', {
		// 	type: 'lines,words',
		// 	linesClass: 'lineclass'
		// });
		// gsap.from(animGSAP.words, {
		// 	duration: 0.4,
		// 	opacity: 0,
		// 	y: 50,
		// 	rotation: 45,
		// 	stagger: 0.10
		// });
		// End Text Animation

	}); // end document ready function



	/* ==================================================
        Preloader Init
     ===============================================*/
	function loader() {
		$(window).on('load', function() {
			$('#metize-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#metize-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function() {
					$(this).remove();
				});
			}
		});
	}
	loader();


})(jQuery); // End jQuery