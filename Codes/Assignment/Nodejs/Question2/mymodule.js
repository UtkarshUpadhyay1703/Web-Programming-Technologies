function factorial(num) {
    var fact = 1;
    for (var i = 1; i <= parseInt(num); i++) {
        fact = fact * i;
    }
    return fact;
}
function myprime(num) {
    var i = 2;
    while (i < num) {
        if (num % i == 0) {
            return false;
        }
        i = i + 1;
    }
    return true;
}
// function table(num){

// }
module.exports = {
    factorial, myprime
}