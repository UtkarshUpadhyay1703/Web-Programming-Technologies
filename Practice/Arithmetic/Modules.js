// exports.Addition=(num1,num2)=>{
//     var number1=parseInt(num1);
//     var number2=parseInt(num2);
//     return number1+number2;
// }

Addition=(num1,num2)=>{
    var number1=parseInt(num1);
    var number2=parseInt(num2);
    return number1+number2;
}

Subtract=(num1,num2)=>{
    var number1=parseInt(num1);
    var number2=parseInt(num2);
    return number1-number2;
}

Multiplication=(num1,num2)=>{
    var number1=parseInt(num1);
    var number2=parseInt(num2);
    return number1*number2;
}

Division=(num1,num2)=>{
    var number1=parseInt(num1);
    var number2=parseInt(num2);
    return number1/number2;
}

Mod=(num)=>{
    var number=parseInt(num);
    return number%10;
}

module.exports={
    Addition, Multiplication, Subtract, Division, Mod
}
