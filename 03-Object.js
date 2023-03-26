//3.2 Используйте вычисляемые имена свойств, когда создаёте объекты с динамическими именами свойств.
// Почему? Они позволяют вам определить все свойства объекта в одном месте.

function getKey(k) {
    return `a key named ${k}`;
}

// плохо
const obj = {
    id: 5,
    name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// хорошо
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
};

//3.3 Используйте сокращённую запись метода объекта.

// плохо
const atom = {
    value: 1,

    addValue: function (value) {
        return atom.value + value;
    },
};

// хорошо
const atom = {
    value: 1,

    addValue(value) {
        return atom.value + value;
    },
};

//3.4  Используйте сокращённую запись свойств объекта.
const lukeSkywalker = 'Luke Skywalker';

// плохо
const obj = {
    lukeSkywalker: lukeSkywalker,
};

// хорошо
const obj = {
    lukeSkywalker,
};

//3.5 Группируйте ваши сокращённые записи свойств в начале объявления объекта.
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// плохо
const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
};

// хорошо
const obj = {
    lukeSkywalker,
    anakinSkywalker,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
};

//3.6 Только недопустимые идентификаторы помещаются в кавычки.
// Почему? На наш взгляд, такой код легче читать.
// Это улучшает подсветку синтаксиса, а также облегчает оптимизацию для многих JS-движков.

// плохо
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

// хорошо
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};

//3.7 Не вызывайте напрямую методы Object.prototype, такие как hasOwnProperty, propertyIsEnumerable,
// и isPrototypeOf.

// Почему? Эти методы могут быть переопределены в свойствах объекта, который мы проверяем
// { hasOwnProperty: false }, или этот объект может быть null (Object.create(null)).

// плохо
console.log(object.hasOwnProperty(key));

// хорошо
console.log(Object.prototype.hasOwnProperty.call(object, key));

// отлично
const has = Object.prototype.hasOwnProperty; // Кэшируем запрос в рамках модуля.
console.log(has.call(object, key));

//3.8  Используйте синтаксис расширения вместо Object.assign для поверхностного копирования объектов.
// Используйте параметр оставшихся свойств, чтобы получить новый объект с некоторыми опущенными свойствами.

// очень плохо
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // эта переменная изменяет `original` ಠ_ಠ
delete copy.a; // если сделать так

// плохо
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// хорошо
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }