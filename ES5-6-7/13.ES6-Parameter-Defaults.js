/**
 *@Time  2018/8/8 16:22
 *@Author  沐沐
 *@Description  形参默认值
 *       当一个函数不传入参数的时候，默认使用形参里面的默认值
 *       例如:
 *       function f(x = 1,y = 2){
 *       this.x = x;
 *       this.y = y;
 *       }
 *@return
 **/
function f(x = 1,y = 2) {
    this.x = x
    this.y = y
}
let x = new f()
console.log(x.y)
