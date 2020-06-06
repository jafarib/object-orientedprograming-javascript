function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log("draw");
  };
}

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
this.draw = ()=>{
    console.log('draw');
}`
);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);
