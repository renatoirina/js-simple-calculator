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

/**
 * Gestisce l'operazione selezionata.
 * @param {HTMLElement} resultDisplay - L'elemento del risultato.
 * @param {string} operator - L'operatore selezionato.
 */
function handleOperation(resultDisplay, operator) {
    // Memorizza l'operatore selezionato
    console.log('Operatore selezionato:', operator);

    // Memorizza il primo operando
    const firstOperand = resultDisplay.textContent;

    // Resetta il numero visualizzato sul display
    resultDisplay.textContent = '0';

    // Log del primo operando
    console.log('Primo operando:', firstOperand);
}
