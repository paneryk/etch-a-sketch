const board = document.querySelector('#board');

function createSquares(squareSize) { //creates .square divs of squareSize width and height inside #board div
    for (i=0; i<Math.pow((480/squareSize), 2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;`; //sets size of the .square divs
    board.appendChild(square);
};
}

createSquares(16); //creates squares of 16px size

const squaresAll = document.querySelectorAll('div.square');
squaresAll.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        if (e.buttons == 1) {
        square.classList.add('hover');
        }
    })
})



