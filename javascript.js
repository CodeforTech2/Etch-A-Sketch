const container = document.querySelector('#container');


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

makeRows(24, 24);

const div = document.querySelectorAll('.grid-item');

div.forEach(el => el.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "black";
}));