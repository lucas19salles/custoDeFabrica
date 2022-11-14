function calcule() {
  let valorDeFabrica = parseFloat(document.getElementById("valueFaber").value);

  let percentualDist = 0;
  let percentualImpos = 0;
  let valorCarro = 0;
  percentualDist = Math.round(valorDeFabrica * 0.28);
  percentualImpos = valorDeFabrica * 0.45;
  valorCarro = valorDeFabrica + percentualDist + percentualImpos;

  alert(
    `Fabrica: ${valorDeFabrica}\nDistribuidora: ${percentualDist} \nImpostos: ${percentualImpos}\nCusto Final: ${valorCarro}`
  );
}
