"use strict";
//Countdown script for imitation limited proposition
const countdown = document.getElementsByClassName('countdown');
let countLength = countdown.length;
let number = 83; //current quantity of product
let numberStr = String(number);
const minTimer = 5000,
	maxTimer = 15000;
if (!isNaN(parseInt(countdown[0].innerText))) {
	number = countdown[0].innerText.trim();
}
if (isStorage()) {
	let lastNumber = parseInt(localStorage.getItem("lastNumber"));
	if (!isNaN(lastNumber)) {
		number = lastNumber;
	}
}
function doCountdown(){
	countLength = countdown.length;
	number>5?--number:5;
	number<=9?numberStr='0'+number:numberStr=String(number);
	if (isStorage()) {localStorage.setItem("lastNumber", numberStr)}
	while(countLength){
		countdown[countLength-1].innerText = numberStr;
		countLength--;
	}
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