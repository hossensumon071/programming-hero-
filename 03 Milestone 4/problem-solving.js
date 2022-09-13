/*
    1. write a function that will take a radius of a circle and will return the area of cirlce [Hint: Area of a circle: pie*r(square)]
    input - 5, 7, 3
    output - 78.54, 153.94, 28.27
*/
    function areaOfCirlce(r){
      const pie = 3.1416;
      const area = pie * r * r;
      return area;
      //return area.toFixed(2);
    }
   console.log(areaOfCirlce(5))

/*
    2.Write a function that will take feet as the input parameter and will convert it in inch and will return the result in inch 

    input - 1,3,1.5 
    output - 12, 36,18
*/

function feetToInch(feet){
    const inchValue = feet * 12; 
    return inchValue; 
}
const result = feetToInch(1)
console.log(result)

/*
    write a function that takes input the total price of the products you bought are the returns the net price calculated according to the discount tbale below

    total price = >=1000, >=3000, >5000
    Discount = 10%, 15%, 20%
*/

function discountScale(){
    if(totalPrice >= 1000){
        console.log("You will get 10% discount");
    }
    else if(totalPrice >= 3000){
        console.log("you will get 15% discount");
    }
    else if(totalPrice >= 5000){
        console.log("you will get 20% discount");
    }
    else{
        console.log("you can not get discount")
    }
}

/*
  4. write a function that will take a year as a input parameter and will check the year is leap year or not.
*/