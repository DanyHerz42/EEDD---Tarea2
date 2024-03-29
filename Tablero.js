import Jugador from "./Jugador.js";
import Dado from "./Dado.js";

export default class Tablero {
  constructor() {
    this._casillas = 100;
  }
  hacerJuego() {
    let jugador1 = new Jugador("Paco");
    let jugador2 = new Jugador("Jones");
    let dado = new Dado();
    let i = 0;
    while (jugador1.posicion <= this._casillas && jugador2.posicion <= this._casillas) {
      jugador1.moverse(dado.lanzarDado());
      jugador1.moverse(this.validarSerpientes(jugador1.posicion, jugador1.nombre));
      jugador1.moverse(this.validarEscaleras(jugador1.posicion, jugador1.nombre));

      jugador2.moverse(dado.lanzarDado());
      jugador2.moverse(this.validarSerpientes(jugador2.posicion, jugador2.nombre));
      jugador1.moverse(this.validarEscaleras(jugador2.posicion, jugador2.nombre));
      i++;
      console.log(`Tiro: ${i}, Jugador ${jugador1.nombre} posicion: ${jugador1.posicion} || Jugador ${jugador2.nombre} posicion: ${jugador2.posicion} `)
    }
    if (jugador1.posicion === jugador2.posicion) {
      console.log("Empate");
    } else if (jugador1.posicion < jugador2.posicion) {
      console.log("Gano jugador 2")
    } else {
      console.log("Gano jugador 1")
    }
  }
  validarEscaleras(posicion, jugador) {
    switch (posicion) {
      case 5:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 19;
        break;
      case 32:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 28;
        break;
      case 12:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 5;
        break;
      case 57:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 12;
        break;
      case 70:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 8;
        break;
      case 20:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 15;
        break;
      case 80:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 17;
        break;
      case 47:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return 40;
        break;
      default:
        return 0;
        break;
    }
  }
  validarSerpientes(posicion, jugador) {
    switch (posicion) {
      case 13:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -7;
        break;
      case 25:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -22;
        break;
      case 37:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -21;
        break;
      case 41:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -3;
        break;
      case 63:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -13;
        break;
      case 80:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -61;
        break;
      case 93:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -28;
        break;
      case 52:
        console.log(`El jugador ${jugador} callo en escalera.`);
        return -9;
        break;
      default:
        return 0;
        break;
    }
  }
}
let t = new Tablero();
t.hacerJuego();