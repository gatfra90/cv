/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: false,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

				}

		// Main Sections: Four.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#four').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

			// Avatar img.
				$window.on('load', function() {

					$('#avatar').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

	});

  $(".typed1").typed({
    strings: ["many opportunities!", "technology, faster and better!", "quality, performace!", "efficiency and efficacy!", "process automation!", "growth chances!", "the future!^5000"],
    typeSpeed: 25,
    backDelay: 2000,
    // loop
    loop: true
  });


	var ml = {};
	ml.opacityIn = [0,1];
	ml.scaleIn = [0.2, 1];
	ml.scaleOut = 1;
	ml.durationIn = 800;
	ml.durationOut = 600;
	ml.delay = 1000;

	anime.timeline({loop: true})
	.add({
		targets: '.anime_txt_1 .letters-1',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-1',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_1 .letters-2',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-2',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_1 .letters-3',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-3',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_1 .letters-4',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-4',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_1 .letters-5',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-5',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_1 .letters-6',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_1 .letters-6',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.ml',
		opacity: 0,
		duration: 1000,
		delay: 1000
	});
	
	anime.timeline({loop: true})
	.add({
		targets: '.anime_txt_2 .letters-1',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-1',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-2',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-2',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-3',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-3',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-4',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-4',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-5',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-5',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-6',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-6',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-7',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-7',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-8',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-8',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-9',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-9',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-10',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-10',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-11',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-11',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_2 .letters-12',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_2 .letters-12',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.ml',
		opacity: 0,
		duration: 1000,
		delay: 1000
	});

	anime.timeline({loop: true})
	.add({
		targets: '.anime_txt_3 .letters-1',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-1',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_3 .letters-2',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-2',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_3 .letters-3',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-3',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_3 .letters-4',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-4',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_3 .letters-5',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-5',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.anime_txt_3 .letters-6',
		opacity: ml.opacityIn,
		scale: ml.scaleIn,
		duration: ml.durationIn
	}).add({
		targets: '.anime_txt_3 .letters-6',
		opacity: 0,
		scale: ml.scaleOut,
		duration: ml.durationOut,
		easing: "easeInExpo",
		delay: ml.delay
	}).add({
		targets: '.ml',
		opacity: 0,
		duration: 1000,
		delay: 1000
	});


  $(document).on('click', '.scrollable', function(event){
    event.preventDefault();
    $('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top}, 500);
	});

	$("#cel_contact").click(function(){
		$("#cel_contact").empty();
		$("#cel_contact").text("340 069 0793");
	});
	$("#email_contact").click(function(){
		var email = "gatto.francesco.90";
		var provider = "gmail.com";
		$("#email_contact").empty();
		$("#email_contact").text(email + "@" + provider);
	});

	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	function checkEmailFields(){
		var ok = true;
		$(".required").each(function(index){
		  if(this.value == ''){
				ok = false;
				($('#'+$(this).attr("id"))).css({"border" : "2px solid red"});
			}
			else{
				($('#'+$(this).attr("id"))).css({"border" : "none"});
			}
		});
		return ok;
	}

	$("#send_mail").click(function(){
		if(checkEmailFields()){
			$("#send_mail_msg").text("");
			var name = $("#name").val();
			var email = $("#email").val();
			var msg = $("#msg").val();
			if(!validateEmail(email)){
				$("#email").css({"border" : "2px solid red"});
				$("#send_mail_msg").css({"color" : "red;"});
			  $("#send_mail_msg").text("Hey! Email seems to be not right...");
			  return;
			}
			else{
				$("#email").css({"border" : "none"});
			  $("#send_mail_msg").text("");
			  $.ajax({
				  url: "assets/php/send_email.php",
				  type: "POST",
				  data: { n:name, e:email, m:msg },
				  success: function(res) {
				  	if(res){
				  		$("#send_mail_msg").css({"color" : "green;"});
				  		$("#send_mail_msg").text("Email sent! Thanks for writing me.");
							$("#name").val("");
							$("#email").val("");
							$("#msg").val("");
				  	}
				  	else{
				  		$("#send_mail_msg").css({"color" : "red;"});
				  		$("#send_mail_msg").text("Error! Email sent, check it out :/");
				  	}
				  },
				  failure: function() {
				  	$("#send_mail_msg").css({"color" : "red;"});
				  	$("#send_mail_msg").text("Error! Email sent, check it out :/");
				  }
				});
			}
		}
		else{
			return;
		}
	});

})(jQuery);