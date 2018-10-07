function chessBoardCellColor(cell1, cell2) {

 

  return remainderOfPosition(cell1) === remainderOfPosition(cell2);

}


function remainderOfPosition(cell) {

  let first = cell[0].toLowerCase().charCodeAt(0) - 96;
  
  let second = Number(cell[1]);

 

  const remainder = (first + second) % 2;



  return remainder;


}







const cell1 = "A1";
const cell2 = "H3";


console.log(chessBoardCellColor(cell1, cell2));



