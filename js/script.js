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
            let clickedOperator = button.textContent;

            // Chiamo la funzione per gestire l'operazione selezionata
            handleOperation(resultDisplay, clickedOperator);
        });

        // Log dell'operatore del pulsante cliccato
        console.log(`Aggiunto event listener per l'operatore ${button.textContent}`);
    });
});