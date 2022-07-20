const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
let value = slider.value;

console.log(value);



function createGrid() {
    for (i = 0; i < value; i++) {
        for (j = 0; j < value; j++) { 
            const div = document.createElement('div');
            div.classList = `x-${i+1} y-${j+1}`;
            console.log(div.getAttribute('class'));
            styleDivs(div);
            container.appendChild(div);
}}}

function styleDivs(div) {
    div.style.width = `calc(400px/${value})`;
    div.style.height = `calc(400px/${value})`;
}

createGrid()