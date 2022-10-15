String.prototype.reverse = function (str) {
  return this.split("").reverse().join("");
};
let test = "test";
console.log(test.reverse());

String.prototype.ucFirst = function (str) {
  return this[0].toUpperCase() + this.slice(1);
};
console.log(test.ucFirst());

String.prototype.ucWords = function (str) {
  let arr = str.split(" ");
  let strArr = [];
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let newStr = a[0].toUpperCase() + a.slice(1);
    strArr.push(newStr);
  }
  return strArr.join(" ");
};

let str = "as sad dasdas";
console.log(str.ucWords(str));
