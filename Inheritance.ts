/**
 * Наследование
 * ------------
 */

class Car {
  go() {
    console.log('GO!!!');
  }
}

class Jeep extends Car { }

let jeep = new Jeep();
jeep.go();