const array = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];

function TreeSum(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += Array.isArray(item) ? TreeSum(item) : (sum = +item);
  }

  return sum;
}
console.log(TreeSum(array));