const names = ["hasan", "omid", "neda", "ali"];
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
function item(item, index, array) {}
myForEach(names, item);
