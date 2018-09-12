
function change1() {
	var n = document.getElementById('new');
	n.innerHTML = 'Новые блюда';
	n.classList.add('new-activ');
}
function changeOut1() {
	var n = document.getElementById('new');
	n.innerHTML = 'NEW';
	n.classList.remove('new-activ');
}

function change2() {
	var d = document.getElementById('discounts');
	d.innerHTML = 'Акции и скидки';
	d.classList.add('discounts-activ');
}
function changeOut2() {
	var d = document.getElementById('discounts');
	d.innerHTML = '%';
	d.classList.remove('discounts-activ');
}

function change3() {
	var d = document.getElementById('delivery');
	d.innerHTML = 'Доставка и оплата';
	d.classList.add('delivery-activ');
}
function changeOut3() {
	var d = document.getElementById('delivery');
	var img = new Image();
	d.innerHTML = '';
	d.classList.remove('delivery-activ');
	d.appendChild(img);
	img.src = 'img/circle-car.png';
}

// $(".toggle-menu").click(function() {
// 	$(this).toggleClass("on");
// 	$(".header-right_nav_ul").slideToggle();
// 	return false;
// 	});

function toggleMenu() {
	var tm = document.getElementById("toggle-menu");
	var menu = document.getElementById("header_nav");
	
	if (!menu.classList.contains("toggle")) {
		menu.classList.add("toggle");
	} else		
		menu.classList.remove("toggle");
		

	if (!tm.classList.contains("on")) {
		tm.classList.add("on");
	} else
		tm.classList.remove("on");
		
	 
}

$(document).ready(function(){
	$('.big-owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		smartSpeed:1500,
		navText: ["<img src='img/big-slider/arrow-red-left.png'>", "<img src='img/big-slider/arrow-red-right.png'>"]
	});
});