function Add(num1, num2) {
    var add = parseFloat(num1) + parseFloat(num2);
    return add;
}
function Subtract(num1, num2) {
    var sub = parseFloat(num1) - parseFloat(num2);
    return sub;
}
function Multiplication(num1, num2) {
    var mul = parseFloat(num1) * parseFloat(num2);
    return mul;
}
function Divide(num1, num2) {
    var div = parseFloat(num1) / parseFloat(num2);
    return div.toFixed(2);
}
function Square(num) {
    var sq = parseFloat(num) * parseFloat(num);
    return sq;
}
function Sum(...num) {
    var sumnums = 0;
    for (var i = 0; i < num.length; i++) {
        sumnums = sumnums + num[i];
    }
    return sumnums;
}
module.exports = {
    Add, Subtract, Multiplication, Divide, Square, Sum
}