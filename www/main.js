// ------------------------- База ------------------------
document.write('Hello World');  //Написать текст после тега script

document.innerHTML = 'Hi..';

console.log('Hello console');   // Вывод текста в консоль
        
console.error('(not) Error')    //Вывод текста стилезованного под ошибку

console.warn('(not) warning!')  //Выод текста в формате предупреждения


//  ----------------------- Переменные -------------------------
var num = 5;
const con = 6;

console.log(num);

console.log("Переменная= " + num + ".");   //Объединение вывода значений
console.log("Константа= " + con + ".");

document.getElementById("demo").innerHTML = '10';  //Берёт элемент с айди demo и меняет его на 10;
