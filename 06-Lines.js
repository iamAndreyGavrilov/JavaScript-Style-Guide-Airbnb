// 6.1 Используйте одинарные кавычки '' для строк.

// плохо
const name = "Capt. Janeway";

// плохо - литерал шаблонной строки должен содержать интерполяцию или переводы строк
const name = `Capt. Janeway`;

// хорошо
const name = 'Capt. Janeway';

// 6.2 Строки, у которых в строчке содержится более 100 символов, не пишутся на нескольких строчках
// с использованием конкатенации.

// плохо
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// плохо
const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';

// хорошо
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// 6.3 При создании строки программным путём используйте шаблонные строки вместо конкатенации.

// плохо
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

// плохо
function sayHi(name) {
    return ['How are you, ', name, '?'].join();
}

// плохо
function sayHi(name) {
    return `How are you, ${ name }?`;
}

// хорошо
function sayHi(name) {
    return `How are you, ${name}?`;
}