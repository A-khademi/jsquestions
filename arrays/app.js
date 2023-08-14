
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
function items(item, index, array) {}
myForEach(names, item);
/////////////////////////////////////
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
  return 
}
myFilter(ages, checkAge);
////////////////////////////////////////
function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}
function mapReplac(num) {
  return ;
}
const newArr = myMap(numbers, mapReplac);
///////////////////////////////////////////
function mySome() {
  for (let i = 0; i < users.length; i++) {
    if (myFunc()) {
      return true;
    }
  }
  return false;
}
function myFunc() {
  return 
}
mySome();
//////////////////////////////////////////
function myEvery() {
  return;
}
function areAll() {
  for (let i = 0; i < numbers.length; i++) {
    if (!myEvery()) {
      return false;
    }
  }
  return true;
}
areAll(numbers);
