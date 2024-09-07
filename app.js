document.addEventListener('DOMContentLoaded', () => {
    let specialSum = 0;
    const cardLog = [];

    const buttonSpade = document.getElementById('buttonSpade');
    const buttonHeart = document.getElementById('buttonHeart');
    const buttonDiamond = document.getElementById('buttonDiamond');
    const buttonClub = document.getElementById('buttonClub');
    const buttonLogCard = document.getElementById('buttonLogCard');
    const cardCodeInput = document.getElementById('cardCodeInput');
    const logDisplay = document.getElementById('logDisplay');

    // Function to update the log display
    function updateLogDisplay() {
        logDisplay.innerHTML = cardLog.join('<br>') + `<br><strong>Special Sum: ${specialSum}</strong>`;
    }

    // Functions to add card to log
    function addCardToLog(suit) {
        const cardCode = cardCodeInput.value.trim();
        if (cardCode) {
            cardLog.push(`${suit} ${cardCode}`);
            updateLogDisplay();
        }
    }

    // Function to add special cards to cumulative sum
    function addSpecialCard() {
        const cardCode = cardCodeInput.value.trim();
        const cardValue = parseInt(cardCode);
        if (!isNaN(cardValue)) {
            specialSum += cardValue;
            updateLogDisplay();
        }
    }

    // Button click event listeners
    buttonSpade.addEventListener('click', () => addCardToLog('♠️'));
    buttonHeart.addEventListener('click', () => addCardToLog('❤️'));
    buttonDiamond.addEventListener('click', () => addCardToLog('♦️'));
    buttonClub.addEventListener('click', () => addCardToLog('♣️'));
    buttonLogCard.addEventListener('click', addSpecialCard);
});