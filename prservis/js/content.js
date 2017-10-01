var navMobiles = document.querySelector('.shop-nav__item--mobiles');
var navTablets = document.querySelector('.shop-nav__item--tablets');
var navNotebooks = document.querySelector('.shop-nav__item--notebooks');
var mobilesLay = document.querySelector('.catalog-lay--mobiles');
var tabletsLay = document.querySelector('.catalog-lay--tablets');
var notebooksLay = document.querySelector('.catalog-lay--notebooks');
var navToggle = document.querySelector('.shop-nav__toggle');
var goodsMobiles = document.querySelector('.goods--mobiles');
var goodsTablets = document.querySelector('.goods--tablets');
var goodsNotebooks = document.querySelector('.goods--notebooks');

navToggle.addEventListener('click', function(event) {
	event.preventDefault;
	if (goodsMobiles.classList.contains('goods--linear')) {
		goodsMobiles.classList.remove('goods--linear')
	} else {
		goodsMobiles.classList.add('goods--linear')
	};

	if (goodsTablets.classList.contains('goods--linear')) {
		goodsTablets.classList.remove('goods--linear')
	} else {
		goodsTablets.classList.add('goods--linear')
	};

	if (goodsNotebooks.classList.contains('goods--linear')) {
		goodsNotebooks.classList.remove('goods--linear')
	} else {
		goodsNotebooks.classList.add('goods--linear')
	};
});

navMobiles.addEventListener('click', function(event) {
	if (navMobiles.classList.contains('shop-nav__item--active')) {
		event.preventDefault();
	} else {
		event.preventDefault();
		navMobiles.classList.add('shop-nav__item--active');
		navTablets.classList.remove('shop-nav__item--active');
		navNotebooks.classList.remove('shop-nav__item--active');

		mobilesLay.classList.add('catalog-lay--active');
		tabletsLay.classList.remove('catalog-lay--active');
		notebooksLay.classList.remove('catalog-lay--active');
	}
});

navTablets.addEventListener('click', function(event) {
	if (navTablets.classList.contains('shop-nav__item--active')) {
		event.preventDefault();
	} else {
		event.preventDefault();
		navTablets.classList.add('shop-nav__item--active');
		navMobiles.classList.remove('shop-nav__item--active');
		navNotebooks.classList.remove('shop-nav__item--active');

		tabletsLay.classList.add('catalog-lay--active');
		mobilesLay.classList.remove('catalog-lay--active');
		notebooksLay.classList.remove('catalog-lay--active');
	}
});

navNotebooks.addEventListener('click', function(event) {
	if (navNotebooks.classList.contains('shop-nav__item--active')) {
		event.preventDefault();
	} else {
		event.preventDefault();
		navNotebooks.classList.add('shop-nav__item--active');
		navTablets.classList.remove('shop-nav__item--active');
		navMobiles.classList.remove('shop-nav__item--active');

		notebooksLay.classList.add('catalog-lay--active');
		tabletsLay.classList.remove('catalog-lay--active');
		mobilesLay.classList.remove('catalog-lay--active');
	}
});