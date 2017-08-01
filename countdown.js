"use strict";
//Countdown script for imitation limited proposition
const countdown = document.getElementsByClassName('js-countdown');
if (countdown.length != 0) {
	let countLength = countdown.length;
	let number = 83; //current quantity of product
	let numberStr = String(number);
	const minTimer = 500,
		maxTimer = 1500;
	if (!isNaN(parseInt(countdown[0].innerText))) {
		number = countdown[0].innerText.trim();
	}
	if (isStorage()) {
		let lastNumber = parseInt(localStorage.getItem("lastNumber"));
		if (!isNaN(lastNumber)) {
			number = lastNumber;
		}
	}
	function updateCounters() {
		number <= 9 ? numberStr = '0' + number : numberStr = number.toString();
		while (countLength) {
			countdown[countLength - 1].innerText = numberStr;
			countLength--;
		}
		if (isStorage()) { localStorage.setItem("lastNumber", numberStr) };
	}
	updateCounters();

	function doCountdown() {
		countLength = countdown.length;
		if (number > 5) {
			--number;
		} else {
			clearInterval(timer);
			return 5;
		}
		updateCounters();
	}

	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	//Check local storage support
	function isStorage() {
		if (window.localStorage != undefined) {
			return true;
		} else {
			return false;
		}
	}
	let timer = setInterval(doCountdown, getRandomInt(minTimer, maxTimer))
} else {
	console.warn("You have to add \"js-countdown\" class for any DOM element");
}