const btnInvia = document.getElementById('btnInvia');

btnInvia.addEventListener('click', function () {

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
    console.log(prezzotot.toFixed(2));
});

