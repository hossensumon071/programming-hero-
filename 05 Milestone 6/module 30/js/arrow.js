function add(first, second) {
    const total = first + second;
    return total; 
}
function add4(first, second){
    return first + second
}

const add5 = function (first, second){
    return first + second
}

const add6 = (first, second) => first + second ;


const result = add(10, 20);
const result2 = add4(10, 20);
const result3 = add5(10, 20);
console.log(result);