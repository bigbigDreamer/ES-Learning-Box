/**
 *@Time  2018/8/8 16:06
 *@Author  沐沐
 *@Description  三点运算符
 *    用途
 *    1.rest(可变)参数
 *     用来取代arguements,但比arguements灵活，只能是后部分形参参数
 *     function (...values) {
 *     console.log(arguments)
 *     arguements.forEach(function(item,index){
 *
 *    })
 *     console.log(values)
 *     values.forEach(function(item,index){
 *
 *     })
 *     }
 *     2.扩展运算符
 *     let arrr1 = [1,3,5]
 *     let arr2 = [2,...arr1,6]
 *     arr2.push(...arr1)
 *@return
 **/
function f() {
    console.log(arguments)
    console.log(arguments.callee.length)

}
f(2,5,8)
//收集实参只能放在最后的位置  function(a,...values)
function f1(...values) {
    console.log(values)
    values.forEach((item,index) => {
        console.log(item+"--"+index)
    })
}
f1(1,2,5)
//数组
let arr = [1,2,3,4,5]
let arr1 = [0,5,...arr,6]
console.log(...arr1)