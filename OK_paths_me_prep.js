function solve(args) {
	var sizes = args[0].split(' ').map(Number);
	var rows = sizes[0];
	var cols = sizes[1];
	args = args.slice(1).map(function(line){return line.split(' ');});

  var row = 0; // start positions
  var col = 0; 
  var sum = 0; // for final resutl
  var visited = []; // mark the visited
  var upDown, leftRight;
  var dirs = {
    'd' : +1,
    'u' : -1,
    'l' : -1,
    'r' : +1
  };

  while(true) {
    if (!inRange(row, rows) || !inRange(col, cols)) {
      return 'successed with '+sum;
    }
    if (visited[row +' '+ col]) {
      return 'failed at ('+row +', '+col+')';
    }
    sum = sum + getPoints(row, col);
    
    upDown = args[row][col][0];
    leftRight = args[row][col][1];
    visited[row +' '+ col] = true;

    row += dirs[upDown];
    col += dirs[leftRight];
  }

  function inRange(start, border) {
    return 0 <= start && start < border;
  }
  function getValueRowCol(args, row, col) {
    return args[row][col]; 
  }
  function getPoints(row, col) {  //for this task the formula is 2^(rows) - cols;
    return Math.pow(2 , row) + col;
  }
}

var test  =[
  '3 5',
  'dr dl dr ur ul',
  'dr dr ul ur ur',
  'dl dr ur dl ur'   
];
var test2 = [
  '3 5',
  'dr dl dl ur ul',
  'dr dr ul ul ur',
  'dl dr ur dl ur'   
];

console.log(solve(test));
console.log(solve(test2));
