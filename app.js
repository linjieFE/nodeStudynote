// 调试->启动调试->调试控制台
// 路径 
console.log(__dirname);//不包含文件名的路径 =>/Users/9t2e20190814/Desktop/nodeDemo
console.log(__filename);//包含文件名的路径 =>/Users/9t2e20190814/Desktop/nodeDemo/app.js

// global node全局对像 类似 js this
console.log(global)
/**打印内容
 * {DTRACE_NET_SERVER_CONNECTION: , DTRACE_NET_STREAM_END: , DTRACE_HTTP_SERVER_REQUEST: , DTRACE_HTTP_SERVER_RESPONSE: , DTRACE_HTTP_CLIENT_REQUEST: , …}
 */

 // 二、模块化
 //2.1 引入模块
 var stuff =  require("./stuff")
 console.log(stuff.counter(['Jenny','zheng','zheng','jerry']));
 console.log(stuff.adder(1,stuff.pi))

 //三、事件模块

 //3.1 引入事件模块
 var events = require('events');

//3.2 创建EventEmitter 对象

 const myEmitter =new events.EventEmitter();

 //3.3 注册事件  myEmitter.on('事件名例 click ','回调函数')
 myEmitter.on('someEvent',function(msg){
     console.log(msg)//emit中的参数
 })

 //3.4 触发事件 myEmitter.emit('触发事件名','传的参数')
 myEmitter.emit('someEvent','实现事件并传递此参数到注册事件的回调函数中')
 
 console.log(1)

 //例二

 myEmitter.on('someEvent2',function(msg){
    setImmediate(function(){
        console.log(msg)//emit中的参数
    })  
})

myEmitter.emit('someEvent2','异步执行，我会在“2”先打印出来后，再打印出来')

console.log(2)