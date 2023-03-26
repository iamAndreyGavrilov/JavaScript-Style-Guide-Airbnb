// 4.3 Для копирования массивов используйте оператор расширения ... (spread operator)

// плохо
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
}

// хорошо
const itemsCopy = [...items];

// 4.4 Для преобразования итерируемого объекта в массив используйте
// оператор расширения ... вместо Array.from.

const foo = document.querySelectorAll('.foo');

// хорошо
const nodes = Array.from(foo);

// отлично
const nodes = [...foo];

// 4.5 Используйте Array.from для преобразования массивоподобного объекта в массив.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// плохо
const arr = Array.prototype.slice.call(arrLike);

// хорошо
const arr = Array.from(arrLike); // ['foo', 'bar', 'baz']