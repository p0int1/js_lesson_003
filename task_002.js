//####Задача 2
//Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым.
//Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

function f() {
    let sum = 0;
    for (let a of arguments) {
        isNaN(a) ? console.log(`Аргумент ${a} - не число`) : sum += +a;
    }
    return sum;
}

console.log(f(1, "8", 3));
console.log(f(1, 2, 3));
console.log(f("str", 12, 22, 51));