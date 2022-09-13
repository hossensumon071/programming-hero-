function add(first, second) {
    second = second || 0;
    // if(second === undefined){
    //     second = 0; 
    // }
    const total = first + second;
    return total; 
}

const result = add(10, 20)
console.log(result)