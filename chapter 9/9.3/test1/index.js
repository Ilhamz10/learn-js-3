//Унаследованный конструктор класса должен вызывать super(). В противном случае "this" будет не определён.

class Rabbit extends Object {
  constructor(name) {
    super(); // надо вызвать конструктор родителя, когда наследуемся
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );


// Есть два отличия:

// class Rabbit - Rabbit.__proto__ === Function.prototype	
// 	class Rabbit extends Object - Rabbit.__proto__ === Object