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
var error = false;

function validacionDeCampos(){
  var nombreSorteo = document.getElementById('nombre_sorteo').value;
  var fechaInicio = document.getElementById('fecha_inicio').value;
  var fechaFin = document.getElementById('fecha_fin').value;
  var nombreParticipante = document.getElementById('nombre_participante').value;
  var telParticipante = document.getElementById('cel_participante').value;

  //Campos vacios
    //Nombre del sorteo
  if(nombreSorteo == ''){
    document.getElementById('nombre_sorteo').focus();
    return false;
  }
    //Fechas de inicio y fin
  if(fechaInicio == ''){
    document.getElementById('fecha_inicio').focus();
    return false;
  }
  if(fechaFin == ''){
    document.getElementById('fecha_fin').focus();
    return false;
  }

    //Datos de los participantes
  if(nombreParticipante == ''){
    document.getElementById('nombre_participante').focus();
    return false;
  }
  if(telParticipante == ''){
    document.getElementById('cel_participante').focus();
    return false;
  }

  //Validacion del formato del celular
  /*if(!expresionRegularCelular.test(document.getElementById('cel_participante').value)){
    alert("error");
    return false;
  }*/
  var astring = nombreSorteo+' con '+nombreParticipante+' con '+telParticipante+' como participante se realiza del dia '+fechaInicio+' hasta el '+fechaFin;
  alert(astring);
  
}