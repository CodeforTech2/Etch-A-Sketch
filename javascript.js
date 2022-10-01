const container = document.querySelector('#container');
const color = document.querySelector('#color');
const colorBtn = document.querySelector('#color-mode');
const rainbowBtn = document.querySelector('#rainbow-mode');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const range = document.querySelector('#range');
const rangeDisplay = document.querySelector('#rangeDisplay');


//Function to create div's
function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div');
        // div.textContent = i +1;
        container.appendChild(div).className = 'grid-item';
    };
};
makeRows(33, 33);

//Update the container rows from the range value
function updateRows() {
    makeRows(range.value, range.value);
};

function changeColor() {
    container.addEventListener('mouseover', e => { 
        if (e.buttons === 1 && e.target.className === 'grid-item') {
            e.target.style.backgroundColor = rainbowColor();
        };
    });
};
changeColor();

//Function to get the color from input
function colorMode() {
    return color.value;
};
color.addEventListener('input', colorMode);

//Select color mode when click color btn, with input color selected
colorBtn.addEventListener('click', () => {
    changeColor();
});

//Function that generate a random rgb color
function rainbowColor() {
    const red = Math.floor((Math.random() * 255) + 1);
    const green = Math.floor((Math.random() * 255) + 1);
    const blue = Math.floor((Math.random() * 255) + 1);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
};
rainbowBtn.addEventListener('click', () => {
    changeColor();
});

//Eraser function and button functionality
function eraserButton() {
    container.addEventListener('mouseover', e => {
        if (e.buttons === 1 && e.target.className === 'grid-item') {
            e.target.style.backgroundColor = 'white';
        };
    });
};
eraser.addEventListener('click', () => {
    eraserButton();
});


//Clear function and button functionality
function clearAll() {
    container.innerHTML = '';
    changeColor();
};
clear.addEventListener('click', () => {
    clearAll();
    updateRows();
});

// DOM range Value update in real time 
function rangeValue() {
    let value = range.value;
    rangeDisplay.innerHTML = `${value} x ${value}`;
    container.innerHTML = '';
    updateRows();
};
range.addEventListener('input', rangeValue);