// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    if (currency <= 0) {
    	return {};
    }

    let coins = {};

    let H = Math.floor(currency/50);
    currency = currency - 50 * H;
    let Q = Math.floor(currency/25);
    currency = currency - 25 * Q;
    let D = Math.floor(currency/10);
    currency = currency - 10 * D;
    let N = Math.floor(currency/5);
    currency = currency - 5 * N;
    let P = currency;

    if (H != 0) {
    	coins.H = H;
    }
   	if (Q != 0) {
    	coins.Q = Q;
    }
    if (D != 0) {
    	coins.D = D;
    }
    if (N != 0) {
    	coins.N = N;
    }
    if (P != 0) {
    	coins.P = P;
    }
   	return coins;
}