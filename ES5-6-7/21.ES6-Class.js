/**
 *@Time  2018/8/10 15:15
 *@Author  沐沐
 *@Description   class
 *     1.通过class定义类/实现类的继承
 *     2.在类中通过constructor定义构造方法
 *     3.通过new来创建类的实例
 *     4.通过extends来实现类的继承
 *     5.通过super调用父类的构造方法
 *     6.重写父类中继承的一般方法
 *@return
 **/
//定义一个人物的类
class Person {
    //类的构造方法
   constructor(name,age){
       this.name = name;
       this.age = age;
   }
   //类的一般方法,使用简写方式
    showName (){
       return this.name
    }
}
//继承
class Children extends Person{
    constructor(name,age){//必须定义super属性
        //调用父类的构造方法
        super(name,age);//必须传入super属性
    }
}
let person = new Person("沐沐",19);
console.log(person.showName());
let child = new Children("小明",5)
console.log(child.showName())