const table = document.getElementById('interactiveTable');
const colorPicker = document.getElementById('colorPicker');
const tableSize = 6;
let clickTimeout;

// Generate the table dynamically
for (let i = 0; i < tableSize; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < tableSize; j++) {
        const cell = document.createElement('td');
        const cellNumber = i * tableSize + j + 1;
        cell.textContent = cellNumber;
        cell.dataset.number = cellNumber;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Function to generate a random color
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Event listeners for cell interactions
table.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'TD' && event.target.dataset.number == 3) {
        event.target.style.backgroundColor = getRandomColor();
    }
});

table.addEventListener('click', (event) => {
    if (clickTimeout) return; // Prevent click if double-click is detected

    clickTimeout = setTimeout(() => {
        clickTimeout = null;
        if (event.target.tagName === 'TD' && event.target.dataset.number == 3) {
            event.target.style.backgroundColor = colorPicker.value;
        }
    }, 250); // Wait to ensure it's not a double-click
});

table.addEventListener('dblclick', (event) => {
    clearTimeout(clickTimeout); // Cancel the click timeout
    clickTimeout = null;

    if (event.target.tagName === 'TD' && event.target.dataset.number == 3) {
        for (let i = 0; i < tableSize; i++) {
            table.rows[i].cells[i].style.backgroundColor = getRandomColor();
        }
    }
});