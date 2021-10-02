//Barra de navegacion vertical
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
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

//Amigo invisible
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
//Validacion de campos
var expresionRegularCelular =  /[0-9]{9}/;// /^\d{9}$/; // /^[0-9]{9}$/;

function validacionDeCampos(){
  var nombreSorteo = document.getElementById("nombre_sorteo").value;
  var fechaInicio = document.getElementById("fecha_inicio").value;
  var fechaFin = document.getElementById("fecha_fin").value;
  var nombreParticipante = document.getElementById("nombre_participante").value;
  var telParticipante = document.getElementById("cel_participante").value;

  //El nombre del sorteo no puede estar vacio
  if(!nombreSorteo.value){
    nombreSorteo.focus();
    return false;
  }
  
  //Las fechas de inicio y fin no pueden estar vacias
  if(!fechaInicio.value){
    fechaInicio.focus();
    return false;
  }
  if(!fechaFin.value){
    fechaFin.focus();
    return false;
  }

  //Los datos del participante no pueden estar vacios
  if(!nombreParticipante.value){
    nombreParticipante.focus();
    return false;
  }
  if(!telParticipante.value){
    telParticipante.focus();
    return false;
  }

  //Validacion del formato del celular
  
  
}