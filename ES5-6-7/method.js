/**
 *@Time  2018/8/8 11:26
 *@Author  沐沐
 *@Description  致每一天行走在路上的你我
 *@return
 **/
let Me = {
    name: '沐沐', want() {
        console.log('I want fly farther')
    }
}
let {name, want} = Me
let timeCount = 0
const stopTrans = setInterval(() => {
    timeCount++
    want()
}, 1000)
setTimeout(() => console.log('或许生命的意义就是每一秒都清楚自己需要干什么'), 60000)
if (Object.is(timeCount, 60))
    clearInterval(stopTrans)



