/**
 *@Time  2018/8/10 14:55
 *@Author  沐沐
 *@Description  Async函数
 *       概念：真正意义上去解决异步回调函数的问题，同步流程表达异步操作
 *       本质：Generator的语法糖
 *       语法：
 *           async function foo(){
 *              await 异步操作
 *              await 异步操作
 *           }
 *       特点：
 *            1.不需要像Generator去掉用next方法，遇到await需要等待，当前的异步操作完成往下执行
 *            2.返回的总是promise对象，可以用then方法进行下一步操作
 *            3.async取代generator函数的*号，await取代generator的yield
 *            4.语义上更为明确，使用简单
 *@return
 **/
//模拟异步ajax
async function ajaxUse(){
    return new Promise((resolve,reject)=>{
        $.get("url",{},(...val)=>{
            console.log(...val)
        })
    })
}
ajaxUse()