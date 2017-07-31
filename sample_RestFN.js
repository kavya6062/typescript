function add() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
}
var result = add(1, 2, 3, 4, 5);
var result2 = add(1, 2, 3, 4, 5, 6, 7);
