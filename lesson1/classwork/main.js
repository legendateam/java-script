// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.

// let str = "Привіт";
// let num = 123;
// let flag = true; 
// let txt =  "true";

// console.log(typeof(str));
// console.log(typeof(num));
// console.log(typeof(flag));
// console.log(typeof(txt));

// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
//     34,
//     12,
//     66,
//     90,
//     87
//     Старайтесь використовувати різні оператори.
//     Example: 88 = (16 / 2) * 11


// let a1 = 2 * 5 + 34 - 10;
// let a2 = (2 * 3) + (3 * 2);
// let a3 = (120 / 20) * 10 + 6;
// let a4 = (30 * 5) - (240 / 4);
// let a5 = (20 + 9) * 3;

// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'


// let a6 = 2;
// let a7 =  2;
// let a8 = 8;
// let a9 = -2;
// let a10 = 75;


// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.

// let height = 23;
// let width = 10; 
// let s = height * width;
// console.log(s)

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

// let heightC = 10;
// let dC = 4; 
// let v = 3.14 * heightC * dC * dC;
// console.log(v)

// let v = 3.14 * heightC * dC;
// console.log(v)


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).


// function pifagora (a,b) {
//     return   Math.pow(a,b)
// };

// console.log(pifagora(3,2) + pifagora (4,2))

// або 
// let n = 3;
// let m = 4; 
// let k = Math.pow(3,2) + Math.pow(4,2) ;
// console.log(k)

// 8. Вывести в окно браузера при помощи метода alert() сmaледующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert("Чебан Юрій Сергійович \n 24 \n Робота на новій пошті")

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = "кто";
// let str2 = "ты";
// let str3 = "такой?"
// let concatenation = [str1, str2, str3]
// document.write(concatenation)

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
//  let a = 5;
//  document.write(str + a + "<br/>");
//  document.write(str - a + "<br/>");
//  document.write(str * "2" + "<br/>");
//  document.write(str / 2 + "<br/>");



// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


// let a = +prompt("введіть число");
// let b = +prompt("ше раз будь ласка");
// let c = a + b; 

// alert(c);



// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let firstname = prompt("как вас зовут?");
// let midlename = prompt("Отчество");
// let age = prompt("сколько лет?");

// alert(`Доброго вечора ${firstname} ${midlename}, мои поздравлния что вам ${age}`)

// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt("a");
// let b = +prompt("b");
// let c = +prompt("c");


// if (a > b && a > c && b > c) {
//     alert(c),
//         alert(b),
//         alert(a)
// } else if (b > a && b > c && a > c) {
//     alert(c),
//         alert(a),
//         alert(b)
// } else if (c > a && c > b && b > a) {
//     alert(a),
//         alert(b),
//         alert(c)
// } else if (a > b && c > b && c > a) {
//     alert(b),
//         alert(a),
//         alert(c)
// } else if (a > b && a > c && c > b) {
//     alert(b),
//         alert(c),
//         alert(a)
// } else if (b > a && b > c && c > a) {
//     alert(a),
//         alert(c),
//         alert(b)
// } else if ( a == b && a == c) {
//     alert(a)
// }




// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let lights = prompt("цвет светлофора")
//  if (lights === "зеленый") {
//      alert("иди")
//  } else if (lights === "желтый") {
//      alert("подожди") 
//  } else if (lights === "красный") {
//      alert("стой")
//  } else {
//      alert("делай что хочешь!")
// };


// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let lights = prompt("цвет светлофора");
// let isRoadClear = confirm("машины есть?");

// if (lights === "зеленый" && isRoadClear === true) {
//     alert("иди")
// }  else if (lights === "зеленый" && isRoadClear === false) {
//     alert ( "подожди пока нарушители проедут")
// }
// if (lights === "желтый" && isRoadClear === true) {
//     alert("жди")
// }  else if (lights === "желтый" && isRoadClear === false) {
//     alert ( "все равно жди")
// }
// if (lights === "красный" && isRoadClear === false) {
//     alert("все равно жди")
// }  else if (lights === "красный" && isRoadClear === true) {
//     alert ( "стой и жди")
// }
// else {
//     "делай что хочешь!"
// }