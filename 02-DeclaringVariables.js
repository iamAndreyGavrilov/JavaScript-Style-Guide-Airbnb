// Объявление переменных

// у let и const блочная область видимости, в то время как var имеет функциональную область видимости.

// const и let существуют только в том блоке, в котором они определены.
{
    let a = 1;
    const b = 1;
    var c = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // 1