function calculateSI(P, T, R) {
    if (R === void 0) { R = 5; }
    var SI = P * T * R;
    return SI;
}
var si1 = calculateSI(50000, 5, 12);
console.log(si1);
var si2 = calculateSI(50000, 5);
console.log(si2);
