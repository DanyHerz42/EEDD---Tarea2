export default class Jugador{
  constructor(nombre, posicion = 0){
    this._nombre = nombre;
    this._posicion = posicion;
  }
  get posicion(){
    return this._posicion;
  }
  get nombre(){
    return this._nombre;
  }
  moverse(casillas){
    this._posicion += casillas;
  }
}