function solve(params) {
    var s = parseInt(params);
    var count = 0;
    var i,
    	j,
    	k;
    var maxI, maxJ, maxK;
    maxI = s/3;
    maxK = s/10;
    maxJ = s/4;
    for (i = 0; i <= maxI; i+=1) {
    	for (j = 0; j <= maxI; j+=1) {
    		for (k = 0; k <= maxJ; k+=1) {
    			var currentSum = (i * 3) + (j * 10) + (k * 4);

    			if (currentSum > s) {
    				break;
    			}
    			if (currentSum === s) {
    				count += 1;
    			}
    		}
    	}
    }
    return count;
}

var test = [7, 10, 40];
for (var i = 0; i < test.length; i++) {
    console.log(solve(test[i]));
}