// Простые типы, работаем напрямую с его значением
const foo = 42;
let bar = foo;
bar = 100;
console.log(foo, bar); // 42 100

// Сложные типы, работаем с ссылкой на значение
const a = [1, 2];
const b = a;
b.push(3);
console.log(a, b); // [1, 2, 3] [1, 2, 3]