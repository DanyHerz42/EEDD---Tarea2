export default class Dado{
  lanzarDado() {
    return Math.trunc(Math.random() * 6 + 1);
  }
}
