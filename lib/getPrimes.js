
module.exports = function getPrimes(n){
	let primeArray = [];
	if ( n > 0) {
		for (var i = 0; i <= n; i ++) {
			let counter = 0;
			for (let j = 1; j <=i; j++) {

				if (i % j === 0) {
					counter+= 1;
				} 
			}
			if (counter === 2) {
				primeArray.push(i);
			}
		}
		return primeArray;
		
	} else if (n === 0) {
		return ('Zero not a prime number');
	} else if (n < 0) {
		return 'no negative input value allowed, enter a positive integer.';
	} else if (n !== typeof('number')) {
		return 'invalid input, enter a number.';
	}
}
