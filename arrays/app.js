const names = ["hasan", "omid", "neda", "ali"];
function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
function items(item, index, array) {}
myForEach(names, item);

const ages = [32, 33, 16, 40, 13, 20];
function myFilter(array, callback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function checkAge(age) {
  return age > 20;
}
myFilter(ages, checkAge);
