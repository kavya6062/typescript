function calculateSI(P:number,T:number,R:number=5){
    var SI:number = P*T*R;
    return SI; 
}

var si1 = calculateSI(50000,5,12);
console.log(si1);


var si2 = calculateSI(50000,5);
console.log(si2);