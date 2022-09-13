/* 
    8 ways to get undefined
*/

// 1. variabe that is not initialized will give undefined
let first ;
console.log(first);

// 2. function with no return
function second(a, b){
    const total = a + b;
}

const result = second();

console.log(result);

// 3. parameter that is not passed will be undefined 
// 4. if return has nothing on the right side will return undefined
// 5. property that doesnt exists on an object will give you undefined 
// 6. accessing array elements outside of the index range 
// 7. deleting an element inside an array
// 8. set a value directly to undefined
