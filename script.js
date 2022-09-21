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

function listening(color) {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            if (e.buttons == 1 || e.buttons == 3) {
                switch(color) {
                    case 'rainbow':
                        let rainbowColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
                        e.target.style.backgroundColor = rainbowColor;
                    default:
                        e.target.style.backgroundColor = color; 
                }

            }
        });
    });
    }

function resetBoard() {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.style.backgroundColor = 'transparent';
    })
    listening('black');
};

const selectSizeButton = document.querySelector('#selectSizeButton');
selectSizeButton.addEventListener(('click'), () => {
    let squareSize = prompt(`Enter the number of squares per side of a grid`, "50");
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.remove();
    });
    createSquares(squareSize);
    listening('black');
});

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener(('click'), resetBoard);

const rainbowButton = document.querySelector('#rainbowButton');
rainbowButton.addEventListener(('click'), () => listening('rainbow'));

createSquares(30);
listening('black');







