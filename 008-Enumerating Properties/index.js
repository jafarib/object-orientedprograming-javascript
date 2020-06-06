function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

//some time you need  itrate or enumrate over an object
// we can do that to using for in loop

for (let key in circle) {
  console.log(key, circle[key]);
}

// what if we wana get the only properteis and not the method
//we can use the type of oprator to chek the type of this (circle[key]) value

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}

// there is onother aproch to get  all the keys and all objects

const keys = Object.keys(circle);
console.log(keys); // whit this approche we can not seprate property from method

// some times if you wana know if an object has  a given property - for that we use the in oprator

if ("radius" in circle) {
  console.log("Circle has a radius");
}
