function solve(params) {
	var sizes = params[0].split(' ');
	var rows = parseInt(sizes[0]);
	var cols = parseInt(sizes[1]);

	var positions = params[1].split(' ');
	var x = parseInt(positions[0]);
	var y = parseInt(positions[1]);
	
	var matrix = params.slice(2);
	var totalSum = 0;
	var cellCount = 0;
	var visitedCels = [];
	var directions = {
		l : { x : 0 , y : -1},
		r : { x : 0 , y : +1},
		u : { x : -1 , y : 0},
		d : { x : +1 , y : 0}
	};
	function getMatrixValue(x, y, cols) {
		return x * cols + y + 1;
	}
	function inRange(start, border) {
		return 0 <= start && start < border;
	}
	while(true) {
		// check in range
		if (!inRange(x, rows) || !inRange(y, cols)) {
			return 'out '+ totalSum;
		}
		var cellValue = getMatrixValue(x, y, cols);
		// check visited
		if (visitedCels[cellValue]) {
			return 'lost '+cellCount;
		}
		totalSum += cellValue;
		cellCount+=1;
		visitedCels[cellValue] = true;
		var dir = matrix[x][y];
		x += directions[dir].x;
		y += directions[dir].y;

	}
}


var test =[
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"];
 console.log(solve(test));
