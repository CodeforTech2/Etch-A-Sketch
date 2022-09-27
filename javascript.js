const container = document.querySelector('#container');

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        const div = document.createElement('div');
        // div.textContent = i +1;
        // div.className = 'grid-item';
        container.appendChild(div).className = 'grid-item';
    };
};

makeRows(10, 10);