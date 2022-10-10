String.prototype.reverse = function (str) {
  return this.split("").reverse().join("");
};
let test = "test";
console.log(test.reverse());
