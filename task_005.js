//####Задача 5
//Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`.
//Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число и возвращать true, если число положительное,
//и false — если отрицательное. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
//*Для добавление нового элемента в конец массива используйте метод push*

let array = [1, 2, -4, 3, -9, -1, 7];
let result = [];

let isPositive = (a) => a > 0;

for (let element of array) {
    if (isPositive(element)) {
        result.push(element);
    }
}

console.log(result);
