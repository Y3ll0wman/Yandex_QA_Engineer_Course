/*
Напиши функцию plus15, которая прибавляет к переданному возрасту пользователя 15 лет. В коде задай первое значение возраста в переменной age = 51. Результат запиши в переменную newAge. Параметром функции укажи переменную currentAge. Аргументом — переменную age. Выведи командой alert сообщение «А через 15 лет будет <результат в newAge>».
*/

function plus15(currentAge) {
return currentAge + 15
}
let age = 51;
let newAge = plus15(age);
alert('А через 15 лет будет ' + newAge);