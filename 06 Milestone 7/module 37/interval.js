console.log('first');
console.log('second');
setTimeout(() => {
    console.log('third');
})

let second = 0;
const intervalID = setInterval(() => {
    // console.log('third');
    // console.log(second++);
    second++
    console.log(second);
    if(second === 10){
        clearInterval(intervalID)
    }
}, 1500)
console.log('fourth');
console.log('fifth');