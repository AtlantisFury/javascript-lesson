let cars = ["BMW", "Porsche", "Mercedes", "Pagani", "Aston Martin"];

function findIndex(arr, search) {
  console.log(arr, search);

  let matches = [];

  for (i in arr) {
    if (arr[i].toLowerCase().includes(search.toLowerCase())) {
      console.log(arr[i]);
      matches[matches.length] = [arr[i], i];
    }
  }
}
console.log(findIndex(cars, "r"));
