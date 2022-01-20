//####Задача 4
//Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке.
//Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

let f = (a) => {
    switch (a) {
        case 1:
            console.log("Понедельник");
            break;
        case 2:
            console.log("Вторник");
            break;
        case 3:
            console.log("Среда");
            break;
        case 4:
            console.log("Четверг");
            break;
        case 5:
            console.log("Пятница");
            break;
        case 6:
            console.log("Суббота");
            break;
        case 7:
            console.log("Воскресенье");
            break;
        default:
            console.log("Неправильный параметр");
    }
};

f(3);
f("3");
f("sun");
