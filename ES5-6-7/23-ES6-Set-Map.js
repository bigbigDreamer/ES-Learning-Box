/**
 *@Time  2018/8/11 11:04
 *@Author  沐沐
 *@Description  Set&Map数据结构
 *         1.Set容器：无序不可重复的多个value集合体
 *           Set()
 *           Set(Array)
 *           add(value)
 *           delete(value)
 *           has(value)
 *           clear()
 *           size
 *         2.Map容器：无序的key,不重复的多个key-value的集合体
 *           Map()
 *           Map(array)
 *           set(key,value)
 *           get(key)
 *           delete(key)
 *           has(key)
 *           clear()
 *           size
 *@return
 **/
let arr = [0,1,2,5,6,5,9];
let set = new Set(arr);
set.add(10)
console.log(set.size);
let map = new Map([['1','张三'],['2','李四'],['3','张三']])
console.log(map.get('2'))
console.log(map)
//深度克隆
function deepClone(target) {
    return JSON.parse(JSON.stringify(target))
}
let arr2 = deepClone(arr);
console.log(Object.prototype.toString.call(arr2).slice(8,-1))