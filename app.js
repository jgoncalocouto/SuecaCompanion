document.addEventListener('DOMContentLoaded', () => {
    let specialSum = 0;

    const specialTotal = document.getElementById('specialTotal');
    const specialPlus = document.getElementById('specialPlus');
    const specialMinus = document.getElementById('specialMinus');

    // Event listeners for special card total adjustment
    specialPlus.addEventListener('click', () => {
        specialSum++;
        updateSpecialTotal();
    });

    specialMinus.addEventListener('click', () => {
        specialSum--;
        updateSpecialTotal();
    });

    function updateSpecialTotal() {
        specialTotal.textContent = specialSum;
    }

    // Event listener for toggling card cells
    const cardCells = document.querySelectorAll('.card-cell');
    cardCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('state-1')) {
                // If state is 1, change to state 2
                cell.classList.remove('state-1');
                cell.classList.add('state-2');
                cell.textContent = '2';
            } else if (cell.classList.contains('state-2')) {
                // If state is 2, reset to empty
                cell.classList.remove('state-2');
                cell.textContent = ''; // Set cell to empty
            } else {
                // Default state, change to state 1
                cell.classList.add('state-1');
                cell.textContent = '1'; // Set cell to "1"
            }
        });
    });
});