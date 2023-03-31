/*
Объяви объект car, который содержит пары «ключ — значение» с характеристиками машины. Ключи — это engine, turbo, maxSpeed, значения — это '249 hp', true, 260 соответственно.
Командой typeof выведи в консоль тип этого объекта.
*/

let car = {
engine : '249 hp',
turbo : true,
maxSpeed : 260
};
// выведи тип объекта
console.log(typeof car)

/*
Объяви массив carSpecs, который содержит список характеристик машины: мощность двигателя  '249 hp', турбированность true и максимальная скорость 260.
Выведи в консоль: тип и длину массива, а также, значение первого элемента массива.
*/

// объяви массив
let carSpecs = ['249 hp', true, 260];
// выведи тип
console.log(typeof carSpecs);
// выведи длину
console.log(carSpecs.length);
// выведи первый элемент
console.log(carSpecs[0])