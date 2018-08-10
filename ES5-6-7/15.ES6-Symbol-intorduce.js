/**
 *@Time  2018/8/9 13:26
 *@Author  沐沐
 *@Description  前言：ES5中对象的属性名都是字符串，容易造成重名，污染环境
 *       Symbol：
 *       概念：ES6中新添加了一种原始数据类型Sybol(已有的数据类型：String，Number，boolean，null，undefined，对象)
 *       特点：
 *            1.Symbol属性对应的值是唯一的，解决命名冲突问题
 *            2.Symbol值不能与其他数据进行计算，包括同字符串拼串
 *            3.for in,for of遍历时不会遍历symbol属性
 *       使用：
 *            1.调用symbol函数的到symbol值
 *            let symbol = Symbol();
 *            let obj = {};
 *            obj[symbol] = 'hello'
 *            2.传参标识
 *             let symbol = Symbol('one')
 *             let symbol2 = Symbol('two')
 *             console.log(symbol)
 *             console.log(symbol2)
 *            3.内置symbol值
 *             除了定义自己使用的Symbol值以外，ES6还提供了11个内置Symbol值，指向语言内部的使用方法
 *             Symbol.iterator
 *             对象的Symbol.itertor,指向该对象的默认遍历方法
 *@return
 **/
let symbol = Symbol()
console.log(symbol)
let obj = {username:"kebi"}
 obj[symbol] = "hello"
console.log(obj)
