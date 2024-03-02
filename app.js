window.addEventListener('DOMContentLoaded', () => {

  const board = document.querySelector('#board');
  const SQUARES_NUMBER = 405;
  const colors = ['#fa3802', '#facd02', '#02fa17', '#bcfa02', '#02d9fa', '#7a02fa', '#fa02f2', '#fa026d'];

  for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // square.innerHTML = `${i}`;
    square.addEventListener('mouseover', () => {
      setColor(square);
      
  
    });

    square.addEventListener('mouseleave', () => {
      removeColor(square);

    });

    square.addEventListener('click', () => {
      setColor(square);
      if (square.innerHTML) {
        square.innerHTML = '';
      } else {
        square.innerHTML = `${i}`;
      }
    });

    board.append(square);
  }



function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 400px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

});