/**
 * Aggiunge un numero al display.
 * @param {HTMLElement} resultDisplay - L'elemento del risultato.
 * @param {string} number - Il numero da aggiungere.
 */
function appendNumber(resultDisplay, number) {
    // Ottengo il numero attualmente visualizzato sul display
    let currentNumber = resultDisplay.textContent;

    // Concateno il numero cliccato al numero attualmente visualizzato
    currentNumber += number;

    // Aggiorno il numero visualizzato sul display
    resultDisplay.textContent = currentNumber;

    // Log del numero aggiunto al display
    console.log(`Numero aggiunto al display: ${number}`);
}
