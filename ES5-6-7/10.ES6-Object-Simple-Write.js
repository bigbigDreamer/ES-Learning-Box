/**
 *@Time  2018/8/8 10:27
 *@Author  沐沐
 *@Description  简化对象的写法
 *              --省略同名的属性值
 *              --省略方法中的function
 *              例如
 *              let x = 1
 *              let y = 2
 *              let point = {
 *              x,
 *              y,
 *              set(x) {this.x = y}
 *              }
 *@return
 **/
//普通写法
let username = 'Bob'
let age = 18
let obj = {
    username: username,
    age: age
}
//简化写法，同名属性可以不写
let obj2 = {
    username,
    age,
    getName() {
        return this.username
    }
}
console.log(obj2.getName())
