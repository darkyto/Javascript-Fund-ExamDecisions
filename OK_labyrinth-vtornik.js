function solve(args){
	var sizes = args[0].split(' ').map(Number);
	var rows = sizes[0];
	var cols = sizes[1];

	var startPositions = args[1].split(' ').map(Number);
	var row = startPositions[0];
	var col = startPositions[1];

	args = args.slice(2).map(function(line){return line.split('');});

	var sum = 0;
	var count = 0;
	var visited = [];

	var dirs = {
		u : { x: -1, y: 0},
		d : { x: +1, y: 0},
		l : { x: 0, y: -1},
		r : { x: 0, y: +1}
	};
	while(true){
		if (!inRange(row, rows) || !inRange(col, cols)) {
			return 'out '+sum;
		}
		if (visited[row +' '+ col]) {
			return 'lost '+count;
		}
		sum = sum + getPoints(row, col, cols);
		count += 1;
		visited[row +' '+ col] = true;
		var move = getValueRowCol(args, row, col);
		row += dirs[move].x;
		col += dirs[move].y;
	}
	function getValueRowCol(args, row, col) {
		return args[row][col]; 
	}
	function getPoints(row, col, cols) {  //for this task the formula is [(x * totalCols)+ y + 1] (1,2,3,4,5..)
		return row * cols + col +1;
	}
	function inRange(start, border) {
		return 0 <= start && start < border;
	}
}

var test =[
 "3 4",
 "1 3",
 "lrrd",
 "dlll",
 "rddd"
 ];
var test2 =[
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "durlddud",
 "urrrldud",
 "ulllllll"
 ];
var test3 =[
 "5 8",
 "0 0",
 "rrrrrrrd",
 "rludulrd",
 "lurlddud",
 "urrrldud",
 "ulllllll"
 ];
 console.log(solve(test));
  console.log(solve(test2));
   console.log(solve(test3));
