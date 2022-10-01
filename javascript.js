const container = document.querySelector('#container');
const color = document.querySelector('#color');
const colorBtn = document.querySelector('#color-mode');
const rainbowBtn = document.querySelector('#rainbow-mode');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const range = document.querySelector('#range');
const rangeDisplay = document.querySelector('#rangeDisplay');

const settings = document.querySelector('.settings');
const btns = settings.getElementsByClassName("btn");

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

//Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

function changeColor() {
    container.addEventListener('mouseover', e => { 
        if (e.buttons === 1 && e.target.className === 'grid-item') {
            if (colorBtn.classList.contains('active')) {
                e.target.style.backgroundColor = colorMode();
            } else if (rainbowBtn.classList.contains('active')) {
                e.target.style.backgroundColor = rainbowColor();
            }
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
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
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

//Settings for first page load with colorMode activated
window.onload = () => {

}