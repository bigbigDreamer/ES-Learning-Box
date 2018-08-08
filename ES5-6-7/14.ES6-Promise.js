/**
 *@Time  2018/8/8 16:27
 *@Author  沐沐
 *@Description Promise 对象
 *    1.理解:
 *    Promise对象：代表了未来某个将要发生的事情(通常是一个异步操作)
 *    有了promise对象之后，可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数(俗称回调地狱)
 *    ES6中的Promise是一个构造函数，用来生成Promise实例
 *    2.使用Promise的两个步骤
 *    创建Promise对象
 *    let promise = new Promise(resolve, reject) => {
 *    初始化Promise状态为pending
 *    执行异步操作
 *    if (异步操作成功) {
 *    resolve(value)//修改promise的状态为fullfilled
 *    } else {
 *    reject(errMsg)//修改promise的状态为rejected
 *    }
 *    })
 *    调用promise的then（）
 *    promise.then(function(){
 *    })
 *    3.promise对象的3个状态
 *    pending：初始化状态
 *    fullfilled：成功状态
 *    rejected：失败状态
 *    4.应用
 *    使用promise实现超时处理
 *
 *    使用promise封装ajax请求
 *    let request = new XMLHttpRequest ();
 *    request.onreadystatechange = function(){}
 *    request.responseType = 'json'
 *    request.open('GET',url)
 *    request.send();
 *@return
 **/
    //创建promise对象,注意下面这个函数是同步函数
let promise = new Promise( (resolve,reject) => {
    //初始化promise状态为pending
    console.log(111);
    //执行异步操作，发送ajax请求，开启定时器
    setTimeout(()=>{console.log(333);
    //根据异步任务的返回结果修改promise的状态
        //异步执行成功
        resolve("haha");//自动修改promise的状态为 fullfilled:成功的状态
        //异步执行失败
       // reject("什么原因失败，告诉后台")//修改promise 的状态为失败

    },2000)
});
promise.then((...value)=>{
    //成功的回调
    console.log(...value);
    console.log('成功')
},()=>{
    //失败的回调
    console.log("失败")
});
console.log(222);