/*
Заказчик решил, что посетителей с высшим образованием можно пускать на сайт вне зависимости от возраста.
Совмести условия так, чтобы аудитория от 18 до 50 лет увидела сообщение «Всё в порядке». Если возраст посетителя менее 18 лет и более 50 лет, но у него есть высшее образование, нужно показать «Добро пожаловать». Остальным посетителям надо показать «Ты не пройдёшь!»
*/

let age = prompt('Укажите свой возраст');
let ageNormalized = Number(age);
let education = confirm('Есть ли у вас высшее образование?');
if (ageNormalized >= 18 && ageNormalized <= 50) {
    alert('Всё в порядке')
} else if (education === true) {
alert("Добро пожаловать");
} else {
  alert("Ты не пройдёшь!");
}