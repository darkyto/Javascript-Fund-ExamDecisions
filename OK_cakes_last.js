function solve(params) {
    var s = +params[0], c1 = +params[1], c2 = +params[2], c3 = +params[3];
    var answer = 0;
    var maxC1 = s/c1;
    var maxC2 = s/c2;
    var maxC3 = s/c3;
    var i,j,k;
    var currentSum = 0;

    for (i = 0; i <= maxC1+1; i+=1) {
    	for (j = 0; j <= maxC2+1; j+=1) {
    		for (k = 0; k <= maxC3+1; k+=1) {
    			currentSum = (i*c1)+(j*c2)+(k*c3);
    			
    			if (currentSum === s) {
    				return currentSum;
    			}
    			if (currentSum > s) {
    				break;
    			}
    			if (currentSum > answer && currentSum < s) {
    				answer = currentSum;
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