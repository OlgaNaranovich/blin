
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
$(document).ready(function(){
	$('.big-owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		smartSpeed:1500,
		navText: ["<img src='img/big-slider/arrow-red-left.png'>", "<img src='img/big-slider/arrow-red-right.png'>"]
	});

	$(".toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".header-right_nav").slideToggle();
  return false;
	});
});