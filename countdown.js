"use strict";
//Countdown script for imitation limited proposition
const countdown = document.getElementsByClassName('js-countdown');

if (countdown.length != 0) {
	let countLength = countdown.length;
	let number = 83; //current quantity of product
	let order = 2; //default length of product number string. For 06 products order=2; for 206 products order=3
	let numberStr = String(number);
	const minTimer = 1000,
		maxTimer = 3000;
	if (!isNaN(parseInt(countdown[0].innerText)) && parseInt(countdown[0].innerText)>5) {
		number = countdown[0].innerText.trim();
	}
	if (isStorage()) {
		let lastNumber = parseInt(localStorage.getItem("lastNumber"));
		if (!isNaN(lastNumber)) {
			number = lastNumber;
		}
	}
	//pretify number of products. Add zeros before number.
	function prettyNumber(number, order){
		while(number.toString().length < order){
			number = '0' + number;
		}
		return number.toString();
	}
	//function for updating counters
	function updateCounters() {
		while (countLength) {
			let countDigits = countdown[countLength - 1].querySelectorAll('.js-count-digit');
			let countDigitsLength = countDigits.length;
			if (countDigitsLength == 0) {
				numberStr = prettyNumber(number, 2)
				countdown[countLength - 1].innerText = numberStr;
			} else {
				numberStr = prettyNumber(number, countDigitsLength);
				for(let i=0; i < countDigitsLength; i++){
					countDigits[i].innerText = numberStr[i];
				}
			}
			countLength--;
		}
		if (isStorage()) { localStorage.setItem("lastNumber", numberStr) };
	}
	updateCounters();
	//do coundown iteration
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
	//get random int from custom interval
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