var n = 10;

function addNumbers(n) {
  var sum = 0;
  for (let index = 1; index <= n; index++) {
    sum += index;
  }
  console.log(sum);
}

addNumbers(n);
