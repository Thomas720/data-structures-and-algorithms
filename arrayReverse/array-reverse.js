function reverse(array){
    let output = [];
    for (let i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }

    return output;
}

console.log(reverse([1,2,3,4,5,6,7]));