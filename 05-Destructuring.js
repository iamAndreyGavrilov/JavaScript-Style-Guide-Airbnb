// 5.1 При обращении к нескольким свойствам объекта используйте деструктуризацию объекта

// плохо
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// хорошо
function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

// отлично
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

// 5.2 Используйте деструктуризацию массивов.
const arr = [1, 2, 3, 4];

// плохо
const first = arr[0];
const second = arr[1];

// хорошо
const [first, second] = arr;


// 5.3 Используйте деструктуризацию объекта для множества возвращаемых значений, но не делайте тоже самое
// с массивами.

// Почему? Вы сможете добавить новые свойства через некоторое время или изменить порядок без последствий.

// плохо
function processInput(input) {
    // затем происходит чудо
    return [left, right, top, bottom];
}

// при вызове нужно подумать о порядке возвращаемых данных
const [left, __, top] = processInput(input);

// хорошо
function processInput(input) {
    // затем происходит чудо
    return { left, right, top, bottom };
}

// при вызове выбираем только необходимые данные
const { left, top } = processInput(input);