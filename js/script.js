document.addEventListener('DOMContentLoaded', function () {
    // Seleziono l'elemento del risultato
    const resultDisplay = document.getElementById('result');

    // Seleziono tutti i pulsanti numerici
    const numberButtons = document.querySelectorAll('.row.numbers button');

    // Aggiungo un event listener a ciascun pulsante numerico
    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Ottengo il numero cliccato
            let clickedNumber = button.textContent;

            // Chiamo la funzione per aggiungere il numero al display
            appendNumber(resultDisplay, clickedNumber);
        });

        // Log del numero del pulsante cliccato
        console.log(`Aggiunto event listener per il pulsante ${button.textContent}`);
    });

    // Seleziono tutti i pulsanti degli operatori
    const operatorButtons = document.querySelectorAll('.row.operators button');

    // Aggiungo un event listener a ciascun pulsante operatore
    operatorButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Ottengo l'operatore cliccato
            let selectedOperator = button.textContent;

            // Chiamo la funzione per gestire l'operazione selezionata
            handleOperation(resultDisplay, selectedOperator);
        });

        // Log dell'operatore del pulsante cliccato
        console.log(`Aggiunto event listener per il pulsante ${button.textContent}`);
    });

    // Seleziono il pulsante =
    const equalsButton = document.querySelector('.row.numbers .orange');

    // Aggiungo un event listener al pulsante =
    equalsButton.addEventListener('click', function () {
        // Ottengo il secondo operando dal display
        let secondOperand = resultDisplay.textContent;

        // Eseguo il calcolo utilizzando il primo e il secondo operando
        calculate(resultDisplay);

        // Log dell'operazione di calcolo
        console.log(`Calcolato risultato con secondo operando ${secondOperand}`);
    });

    // Seleziono il pulsante Canc
    const cancelButton = document.querySelector('.row.operators .orange');

    // Aggiungo un event listener al pulsante Canc
    cancelButton.addEventListener('click', function () {
        // Chiamo la funzione per cancellare il display
        clearDisplay(resultDisplay);

        // Log dell'operazione di cancellazione
        console.log('Cancellato il display');
    });
});

