// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

window.addEventListener("DOMContentLoaded", function () {

	const buttonCollection = document.querySelector(".button-collection");
	const dropMenu = document.querySelector(".drop-menu");
	let element;

	buttonCollection.addEventListener("click", function () {

		if (dropMenu.classList.contains("scale-drop")) {
		
			dropMenu.classList.remove("scale-drop");
		} else {
		
			dropMenu.classList.add("scale-drop");
		}
	});
	document.addEventListener("click", function (e) {

		element = e.target;

		if(buttonCollection !== element && !buttonCollection.contains(element)) {

			dropMenu.classList.remove("scale-drop");
		}

	})

	//////////////////////////////////////////////////////

	const productsCategory = document.querySelectorAll(".trend-content");
	const showcaseCategories = document.querySelectorAll(".showcase-item");
	const activeCategorie = "active";
	let selectedCategory;
	let activatedCategorie;
	let selectElement;

	function deleteActiveClass () {

		showcaseCategories.forEach((categorie) => {
			categorie.classList.remove("active")
		});

	}

	function offCategory () {

		productsCategory.forEach((categorie) => {

			categorie.classList.remove("on")

			if (!categorie.classList.contains("off")) {
				categorie.classList.add("off")
			}
		});
	}

	function onCategory (elem) {

		elem.classList.remove("off");
		elem.classList.add("on");
	}

	showcaseCategories.forEach((categorie) => categorie.addEventListener("click", function (e) {

		selectElement = this.querySelector(".category");
		selectedCategory = selectElement.innerHTML.toLowerCase();
		activatedCategorie = document.querySelector("." + selectedCategory);


		deleteActiveClass();
		offCategory();
		onCategory(activatedCategorie);

		this.classList.add("active");

	}))


});