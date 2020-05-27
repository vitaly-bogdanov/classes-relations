/**
 * Ассоциация
 * -----------
 */ 

class ChatRoom {
  constructor(public name: string) {
    this.name = name;
  }
}

class User {
  public chatRoom: ChatRoom; // ссылка на другой класс
}

let chat = new User;
chat.chatRoom = new ChatRoom('example');

/**
 * Кратность ассоциации
 * Примеры: один ко многим(1) и бинарная связь(2)
 */ 

// 1
class Player {
  public team: Team // связан с командой
}

class Team {
  public players: Player[] = []; // связь с массивом игроков
}

let team = new Team;
for (let i = 0; i < 5; i++) {
  let player = new Player;
  player.team = team; // назначаем для каждого игрока команду
  team.players.push(player); // назначаем команде игрока
}

console.log(team.players);
console.log(team.players[0].team);

// 2
class Card {
  public employee: Employee;
  constructor(employee: Employee) {
    this.employee = employee;
    employee.card = this;
  }
}

class Employee {
  public card: Card
}

let employee = new Employee;
let card = new Card(employee);

console.log(employee.card);
console.log(card.employee);