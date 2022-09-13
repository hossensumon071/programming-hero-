// 1. convert redian to degree
function radianToDegree(radians) {
    const pi = Math.PI;
    const degree = radians * (180 / pi);
    return degree;
}
const degree = radianToDegree(2)
console.log(degree) //result 114.59155902616465


// 2. check whether the given file name is a javascript file or not 
function isJavascriptFile(fileName){
  const file = ".js";
  const fileType = fileName + file;
  if(fileType === file) {
    return true ;
  } else {
    return false ;
  }
}
const result = isJavascriptFile("programming")
console.log(result)

// 3. calculate the total oil price that i have to pay
/*
   diesel ---> 114
   petrol ---> 130
   octane ---> 135
*/
function oilPrice(deisel, petrol, octane) {
    const dis = deisel * 114;
    const pet = petrol * 130; 
    const oct = octane * 135; 
    const totalOil = dis + pet + oct ; 
    return totalOil; 
}

const totalOil = oilPrice(2,3,5);
console.log(totalOil); // result 1293
