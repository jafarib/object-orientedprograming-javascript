// value types

let x = 10;
let y = x;

x = 20;
console.log(x, y);

///

//refrence types

let xx = { value: 10 };

let yy = xx;

xx.value = 20;

console.log(xx.value, yy.value);

///

let number = 10;


function increase(number) {
  number++;
}
increase(number);

console.log(number);

let obj = {value: 10};

function increasee(obj) {
  obj.value++;
}

increasee(obj);

console.log(obj);