const board = document.querySelector('#board');

function createSquares(squareSize) { //creates .square divs of squareSize width and height inside #board div
    squareSize = (480/squareSize);
    for (i=0; i<Math.pow((480/squareSize), 2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;`; //sets size of the .square divs
    board.appendChild(square);
};
}

function listening() {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            if (e.buttons == 1 || e.buttons == 3) {
            square.classList.add('hover');
            }
        });
    });
    }

function resetBoard() {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.classList.remove('hover');
    })
};

const selectSizeButton = document.querySelector('#selectSizeButton');
selectSizeButton.addEventListener(('click'), () => {
    let squareSize = prompt(`Enter the number of squares per side of a grid`, "50");
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.remove();
    });
    createSquares(squareSize);
    listening();
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener(('click'), resetBoard);

createSquares(30);
listening();







