function solve(args){
	var sizes = args[0].split(' ').map(Number);
	var rows = sizes[0], cols = sizes[1];
	var field = createField(args.slice(1)); // see the func createField

	var directions = {
		1 : { x : -2 , y : 1},
		2 : { x : -1 , y : 2},
		3 : { x : 1 , y : 2},
		4 : { x : 2 , y : 1},
		5 : { x : 2 , y : -1},
		6 : { x : 1 , y : -2},
		7 : { x : -1 , y : -2},
		8 : { x : -2 , y : -1}
	};
	var visited = []; // mar the visited with 'row+" "+col'

	var jumps = 0; // for final results
	var sum = 0;

	//start positions !!
	var row = rows - 1; // by task the start is alwyws at bottom edge
	var col = cols - 1;

	while(true){
		if (!inRange(row, rows) || !inRange(col, cols)) {
			return 'Go go Horsy! Collected '+sum+' weeds';
		}
		if (visited[row+' '+col] ) {
			return 'Sadly the horse is doomed in '+jumps+' jumps';
		}

		sum = sum + sumPoints(row, col);
		jumps +=1;
		visited[row+' '+col] = true;

		var currentJump = getValueRowCol(field, row, col);
		row += directions[currentJump].x;
		col += directions[currentJump].y;
	}

	function inRange(value, border) {
		return 0 <= value && value < border;
	}
	function getValueRowCol(args, row, col) {  // get each direction number!!
		return args[row][col];
	}
	function sumPoints(row, col){
		return Math.pow(2, row) - col;
	}
	function createField(args){
		var result = [];
		var len = args.length;
		for (var i = 0; i < len; i+=1) {
			result[i] = args[i].split('').map(Number); // to get each number in a cell
		}
		return result;
	}
}

var test = [
'3 5',
'54561',
'43328',
'52388',
]; 
console.log(solve(test));
var test2 = [
'3 5',
'54361',
'43326',
'52188',
];
console.log(solve(test2));