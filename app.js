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

// 四、文件系统模块
// 4.1 引入文件系统模块
var fs = require('fs')

// 4.2 通过对象调用方法 
/**
 * 两种方法
 * 1.同步
 * 2.异步
 */
var readme = fs.readFileSync('README.md','utf8')//同步读取  readFile 异步
console.log(readme)

// 同步写入
fs.writeFileSync('writeMe.txt','这是我写入的内容') //同步写入 

//异步读取 fs.readFile(文件名，编码，回调函数)
fs.readFile('writeMe.txt','utf-8',function(err,data){
    if(err) throw err;//有异常打印异常
    console.log(data)//无异常打印文件内容 ，由于异步 控制台最后打印此内容
})

// 异步写入文件
fs.readFile('writeMe.txt','utf-8',function(err,data){
    if(err) throw err;//有异常打印异常
    console.log(data)
    // fs.writeFile('writeMe2.txt','这是异步写入的内容')
})





