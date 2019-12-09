var counter =function(arr){
    return `一共有${arr.length}个元素在数组中`
}

var adder =function(a,b){
    return `你的需要计算的两个值的和为：${a+b}`
}
var pi = 3.14
//module
//输出
module.exports = {
    counter,
    adder,
    pi
}