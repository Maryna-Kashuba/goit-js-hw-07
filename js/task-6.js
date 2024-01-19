const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const elementsAmount = +input.value;
  
  clearBoxes();

  if (elementsAmount >= 1 && elementsAmount <= 100) {
    const boxes = [];

      let size = 30;

   for (let i = 0; i < elementsAmount; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxesContainer.appendChild(box);
  boxes.push(box); 

  size += 10;
}
 
    input.value = '';
  }
}

function destroyBoxes() {
  clearBoxes();
}

function clearBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}


