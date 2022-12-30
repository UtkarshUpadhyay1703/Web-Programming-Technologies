function calcArea(radius) {
    var rad = parseFloat(radius);
    var ans = Math.PI * Math.pow(rad, 2);
    return ans;
}
function calcCircumference(radius) {
    var rad = parseFloat(radius);
    var ans = 2 * Math.PI * rad;
    return ans;
}
function calcDiameter(radius) {
    var rad = parseFloat(radius);
    var ans = 2 * rad;
    return ans;
}
module.exports = {
    calcArea, calcCircumference, calcDiameter
}