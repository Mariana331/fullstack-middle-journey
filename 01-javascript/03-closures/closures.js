function outer() {
  const name = "Mariana";

  function inner() {
    console.log(name);
  }

  return inner;
}

const myFunction = outer();

myFunction();

// Closure — це коли функція зберігає доступ до змінних із того lexical scope, де вона була створена, навіть якщо зовнішня функція вже завершила виконання.
("======================================");
("======================================");
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();
// answer 1.2.3
// Що відбувається

// Коли виконується:

// const counter = outer();

// створюється:

// outer scope
// └── count = 0

// і counter отримує функцію inner.

// Функція inner зберігає доступ до count.

// Перший виклик:

// counter();
// count: 0 → 1

// Другий:

// counter();
// count: 1 → 2

// Третій:

// counter();
// count: 2 → 3

// Тобто counter кожного разу працює з тим самим count.
("======================================");
("======================================");

function createUser() {
  let name = "Mariana";

  function setName() {
    name = "Anna";
    console.log(name);
  }
  return setName;

  function getName(name) {
    console.log(name);
  }
  return getName;
}

const user = createUser();

user.setName("Mariana");

console.log(user.getName());
// Mariana

user.setName("Anna");

console.log(user.getName());
// Anna
