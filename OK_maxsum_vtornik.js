function solve(args){
	var size = +args[0];
	var arr = args.slice(1).map(Number);

	function getMaxSequence(arr){
		var len = arr.length;
		var i;
		var currentSum = 0;
		var result = arr[0];
		for (i = 0; i < len; i+=1) {
			currentSum += arr[i];
			if (currentSum > result) {
				result = currentSum;
			}
			if (currentSum < 0) {
				currentSum = 0;
			}
		}
		return result;
	}

	var answer = getMaxSequence(arr);
	return answer;
}


var test = [8, 1, 6,-9, 4, 4,-2, 10,-1];
var test2 = [6,1,3,-5,8,7,-6];
var test3 = [9,-9,-8,-8,-7,-6,-5,-1,-7,-6];

console.log(solve(test));
console.log(solve(test2));
console.log(solve(test3));