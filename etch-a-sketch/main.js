const container = document.querySelector('.container');
const sliderInput = document.querySelector('.slider');
const clearButton = document.querySelector('.clear');
const gridText = document.querySelector('.gridtext');
const colorInput = document.querySelector('.color');

let mouseDown = false;
let value = sliderInput.value;
let color = colorInput.value;

container.addEventListener('mousedown', () => mouseDown=true);
container.addEventListener('mouseup', () => mouseDown=false);
container.addEventListener('click', changePixel);

sliderInput.onchange = (e) => {
    changeValue(e.target.value);
    clearGrid();
}
sliderInput.onmousemove = (e) => changeValue(e.target.value);
clearButton.onclick = clearGrid;
colorInput.onchange = (e) => color = e.target.value;

function changeValue(newValue) {
    value = newValue;
    gridText.textContent = `${value} x ${value}`;
}

function clearGrid() {
    container.innerHTML = '';
    createGrid();
}

function createGrid() {
    for (i = 0; i < value; i++) {
        for (j = 0; j < value; j++) { 
            const div = document.createElement('div');
            div.id = 'pixel';
            styleDivs(div);
            container.appendChild(div);
            div.addEventListener('mouseenter',changePixel);
        }}
    changePixel();
}

function styleDivs(div) {
    div.style.width = `calc(400px/${value})`;
    div.style.height = `calc(400px/${value})`;
    div.addEventListener('dragstart', (e) => {
        e.preventDefault()
      })
      
    div.addEventListener('drop', (e) => {
        e.preventDefault()
})}

function changePixel(e) {
    if (mouseDown === true || e.type === 'click') {
        e.target.style.backgroundColor = `${color}`;
    }
}


createGrid()