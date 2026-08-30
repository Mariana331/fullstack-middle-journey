// Завдання 1

// Що буде в консолі?

const a = 10;

function test() {
  const b = 20;

  console.log(a);
  console.log(b);
}

test();
("======================================");
("======================================");

// Завдання 2

// Що буде?

function test() {
  const message = "Hello";
}

test();

console.log(message);
("======================================");
("======================================");

// Завдання 3 — трохи складніше

// Що буде в консолі?

const names = "Mariana";

function outer() {
  const age = 25;

  function inner() {
    console.log(names);
    console.log(age);
  }

  inner();
}

outer();
("======================================");
("======================================");

// Завдання 4 🔥

// А тепер:

const name = "Mariana";

function outer() {
  const name = "Developer";

  function inner() {
    console.log(name);
  }

  inner();
}

outer();
