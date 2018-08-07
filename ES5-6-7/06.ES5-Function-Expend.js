/**
 *@Time  2018/8/7 14:31
 *@Author  沐沐
 *@Description  关于函数的扩展  再度重相逢：call()  apply() bind()
 *      1.Function.prototype.bind(obj)
 *      作用：将函数内的this绑定为obj,并将函数返回
 *      2.面试题：区别bind()与call()和apply()
 *        - -都能指定函数中的this
 *        - -call()/apply()是立即调用函数
 *           区别:传入参数的形式不太相同
 *             --call()是传入一个或者多个参数
 *             --apply()是传入一个参数数组
 *        - -bind()是将函数返回
 *          bind的特点是：绑定完成this不会立即调用当前的函数，而是将函数返回
 *          bind传参的方式，同call一样
 *@return
 **/
var obj = {
    name:15
}
 function  person (name) {
    this.name = name
     console.log(this)
}
setInterval(function () {
    console.log(this)
}.bind(this),1000)
person(56)
