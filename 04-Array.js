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

//4.6 Используйте Array.from вместо оператора расширения ... для маппинга итерируемых объектов, это позволяет
// избежать создания промежуточного массива.

// плохо
const baz = [...foo].map(bar);

// хорошо
const baz = Array.from(foo, bar);

// 4.7 Используйте операторы return внутри Колбэк-функции в методах массива. Можно опустить return,
// когда тело функции состоит из одной инструкции, возвращающей выражение без побочных эффектов

// хорошо
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// хорошо
[1, 2, 3].map((x) => x + 1);

// плохо - нет возвращаемого значения, следовательно, `acc` становится `undefined` после первой итерации
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
});

// хорошо
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten;
});

// плохо
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    } else {
        return false;
    }
});

// хорошо
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    }

    return false;
});