const grid = document.querySelector('#grid');
const clearBtn = document.querySelector('#clear-grid');

const defaultSquareAmount = 16;

clearBtn.addEventListener('click', clearGrid);

setGrid(defaultSquareAmount);

function setGrid(squares) {
  const gridArea = squares * squares;

  // Define grid's columns and rows
  grid.style.gridTemplateColumns = `repeat(${squares}, 1fr`;
  grid.style.gridTemplateRows = `repeat(${squares}, 1fr`;

  // Add squares inside the grid
  for (let i = 0; i < gridArea; i++) {
    const cell = document.createElement('div');

    cell.addEventListener('mouseover', () => {
      cell.classList.add('activated');
    });

    cell.addEventListener('mouseout', () => {
      setTimeout(() => {
        cell.classList.remove('activated');
      }, 1000);
    });

    grid.appendChild(cell);
  }
}

function clearGrid() {
  let userSquareAmount;

  do {
    userSquareAmount = prompt('How many squares per side would you like to have? (Must be a number between 1 and 100)');
  } while (userSquareAmount < 1 || userSquareAmount > 100);

  grid.innerHTML = '';

  setGrid(userSquareAmount);
}

// Function that generates a random number between 0 and 255 for a color amount, then returns that number
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// Function that generates a random RGB color
function randomColor() {
  return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
}