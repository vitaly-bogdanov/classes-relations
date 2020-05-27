/**
 * Агрегация
 * ---------
 * 
 * Подтип "Ассоциации"
 * ---------------------
 */

interface Headdress {
  color: string
  getColor();
}

class Cap implements Headdress {
  public color: string = 'red';
  getColor() {
    console.log(this.color);
  }
}

class Human {
  public hat: Headdress // не имеет жеской связи
  inspecHatColor() {
    console.log(this.hat.getColor());
  }
}

let human = new Human;
human.hat = new Cap; // может существовать и без класса Human
human.inspecHatColor();