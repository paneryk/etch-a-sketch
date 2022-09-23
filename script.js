const board = document.querySelector('#board');
const controls = document.querySelector('.controls');
const colorSelection = document.querySelector('input');
let color = colorSelection.value;
let rainbow = false;

controls.addEventListener(('click'), function(e) {  //adding eventListener to the control buttons 
    const tgt = e.target;
    if (tgt.matches('#selectSizeButton')) selectSize();
    else if (tgt.matches('#resetButton')) resetBoard();
    else if (tgt.matches('#rainbowButton')) { rainbow = true; }
})

board.addEventListener('mouseover', function(e) {  //adding eventListener to the square divs (listening to entire board div)
    if (e.buttons === 1 || e.buttons === 3) {
        let tgt = e.target;
        switch(tgt.style.backgroundColor) { 
        case 'transparent':
        color = rainbow ? "#" + ((1<<24)*Math.random() | 0).toString(16) : color; //ternary expression checks if rainbow is true
        tgt.style.backgroundColor = color;
        break;
        default:
        let RegExp = /\(([^)]+)\)/;
        let RegExpMatch = RegExp.exec(tgt.style.filter); //get the raw current brightness value
        tgt.style.filter = `brightness(${RegExpMatch[1]-0.2})`;
        }      
}
});

colorSelection.addEventListener(('input'), function() {
    rainbow = false;
    color = colorSelection.value;
})

function createSquares(squareSize) {  //function creating a grid of square.divs of a demanded size
    squareSize = (480/squareSize);
    for (i=0; i<Math.pow((480/squareSize), 2); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;
        background-color: transparent;
        filter: brightness(1);`; 
    board.appendChild(square);
};
}

function resetBoard() {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.style.backgroundColor = 'transparent';
        square.style.filter = 'brightness(1)';
    })
}

function selectSize() {
    let squareSize = prompt(`Enter the number of squares per side of a grid (max. 40)`, "25");
    if (squareSize > 40) alert('Maximum number is 40, try again');
    else {
    const squaresAll = document.querySelectorAll('div.square');
    squaresAll.forEach((square) => {
        square.remove();
    });
    createSquares(squareSize);
}
}

window.onload = createSquares(10);





