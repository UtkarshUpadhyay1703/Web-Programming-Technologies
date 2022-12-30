function isEquilateral(side1,side2,side3){
    s1=parseFloat(side1);
    s2=parseFloat(side2);
    s3=parseFloat(side3);
    if(s1===s2&&s2===s3) return true;
    return false;
}
function calcPerimeter(side1,side2,side3){
    s1=parseFloat(side1);
    s2=parseFloat(side2);
    s3=parseFloat(side3);
}
module.exports={
    isEquilateral,calcPerimeter
}