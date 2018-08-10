/**
 *@Time  2018/8/9 14:04
 *@Author  沐沐
 *@Description  Iterator
 *    概念：iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制
 *    作用：
 *       1.为各种数据结构，提供一个统一的，简便的访问接口
 *       2.使得数据结构的成员能够按照某种次序排列
 *       3.ES6创造了一种新的遍历命令for of循环，iterator接口主要供for ...of 消费
 *    工作原理：
 *      -创建一个指针对象（遍历器对象，指向数据结构的起始位置。
 *      -第一次调用next方法，指针自动指向数据结构的第一个成员
 *      -接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员
 *      -每调用next方法返回的是一个包含value和done对应的对象{value,当前成员的值，done:布尔值}
 *        -value表示当前成员的值，done对应的布尔值表示当前的数据结构是否遍历结束
 *        当遍历结束的时候返回的value值是undefined,done值为false
 *      原生具备iterator接口的数据(可用 for...of遍历)
 *        扩展理解：
 *        1.当数据结构上部署了Symbol，iterator接口，该数据就是可用for of遍历
 *        2.当使用for of去遍历目标数据的时候，该数据会自动去找Symbol.iterator属性
 *          1.Array
 *          2.arguments
 *          3.set容器
 *          4.map容器
 *
 *@return
 **/
//模拟指针对象(遍历器对象)
function myIterator(arr) {//iterator
    let index = 0;
    return {
        next: () => {
            return index < arr.length ? {
                value: undefined,
                done: true
            } : {
                value: arr[index++],
                done: false
            };
        }
    }
}
let arr = [2, 1, 3, 4];
let iterator = myIterator(arr);
//将iterator接口部署在指定的数据类型上，可以使用for of去循环遍历
//数组，字符串，arguments，set，map
//对象身上没有iterator接口

