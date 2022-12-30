function calcArea(length,breadth){
    var len=parseFloat(length);
    var bre=parseFloat(breadth);
    return (len*bre);
}
function calcPerimeter(length,breadth){
    var len=parseFloat(length);
    var bre=parseFloat(breadth);
    return (2*(len+bre));
}
module.exports={
    calcArea,calcPerimeter
}