// let factorial = 1;
// for(let i = 5; i>=1; i--){
//     factorial = factorial * 1;
// }
// console.log(factorial);

// Recursion function
function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);

/* 
   5 * factorial(i - 1);
   5 * factorial(5 - 1);
   5 * factorial(4);

   5 * factorial(4);
   5 * i * factorial(i - 1);
   5 * 4 * factorial(4 - 1);
   5 * 4 * factorial(3);

   5 * 4 * factorial(3);
   5 * 4 * i * factorial(i - 1);
   5 * 4 * 3 * factorial(3 - 1);
   5 * 4 * 3 * factorial(2);

   5 * 4 * 3 * factorial(2);
   5 * 4 * 3 * i * factorial(i - 1);
   5 * 4 * 3 * 2 * factorial(2 - 1);
   5 * 4 * 3 * 2 * factorial(1);
   5 * 4 * 3 * 2 * 1 * factorial(1 - 1);
   5 * 4 * 3 * 2 * 1 * factorial(0);

   
*/