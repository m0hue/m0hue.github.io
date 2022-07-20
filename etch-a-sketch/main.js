const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const gridText = document.querySelector('.gridtext');
let value = slider.value;

slider.onchange = (e) => {
    changeValue(e.target.value);
    clearGrid();
}
slider.onmousemove = (e) => changeValue(e.target.value);


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
        }}
}

function styleDivs(div) {
    div.style.width = `calc(400px/${value})`;
    div.style.height = `calc(400px/${value})`;
}

function changeColor() {
    const pixelList = container.querySelectorAll('div');
    pixelList.forEach(element => {
        if (element.onmousedown && element.onmouseover) {
            element.style.backgroundColor = black;
        }
        console.log(element)
        
    });
}

createGrid()