String.prototype.reverse = function (str) {
  return this.split("").reverse().join("");
};
let test = "test";
console.log(test.reverse());

String.prototype.ucFirst = function (str) {
  return this[0].toUpperCase() + this.slice(1);
};
console.log(test.ucFirst());

// String.prototype.ucWords = function (str) {
//   return this.split("").map(item =>{
//     if(item == ' ')
//   });
// };
