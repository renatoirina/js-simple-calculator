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
    firstOperandValue = parseFloat(firstOperand);

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
    let num1 = parseFloat(firstOperandValue);
    let num2 = parseFloat(secondOperand);

    // Log dei valori dei numeri
    console.log('num1:', num1);
    console.log('num2:', num2);

    // Eseguo il calcolo in base all'operatore selezionato
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '×':
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

    // Log del risultato del calcolo
    console.log('Risultato:', result);

    // Aggiorno il display con il risultato
    resultDisplay.textContent = result;

    // Resetto le variabili globali
    firstOperandValue = result.toString();
    operator = '';

    // Log del risultato del calcolo
    console.log(`Risultato del calcolo: ${result}`);
}

/**
 * Cancella il display.
 * @param {HTMLElement} resultDisplay - L'elemento del risultato.
 */
function clearDisplay(resultDisplay) {
    // Resetta il numero visualizzato sul display
    resultDisplay.textContent = '0';
}
