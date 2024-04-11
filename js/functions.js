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
 * @param {string} selectedOperator - L'operatore selezionato.
 */
function handleOperation(resultDisplay, selectedOperator) {
    // Ottengo il primo operando dal display
    let firstOperand = resultDisplay.textContent;

    // Memorizzo l'operatore selezionato e il primo operando
    operator = selectedOperator;
    firstOperandValue = parseInt(firstOperand);

    // Resetto il numero visualizzato sul display
    resultDisplay.textContent = '';

    // Log dell'operazione di gestione dell'operatore
    console.log(`Operatore selezionato: ${selectedOperator}, Primo operando: ${firstOperand}`);
}

/**
 * Esegue il calcolo in base all'operatore selezionato.
 * @param {HTMLElement} resultDisplay - L'elemento del risultato.
 */
function calculate(resultDisplay) {
    // Ottengo il secondo operando dal display
    let secondOperand = resultDisplay.textContent;

    // Converto gli operandi in numeri
    let num1 = parseInt(firstOperandValue);
    let num2 = parseInt(secondOperand);

    // Eseguo il calcolo in base all'operatore selezionato
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '÷':
            // Controllo divisione per zero
            if (num2 === 0) {
                alert("Non puoi dividere per zero!");
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    // Aggiorno il display con il risultato
    resultDisplay.textContent = result;

    // Log del risultato del calcolo
    console.log(`Risultato del calcolo: ${result}`);
}
