//####Задача 1
//Напишите функцию `f`, которая возвращает куб числа. Число передается параметром.
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

let f = a => !isNaN(a) ? a ** 3 : "Not a number";

console.log(f(3));
console.log(f("string"));
