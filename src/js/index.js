// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import jquery from 'jquery';
import $ from 'jquery';

$(document).ready(function () {

	$(".button-collection").on("click", function (event) {

		event.stopPropagation();

		$(".drop-menu").toggleClass("scale-drop");
	});

	$(window).on('click', () => {
		$(".drop-menu").removeClass("scale-drop");
	});

	// $(".button-collection").on("click", function (event) {
	//
	// 	event.stopPropagation();
	//
	// 	$()
	// })


	//////////////////////////////////////////////////////

	function onCategory(elem) {

		$("#trendly-watch .showcase-item").each((index, categorie) => {

			if($(categorie).data("watch-tab-id") === elem){

				$(categorie).addClass("active");

			} else {

				$(categorie).removeClass("active");
			}
		});

		$("#trendly-watch .trend-content").each((index, categorie) => {

			if ($(categorie).attr("id") === elem) {

				$(categorie).removeClass("off").addClass("on");

			} else {

				$(categorie).removeClass("on").addClass("off");
			}
		});
	}

	onCategory("watches");

	$("#trendly-watch .showcase-item").each((index, elem) => {
		
		$(elem).on("click", function() {

			const tabId = $(this).data("watch-tab-id");

			onCategory(tabId);
	
		});
	});

/////////////////////////////////////////////////

	$(".burger-button").on("click", function () {

		$(".emerge-background").css("display", "block");
		$(".emerge-bg").addClass("show-menu");
		$(".emerge-menu").addClass("scale-right");

	});

	$(".closed-menu, .emerge-bg").on("click", function () {

		$(".emerge-bg").removeClass("show-menu");
		$(".emerge-background").css("display", "none");

		$(".emerge-menu").removeClass("scale-right");

	});

	//////////////////////////////////////////////////////

	function deleteActiveClass() {

		$(".category-item").each((index, category) => {
			$(category).removeClass("active")
		});
	}

	function activeLink () {

		const windowHeight = $(window).height();
		const burgerHeigt = $(".burger-menu").height();
		const scrollDocument = $(document).scrollTop() + burgerHeigt;

		$(".category-item").each((index, category) => {

			const blockId = $(category).data("tab-block");
			const blockPosition = $(blockId).position().top;
			const categoryHeigth = $(blockId).height();
			const scrollCategoryBottom = blockPosition + categoryHeigth;

			// console.log(blockId, blockPosition, categoryHeigth, scrollCategoryBottom);

			if (blockPosition <= scrollDocument && scrollCategoryBottom >= scrollDocument) {

				deleteActiveClass();

				$(category).addClass("active");
			};


		})
	}

	activeLink();

	$(document).on("scroll", function (e) {

		activeLink ();

		// const scrollTop = $(document).scrollTop();

		// $('.bg-image img').css("margin-top", -scrollTop * 0.05);
		// $('.decor').each(function() {

		// 	const el = $(this);

		// 	let parallax = Number(el.attr('data-parallax') || 0);

		// 	el.css("margin-top", scrollTop * 0.1 * parallax);
		// 	// el.stop();
		// 	// el.animate({"margin-top": scrollTop * 0.1 * parallax}, 500 * parallax);
		// });
	
	});


	$(".category-item").each((index, category) => {

		$(category).on("click", function () {

			deleteActiveClass()

			const blockId = $(this).data("tab-block");
			const blockPosition = $(blockId).position().top;

			$(this).addClass("active");
			// $(document).scrollTop(blockPosition);

			$('html, body').animate({
				scrollTop: $(blockId).offset().top
			});
		})
	});


	// function step(timestamp) {

	// 	const scrollTop = $(window).scrollTop();
	// 	const windowHeight = $(window).height();

	// 	$('.decor').each(function(ind) {

	// 		// if (ind === 16) {


	// 			const el = $(this);

	// 			let elTop = el.offset().top;
	// 			let elBottom = elTop + el.height();
	// 			let elCenter = elTop + (elBottom - elTop) / 2;
	
	// 			if ((elTop < (scrollTop + windowHeight) && elTop > scrollTop) || (elBottom > scrollTop && elBottom < (scrollTop + windowHeight))) {
	
	// 				let parallax = Number(el.attr('data-parallax') || 0);
	
	// 				let amount = Math.unlerp(windowHeight, 0, elCenter - scrollTop);
	// 				el.targetMarginTop = 100 * parallax * amount;
	// 				// let elMarginTop = parseInt(el.css("margin-top"));
	// // console.log(555, amount, 50 * parallax * amount, Math.lerp(50 * parallax * amount, elmarginTop, 0.98));
	// 				// el.css("margin-top", scrollTop * 0.1 * parallax);
	// 				// el.css("margin-top", Math.lerp(scrollTop * 0.1 * parallax, parseInt(el.css("margin-top")), 0.98 + 0.005 * parallax));
	// 				// el.css("margin-top", Math.lerp(el.targetMarginTop, elMarginTop, 0.1));
		
	// 				// console.log(111, el.css("margin-top"));
	// 			}

	// 			el.css("margin-top", Math.lerp(el.targetMarginTop, parseInt(el.css("margin-top")), 0.98));
	// 		// }
	// 	});

	// 	window.requestAnimationFrame(step);
	// }
	
	// window.requestAnimationFrame(step);

});

Math.lerp = function(value1, value2, amount) { return value1 + (value2 - value1) * amount; };
Math.unlerp = function(value1, value2, amount) { return (amount - value1) / (value2 - value1); };
