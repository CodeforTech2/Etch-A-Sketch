const container = document.querySelector('#container');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const range = document.querySelector('#range');
const rangeDisplay = document.querySelector('#rangeDisplay');

// const display = range.value;
// rangeDisplay.innerHTML = `${display} x ${display}`;

//Function to create divs
function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div');
        // div.textContent = i +1;
        container.appendChild(div).className = 'grid-item';
    };
};

makeRows(64, 64);

const div = document.querySelectorAll('.grid-item');

// div.forEach(el => el.addEventListener('mousedown', (e) => {
//     e.target.className = 'background';
// }));
function color() {
    container.addEventListener('mouseover', e => {
        // if (e.buttons === 1) {
            // e.target.className = 'background';
            e.target.classList.add('background');
        // }
        console.log(e.type)
    });
}
color();

//Eraser function and button functionality
function eraserButton() {
    container.addEventListener('mouseover', e => {
        e.target.classList.remove('background');
    });
};

eraser.addEventListener('click', () => {
    eraserButton();
});


//Clear function and button functionality
function clearAll() {
    container.innerHTML = '';
};

clear.addEventListener('click', () => {
    clearAll();
    makeRows(64, 64)
});

// DOM range Value update in real time 
function rangeValue() {
    let value = range.value;
    rangeDisplay.innerHTML = `${value} x ${value}`;
};

range.addEventListener('input', rangeValue);