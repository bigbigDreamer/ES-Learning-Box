/**
 *@Time  2018/8/10 15:45
 *@Author  沐沐
 *@Description   深度克隆
 *@return
 **/
//拷贝数组/对象 没有生成新的数据，而是复制了一份引用
/**
 * 拷贝数据
 *   基本数据类型
 *     拷贝后会生成一份新的数据，修改拷贝以后的数据不会影响原数据
 *   对象/数组
 *     拷贝后不会生成新的数据，而是拷贝引用，修改拷贝后的数据会影响原来的数据
 * --- 拷贝数据的方法(影响原数据就是浅拷贝)
 *     1.直接复制给变量  //浅拷贝
 *     2.Object.assign()  //浅拷贝
 *     3.Array.prototype.concat()  //浅拷贝
 *     4.Array.prototype.slice()   //浅拷贝
 *     5.JSON.parse(JSON.stringify()) [这两个方法只能放入js原生的对象和数组] //深拷贝，深度克隆  （拷贝的数据不能有函数，因为他处理不了）
 *     总结：
 *        --浅拷贝(对象/数组)：
 *          特点：拷贝的引用，修改拷贝以后的数据会影响原数据，使得原数据不安全
 *        --深拷贝(深拷贝)
 *          特点：拷贝的时候生成新数据，修改拷贝以后不会影响原来的数据
 **/
/**
 *@Time  2018/8/10 16:07
 *@Author  沐沐
 *@Description  思考:
 *                如何实现深度拷贝
 *                拷贝的数据里面有对象或者数组
 *              知识点储备：
 *                如何判断的数据类型
 *                 1.typeof返回的数据类型:String,Number,Boolean,Undefined,Object,Function
 *                 2.Object.prototype.toString.call()
 *@return
 **/
let a = null;
console.log(Object.prototype.toString.call(a).slice(8, -1))

//定义检测数据类型的函数
function checkType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

//实现深度拷贝
function clone(target) {
    //判断拷贝的数据类型
    let result, targetType = checkType(target);
    if (targetType === 'Object') {
        result = {};
    } else if (targetType === 'Array') {
        result = [];
    } else {
        return target;
    }
    //遍历目标数据
    for (let i in target) {
        //获取数据对象的每一个值
        let value = target[i];
        //判断目标结构里面是否存在对象/数组
        if (checkType(value) === 'Object' || checkType(value) === 'Array') {
            //继续遍历
            result[i] = clone(value);
        } else { //获取到的value值是基本的数据类型或者函数
            result[i] = value;
        }
    }
    return result;
}