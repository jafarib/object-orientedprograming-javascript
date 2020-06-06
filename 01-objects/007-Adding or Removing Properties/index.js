function Circle(radius){
  this.radius = radius;
  this.draw = function(){
    console.log('draw');
  }
}

// this object in java script are dynamics that means after you create them you can add extra property in them or delete some propertys


const circle = new Circle(10);

//user.token = 'asasdadsasd';

circle.location= {x:10};
console.log(circle);

// in another way 
circle['location1']= {x:10};
circle['weight'] = 70;
console.log(circle);


const propertyName = 'location';
console.log(circle[propertyName]);


// some time are property keys have some special character we should use it by this way


const propertyName1 = 'center-location';
circle.propertyName1 = {y:22};
//

delete circle.location;
console.log(circle);



