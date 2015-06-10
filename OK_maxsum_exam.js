function Solve(params) {
	var N = parseInt(params[0]);
	var answer = 0;
	var arr = [];
	var j = 0;
	while (j < N) {
		arr[j] = parseInt(params[j+1]);
		j +=1;
	}
	function getMaxSum(arr) {
		var len = arr.length;
		var i;
		var currentsum = 0;		
		var result = arr[0];
		for (i = 0; i < arr.length; i++) {
			currentsum += arr[i];
			if (currentsum > result) {
				result = currentsum;
			}
			if (currentsum < 0) {
				currentsum = 0;
			}
		}
		return result;
	}
	answer = getMaxSum(arr);
	return answer;
}

var test = [8, 1, 6,-9, 4, 4,-2, 10,-1];
var test2 = [6,1,3,-5,8,7,-6];
var test3 = [9,-9,-8,-8,-7,-6,-5,-1,-7,-6];

console.log(Solve(test));
console.log(Solve(test2));
console.log(Solve(test3));