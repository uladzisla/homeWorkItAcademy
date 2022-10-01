let firstName, lastName, age, isMan, sex;
//Спрашиваем у пользователя его Имя
do {
  firstName = prompt("Ваше имя?", "");
} while (firstName == "");
{
  console.log(`Ваше имя: ${firstName}`);
}
//Спрашиваем у пользователя его фамилию
do {
  lastName = prompt("Ваша фамилия?", "");
} while (lastName == "");
{
  console.log(`Ваша фамилия: ${lastName}`);
}
//Спрашиваем у пользователя его возраст
do {
  age = +prompt("Сколько Вам лет?", "");
} while (age < 0 || age > 100 || age == "");
{
  console.log(`Ваш возраст ${age}`);
}
//спрашиваем у пользователя его пол
isMan = confirm("Вы мужчина?");
if (isMan) {
  sex = "мужчина";
} else {
  sex = "женщина";
}
// выводим итоговую анкету
alert(
  `Ваше имя: ${firstName}\nВаша фамилия: ${lastName}\nВаш возраст :${age}\nВы ${sex}`
);

//Нужно доделать из класса

//Треугольник за семь циклов

for (let i = "#"; i.length < 8; i += "#") {
  console.log(i);
}
// шахматка
let white = " # # # # # # # #";
let black = "# # # # # # # #";

for (let i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    console.log(white);
  } else {
    console.log(black);
  }
}

//Ввести число больше 100 или ескейт
let num;
do {
  num = +prompt("input num", "");
} while (num < 100 && num);
//я понимаю, что он будет возвращать число 0 после преобразования, но других
// условий я так и не подобрал, так как esc возвращает null, но при сравнении
//num==null ничего не происходит.
{
  console.log(num);
}