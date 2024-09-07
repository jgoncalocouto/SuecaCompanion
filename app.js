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

    // Event listener for card logging
    const cardCells = document.querySelectorAll('.card-cell');
    cardCells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '') {
                cell.textContent = '1';
            } else {
                const count = parseInt(cell.textContent);
                cell.textContent = count + 1;
            }
        });
    });
});