/**
 *@Time  2018/8/7 13:37
 *@Author  沐沐
 *@Description  ES5给Object扩展了一些静态方法，常用的有两个
 * 1.Object.create(prototype,[descriptors])
 *    作用:以指定对象为原型构建新的对象
 *    为新的对象指定新的属性，对属性进行描述
 *    - value:指定值
 *    -writable:标识当前属性是否是可修改的，默认false
 *    -configurable:标识当前属性是否可以被删除 默认false
 *    -enumerable:标识当前属性能否用for in 枚举，默认false
 * 2.Object.defineProperties(object,descriptors)
 *    作用：为指定对象定义扩展多个属性
 *      -get：用来获取当前属性值的回调函数
 *      -set：修改当前属性值的触发的回调函数，并且实参即为修改后的值
 *      存取器属性：setter,getter一个用来存值，一个用来取值
 * 3.对象本身的两个方法
 *    1>get propertyname(){}
 *    2>set propertyname(){}
 *@return
 *@个人理解  第一个方法在我自己看来就是继承的一种方式
 **/
//方法一
 var obj = {
     name:"张三",
     age:16
}
var obj2 = Object.create(obj,{
    sex:{
        value:"男",
        writable:true
    }
})
console.log(obj2.sex)
//方法2
Object.defineProperties(obj,{//获取扩展属性值的时候，get方法自动调用，惰性求值
    fullname:{
        set:function (data) {//监听扩展属性，当扩展属性发生变化的时候，会自动调用，自动调用后会将其变化的值注入
            //到实参
       this.name = data
        },
        get:function () {
            return this.name+this.age
        }
    }
})
console.log(obj.fullname)
//方法3
var obj3 = {
     name:"李四",
     age:18,
     get getname(){
         return this.name
    },
    set setname(data){
         return this.name = data
    }
}
obj3.getnamename = 16
obj3.setname = "赵六"
console.log(obj3.name)