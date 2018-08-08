/**
 *@Time  2018/8/8 10:06
 *@Author  沐沐
 *@Description  变量的解构赋值
 *              1.理解
 *               --从对象或数组中读取数据，并赋值给多个变量
 *              2.对象的解构赋值
 *               --let {n,a} = {n:'tom',a:12}
 *              3.数组的解构赋值
 *               --let [a,b] = ['1','atguigu']
 *              4.用途
 *               --给多个形参赋值
 *@return
 **/
  //对象举例，正常获取对象属性
 let obj = {username:'BOB',age:18}
 console.log(obj.username)
 //举例，解构赋值获取(必须是人家已有的属性)，可以是要哪个取哪个
let {username,age} = obj;
 console.log(username)
 //数组举例
 let arr = [0,1,2,3,4,5]
 //解构,如果需要取出后边的值，那么就需要用逗号占位
 let [,,,a,b] = arr;
 console.log(a)
