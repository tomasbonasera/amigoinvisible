//Barra de navegacion vertical
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

//Datepicker de fecha de inicio
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker_fecha_inicio');
    var instances = M.Datepicker.init(elems);
  });
//Datepicker de fecha de finalizacion
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker_fecha_fin');
    var instances = M.Datepicker.init(elems);
  });

//Sorteo rapido
function aleatorio(minimo,maximo){
  return Math.round(Math.random()*(maximo-minimo)+parseInt(minimo));
}

function hacerSorteo(){
  var minimo = document.getElementById("numero_inicio").value;
  var maximo = document.getElementById("numero_fin").value;

  var ganador = aleatorio(minimo,maximo);
  document.getElementById('numero_ganador').value = 'El número ganador es: '+ganador;
}