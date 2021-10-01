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
