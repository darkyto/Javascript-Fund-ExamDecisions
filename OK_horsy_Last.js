function solve(args) {
	var sizes = args[0].split(' ');
	var rows = +sizes[0];
	var cols = +sizes[1];
	var field = createField(args.slice(1));

	row = rows - 1;
	col = cols - 1;
	var jumps = 0;
	var points = 0;

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
	var used = [];

	while(true) {
		// out of range  and sum
		if (row >= rows || col >=cols || row < 0 || col < 0) {
			return 'Go go Horsy! Collected '+points+' weeds';
		}

		if (used[row + ' ' + col]) {
			return 'Sadly the horse is doomed in '+jumps+' jumps ';
		}	
		points = points + getPoints(row, col); // sum the pointss
		jumps += 1; // count the total jumps
		used[row + ' ' + col] = true;

		var jum = getValueRowCol(field, row, col) ;
		row += directions[jum].x;
		col += directions[jum].y;

	}
	function getValueRowCol(args, row, col) {
		return args[row][col]; 
	}
	function createField(args) {
		var field = [];
		for (var i = 0; i < args.length; i+=1) {
			field[i] = args[i].split('').map(Number);
		}
		return field;
	}
	function getPoints(row, col) {  //for this task the formula is 2^(rows) - cols;
		return Math.pow(2 , row) - col;
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

