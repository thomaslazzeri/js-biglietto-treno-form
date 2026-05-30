const formBiglietto = document.getElementById('formBiglietto');
const recapChilometri = document.getElementById('recapChilometri');
const prezzoEsposto = document.getElementById('prezzoEsposto');

formBiglietto.addEventListener('submit', function (event) {
    event.preventDefault(); // event fa si che non si ricarichi la pagina del browser

    const chilometri = parseFloat(document.getElementById('chilometri').value); // value serve a prendere cosa c'è all'interno, il numero all'interno dei chilometri, quello che digita l'utente
    const anni = parseInt(document.getElementById('anni').value); // value serve a prendere cosa c'è all'interno, il numero all'interno degli anni, quello che digita l'utente

    const prezzoChilometro = 0.21;
    let prezzotot = chilometri * prezzoChilometro;

    const scontoMinorenni = 0.20;
    const scontoOver65 = 0.40;

    if (anni <= 18) {
        prezzotot = prezzotot - (prezzotot * scontoMinorenni);
    }
    else if (anni >= 65) {
        prezzotot = prezzotot - (prezzotot * scontoOver65);
    }
    recapChilometri.textContent = chilometri;
    prezzoEsposto.textContent = prezzotot.toFixed(2);
});

