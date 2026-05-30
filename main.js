const btnInvia = document.getElementById('btnInvia');

btnInvia.addEventListener('click', function () {

    const chilometri = parseFloat(document.getElementById('chilometri').value);
    const anni = parseInt(document.getElementById('anni').value);

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