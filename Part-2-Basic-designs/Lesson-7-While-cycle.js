/*
В цикле for всегда задают строгое количество итераций. Перепиши код из предыдущего урока, применяя while. Вспомни условие задачи: возвести двойку в степень, которую задал пользователь, но не более, чем в восьмую степень.
Избавься от конструкции break. Не забудь увеличить i на 1 внутри цикла.
*/

let power = prompt('Укажи степень');
power = Number(power);
let result = 1;
let i = 1;
while ( i <= power && i <9) {
  result = result * 2;
  i++;
}
alert(result);