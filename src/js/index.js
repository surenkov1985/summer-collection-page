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


	//////////////////////////////////////////////////////

	function onCategory(elem) {

		$(".showcase-item").each((index, categorie) => {

			if($(categorie).data("watch-tab-id") === elem){

				$(categorie).addClass("active");

			} else {

				$(categorie).removeClass("active");
			}
		});

		$(".trend-content").each((index, categorie) => {

			if ($(categorie).attr("id") === elem) {

				$(categorie).removeClass("off").addClass("on");

			} else {

				$(categorie).removeClass("on").addClass("off");
			}
		});
	}

	onCategory("watches");

	$(".showcase-item").each((index, elem) => {
		
		$(elem).on("click", function() {

			const tabId = $(this).data("watch-tab-id");

			onCategory(tabId);
	
		});
	});


});