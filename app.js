document.addEventListener('DOMContentLoaded', () => {
    let specialSum = 0;
    const specialTotal = document.getElementById('specialTotal');
    const specialPlus = document.getElementById('specialPlus');
    const specialMinus = document.getElementById('specialMinus');
    const team1PointsEl = document.getElementById('team1Points');
    const team2PointsEl = document.getElementById('team2Points');

    let team1Points = 0;
    let team2Points = 0;

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

    // Define the points for each card
    const cardPoints = {
        'A': 11,
        '7': 10,
        'K': 4,
        'J': 3,
        'Q': 2
    };

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

            // Update team points after each click
            updateTeamPoints();
        });
    });

    function updateTeamPoints() {
        team1Points = 0;
        team2Points = 0;

        cardCells.forEach(cell => {
            const cardType = cell.parentElement.querySelector('th').textContent.trim();
            const cardValue = cell.cellIndex > 0 ? document.querySelector('thead th:nth-child(' + (cell.cellIndex + 1) + ')').textContent : '';

            if (cardValue && cell.textContent) {
                const pointValue = cardPoints[cardValue] || 0;
                if (cell.textContent === '1') {
                    team1Points += pointValue;
                } else if (cell.textContent === '2') {
                    team2Points += pointValue;
                }
            }
        });

        team1PointsEl.textContent = team1Points;
        team2PointsEl.textContent = team2Points;
    }
});