

// To continue, please consult the code grid in the manual.  Enter the code at row 3010, column 3019.

function getNextCode(prev) {
  return prev * 252533 % 33554393;
}

var codesArr = [20151125];
for (var i = 0; i < 10; i++) {
  codesArr.push(getNextCode(codesArr[i]));
}

console.log(codesArr);

var Cell = function (x, y, val) {
  this.x = x;
  this.y = y;
  this.val = val;
}

var cellsArr = [];
cellsArr.push(new Cell(1, 1, 1));

