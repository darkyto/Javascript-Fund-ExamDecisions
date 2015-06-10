function solve(args){
	var sum = +args[0];
	var c1 = +args[1], c2 = +args[2], c3 = +args[3];
	var currentSpendSum, i, j, k;
	var maxC1 = sum/c1, maxC2 = sum/c2, maxC3 = sum/c3;
	var answer = 0;

	for (i = 0; i <= maxC1+1; i+=1) {
		for (j = 0; j <= maxC2+1; j+=1) {
			for (k = 0; k <= maxC3+1; k+=1) {
				currentSpendSum = (i*c1)+(j*c2)+(k*c3);
				if (currentSpendSum > sum) {
					break;
				}
				if (answer < currentSpendSum && currentSpendSum <= sum) {
					answer = currentSpendSum;
				}
			}
		}
	}
	return answer;
}

var test = [110, 13, 15, 17];
console.log(solve(test));
var test2 = [20, 11, 200, 300];
console.log(solve(test2));
var test3 = [110, 19, 29, 39];
console.log(solve(test3));