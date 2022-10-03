//#1Клонирование массивa

const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
const arrayClone = (arr) => {
  let newArr = [...arr];
  
  return newArr;
};
const newArray = arrayClone(vegetables);
console.log(newArray);

//№2 Преобразование массива в строку
//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. Получите результат двумя разными методами.
//способ 1
const ArrayInString = (arr) => {
    return arr.join(",");
  };
console.log(ArrayInString(vegetables));
//способ 2
const ArrayInString2 = (arr) => {
    return arr.toString(",");
  };
console.log(ArrayInString(vegetables));

/* #3Двоеточие между нечётными числами
Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие (:)
 между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7. */

 const num = prompt("Введите число", 55639217);
 function colonOdd(num) {
   let array = ("" + num)
     .split("")
     .map((item, index, array) => {
       if (item % 2 === 1 && array[index + 1] % 2 === 1) {
         
         return `${item}:`;
       }
       
       return item;
     })
     .join("");
   return array;
 }
 
 console.log(colonOdd(num));

/* #4Замена регистра символов
Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк]. */

const string = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');

function changeRegister(str) {
  return str
    .split("")
    .map((item, index) => {
      let newStr = "";
      return (newStr +=
        item.toLowerCase() === item ? item.toUpperCase() : item.toLowerCase());
    })
    .join("");
}

console.log(changeRegister(string)); // [кАжДыЙ оХоТнИк]

/* 5. Удалить повторяющиеся элементы массива
Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру */

let arr = [
    "php",
    "php",
    "css",
    "css",
    "script",
    "script",
    "html",
    "html",
    "java"
  ];
  function removeDuplicates(arr) {
    let newArr = [];
    return (newArr += arr.map((item) => {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    })).split(",").filter(Boolean);
  }
  
  console.log(removeDuplicates(arr)); 

  /* 6. Сумма элементов двух массивов
Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов */


let arr1 = [1, 2, 3, 3];
let arr2 = [4, 5, 6, 3, 2];
const sumTwoArrays = (arr1, arr2) => {
  let newArr = [];
  if (arr1.length > arr2.length) {
    newArr = arr1.map((item, index) => {
      let long1 = arr1.length - arr2.length,
        long2 = arr2.length - arr1.length;
      if (long1 > long2) {
        arr2.push(0);
      } else if (long1 < long2) {
        arr1.push(0);
      }

      return (newArr = arr1[index] + arr2[index]);
    });
  } else {
    newArr = arr2.map((item, index) => {
      let long1 = arr1.length - arr2.length,
        long2 = arr2.length - arr1.length;
      if (long1 > long2) {
        arr2.push(0);
      } else if (long1 < long2) {
        arr1.push(0);
      }

      return (newArr = arr1[index] + arr2[index]);
    });
  }
  return newArr;
};

console.log(sumTwoArrays(arr1, arr2)); // [5,7,9,4,5]

//7 7. Количество повторяющихся элементов в массиве
//Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.