"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let D = (b ** 2) - 4 * a * c;
	if (D < 0) {
		return arr;
	} else if (D === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		let firstRoot = (-b + Math.sqrt(D)) / (2 * a);
		let secondRoot = (-b - Math.sqrt(D)) / (2 * a);
		arr.push(firstRoot, secondRoot);
		return arr;
	}
}
console.log(solveEquation(1, 5, 3))

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = (percent / 100) / 12;
	let creditBody = amount - contribution;
	let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)))
	let totalAmount = monthlyPayment * countMonths;
	return Math.round(totalAmount * 100) / 100;
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36))
