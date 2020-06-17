//variables

var cadena, cod, respuesta;
var tener = RegExp("(TIENE|TIENES|TENGO|TENÉS|TENES)");
var edad = /AÑOS/;
var cual = /CUAL/;
var nombre = RegExp("(NOMBRE|LLAMAS|)");
var clima = /CLIMA/;
var hola = /HOLA/;
var como = /COMO/;
var que = /QUE/;
var mensaje;

function evaluarEdad() {
  cadena = document.getElementById("txtPregunta").value;
  cadena = cadena.toUpperCase();

  document.getElementById("resultado1").innerHTML= tener.test(cadena);
  document.getElementById("resultado2").innerHTML= edad.test(cadena);
  document.getElementById("resultado3").innerHTML= cual.test(cadena);
  document.getElementById("resultado4").innerHTML= nombre.test(cadena);
  document.getElementById("resultado5").innerHTML= hola.test(cadena);
  document.getElementById("resultado6").innerHTML= como.test(cadena);
  document.getElementById("resultado7").innerHTML= clima.test(cadena);
  document.getElementById("resultado8").innerHTML= que.test(cadena);


  if (tener.test(cadena) && edad.test(cadena)) {
    cod = 1;

  }

  if (cual.test(cadena) && nombre.test(cadena)) {
    cod = 2;

  }
  if (hola.test(cadena)==true) {
    cod=3;
  }

  if (como.test(cadena) && nombre.test(cadena)) {
    cod=2;
  }

  if (que.test(cadena) && clima.test(cadena)) {
    cod=4;
  }


  responder();
}


function responder() {
switch (cod) {
  case 1:
    mensaje = "Tengo 19 años."
    break;
    case 2:
      mensaje = "Me llamo Emiliano"
      break;
      case 3:
        mensaje = "Hola como estás"
        break;
        case 4:
          mensaje = "clima"
          break;


  default:



}
  document.getElementById("respuesta").innerHTML = mensaje
}
