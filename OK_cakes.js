function solve(params) {
	var s = parseInt(params[0]);

	var prices = params.slice(1);
	prices = prices.map(Number);
	prices = prices.sort(function(a, b){return a-b;});

	var c1 = parseInt(prices[0]); 
	var c2 = parseInt(prices[1]); 
	var c3 = parseInt(prices[2]);
	var i,j,k;
	var currentValué;
	var maxValue = 0;
	var maxC1, maxC2, maxC3;

		maxC1 = s/c1; // to decrease the number ofloops for each : maxPossibleLoops = sum / value
		maxC2 = s/c2;
		maxC3 = s/c3;
		for (i = 0; i <= maxC1; i+=1) {
			for (j = 0; j <= maxC2; j+=1) {
				for (k = 0; k <= maxC3; k+=1) {
					currentValue = c1 * i + c2 * j + c3 * k;
             		// Check if currentValue is a valid sum
             		if (currentValue > s) {
             			break;
             		}
             		if (currentValue > maxValue && currentValue <= s) {
		                // Assign currentValue to maxValue
		                maxValue = currentValue;
		            }
		        }
		    }
		}
		return maxValue;
	}

var test = [110, 13, 15, 17];
console.log(solve(test));
var test2 = [20, 11, 200, 300];
console.log(solve(test2));
var test3 = [110, 19, 29, 39];
console.log(solve(test3));
