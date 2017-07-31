function add(...values:number[]){
    var sum=0;
    for(let i=0;i<values.length;i++){
        sum+=values[i]
    }
    return sum;
}

var result = add(1,2,3,4,5);
var result2 = add(1,2,3,4,5,6,7);