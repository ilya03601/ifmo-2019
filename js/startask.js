// https://kodaktor.ru/startask_233fa

const gc = require('goss_concat');

const star = '⭐️';
const length = 5;
// здесь код, который цепочкой методов .from  и .map формирует массив из length звёзд
const starArray = Array.from({length: length}, (v, i) => star);
// здесь код, который использует функцию gc для преобразования этого массива в строку из звёзд вместо метода .join
let starString = '';
starArray.forEach((star) => {
    starString = gc(starString, star);
});
console.log(starString);