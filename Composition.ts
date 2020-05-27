/**
 * Композиция
 * -----------
 */

class Engine {
  go() {
    console.log('Go!');
  }
}

class Car {
  private engine: Engine;
  constructor() {
    // объект класса Engine не может существовать без класса C
    this.engine = new Engine; // жесткая связь
  }
  go() {
    this.engine.go(); // делегирование
  }
}