const array = ["hasan", "omid", "neda", "ali"];
function myForEach(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    const result = callBack(array[i], i, array);
    console.log(result);
  }
}
function printItem(item, index, array) {
  return `${item}is at index ${index} in ${array}`;
}
myForEach(array, printItem);
