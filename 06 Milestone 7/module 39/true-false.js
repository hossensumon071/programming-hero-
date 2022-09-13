/* 
Truthy: 
1. true
2. any number (+ve, -ve) will be truthy
3. any string other then empty string
4. '0', 'false'


falsy: 
1. false
2. 0
3. '' (empty string)
*/

const x = false;

if(x) {
    console.log('value of x is truthy');
}
else {
    console.log('vlaue of x is faly');
}


// optional
// check falsy
const y = '';
if(!y){
    console.log('value is falsy')
}
// if (x === false){

// }


// check true
const z  = ' ';
if(!!x){
    console.log('value is truthy');
}