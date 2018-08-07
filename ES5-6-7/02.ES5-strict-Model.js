/**
 *@Time  2018/8/7 9:59
 *@Author  沐沐
 *@Description  1.理解：
 *              除了正常运行模式（混杂模式）之外，ES5添加了第二种运行模式：“严格模式”(strict mode)
 *              顾名思义，这种模式使得JavaScript在更严格的语法条件下执行
 *              2.目的：
 *              消除了JavaScript语法的一些不合理性，不严谨之处，减少一些怪异行为
 *              消除代码的不安全之处，为代码的安全运行保驾护航
 *              为未来新版本的JavaScript做好铺垫
 *              3.使用
 *              在全局或函数的第一语句定义为“use strict”
 *              如果浏览器不支持，只解析一条简单的语句，没有任何副作用
 *              4.语法和行为的改变
 *              必须使用var声明变量
 *              禁止自定义的函数中this指向window
 *              创建eval作用域
 *              对象不能有重名属性.
 *@return
 *@case   变量的隐式声明默认为window对象
 *        假如函数未实例化，而是先自调用，那么 构造函数的this则会指向window
 *        ----假如没有使用严格模式,eval定义的重名变量会覆盖外部变量，一旦使用严格模式
 *        那么就会生成自己的作用域，产生私有作用域，避免污染变量
 **/
 'use strict';
 var name = 13
 eval('var name = 46;console.log(name)')
 console.log(name)