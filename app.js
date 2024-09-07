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
            if (cell.classList.contains('active')) {
                cell.classList.remove('active');
                cell.textContent = ''; // Set cell to empty
            } else {
                cell.classList.add('active');
                cell.textContent = '1'; // Set cell to "1"
            }
        });
    });
});
