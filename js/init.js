

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	

	kshv_j_cursor();
	kshv_j_intro_tabs();
	kshv_j_kenburn_slider();
	kshv_j_modalbox_news();
	kshv_j_scrollable();
	kshv_j_nav_bg();
	kshv_j_popup();
	kshv_j_mobile_menu();
	kshv_j_down();
	kshv_j_imgtosvg();
	kshv_j_data_images();
	kshv_j_jarallax();
	kshv_j_portfolio();
	kshv_j_projects();
	kshv_j_isotope();
	kshv_j_contact_form();
	kshv_j_location();
	kshv_j_ripple();
	kshv_j_videoplayer();
	kshv_j_about_animation();
	kshv_j_animate_text();
	
	jQuery(window).on('resize',function(){
		kshv_j_isotope();
		kshv_j_modalbox_news();
	});
	
	window.addEventListener("load", function (){
		setTimeout(function(){
			jQuery('.kshv_j_preloader').addClass('loaded');
		}, 1000);
        kshv_j_isotope();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------


// -----------------------------------------------------
// ------------------    INTRO TABS    -----------------
// -----------------------------------------------------

function kshv_j_intro_tabs(){
	"use strict";
	
	var button		= jQuery('.kshv_j_intro_content .main_filter ul li a');
	var tabList		= jQuery('.kshv_j_intro_content .demo_list');
	
	button.on('click',function(){
		var element		= jQuery(this);
		var elAttr		= element.attr('data-tab');
		button.removeClass('current');
		tabList.removeClass('current');
		element.addClass('current');
		jQuery("#"+elAttr).addClass('current');
		return false;
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function kshv_j_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function kshv_j_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.kshv_j_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function kshv_j_modalbox_news(){
	
	"use strict";
	
	var modalBox	= jQuery('.kshv_j_modalbox_news');
	var list 		= jQuery('.kshv_j_news .news_list ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.details .title a,.kshv_j_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title');
		var titleHref	= element.find('.title a').html();
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = modalBox.find('.title');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});	
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function kshv_j_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.kshv_j_topbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function kshv_j_scrollable(){
	
	"use strict";
	
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.kshv_j_leftpart .inner .menu.scrollable');
	var verMenu			= jQuery('.kshv_j_leftpart .inner .menu');
	var logoHeight		= jQuery('.kshv_j_leftpart .inner .logo').outerHeight();
	var socialHeight	= jQuery('.kshv_j_leftpart .inner .bottom').outerHeight()+100;

	verMenu.css({height:H-logoHeight-socialHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-socialHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.kshv_j_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'95%'	
	});
});

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function kshv_j_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.kshv_j_animation_text_word');
	
	animateSpan.typed({
		strings: ["Designer", "Creative Graphic Designer**", "Freelancer", "Creative Web Developer", "Photographer"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function kshv_j_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function kshv_j_mobile_menu(){
	
	"use strict";
		
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.kshv_j_mobile_menu .dropdown');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	jQuery('.kshv_j_mobile_menu .dropdown .dropdown_inner ul li a').on('click',function(){
		hamburger.removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function kshv_j_down(){
	
	"use strict";
	var topbar		= jQuery('.kshv_j_topbar').outerHeight();
	jQuery('.kshv_j_arrow_wrap a').on('click',function(){
		if($('.kshv_j_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+3
			}, 800);
		}
		}else{
			if($.attr(this, 'href') !== '#'){
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 800);
			}
		}
		return false;
	});
	
	jQuery('.kshv_j_services .lets_work a').on('click',function(){
		if($('.kshv_j_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+3
			}, 800);
		}
		}else{
			if($.attr(this, 'href') !== '#'){
				$('html, body').animate({
					scrollTop: $($.attr(this, 'href')).offset().top
				}, 800);
			}
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function kshv_j_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function kshv_j_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function kshv_j_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function kshv_j_projects() {
	
	"use strict";
	
	jQuery('.kshv_j_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.kshv_j_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.kshv_j_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.kshv_j_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.kshv_j_portfolio_titles').removeClass('visible');
		});
	});
}

// filterable 

function kshv_j_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.kshv_j_portfolio .portfolio_item');
		var filter		 = jQuery('.kshv_j_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function kshv_j_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function kshv_j_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function kshv_j_location(){
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function kshv_j_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function kshv_j_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function kshv_j_about_animation(){

	"use strict";

	if ($('.parallax').length > 0) { 
	  var scene = $('.parallax').get(0);
	  var parallax = new Parallax(scene, { 
		relativeInput: true,
		onReady: function() { console.log('ready!');
	  } });
	}
}
