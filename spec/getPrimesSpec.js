'use strict'


var getPrimes = require("../lib/getPrimes.js")
describe("Determine the prime of numbers from 0 to n", function() {
	it("should return '2, 3, 5, 7, 11, 13, 17, 19' for 20", function() {
		expect(getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
	});
	it("should return '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for 50", function(){
		expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
	});
	it("should return 'invalid input, enter a number.' for a string ", function() {
		expect(getPrimes(typeof(string))).toEqual('invalid input, enter a number.');
	});
	it("should return 'no negative input value allowed, enter a positive integer' for -1 ", function(){
		expect(getPrimes(-1)).toEqual('no negative input value allowed, enter a positive integer.');
	});
	it("should return 'not a prime numnber' for 0", function(){
		expect(getPrimes(0)).toEqual('Zero not a prime number');
	});
});