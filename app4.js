// buffer 绑存区 可以在TCP流和文系系统操作等场景中处理二进制数据流
/**
 * Stream 流 在 Node.js中是处理流数据的抽象接口
 * 管道事件 输出 输入
 * 
 */
// 读数据流
var http= require("http");
var fs = require("fs");
var myReadStream = fs.createReadStream(__dirname + '/writeMe.txt','utf-8');//返回一个对象 可以加事件
console.log(myReadStream)

// 写入文件流
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');


myReadStream.pipe(myWriteStream) //与35-40行代码执行的结果相同
//注册方法 

// myReadStream.on('data',function(chunk){
//     console.log('======= 正在接收一部分数据 ========')
//     console.log(chunk)
//     // 写入数据
//     myWriteStream.write(chunk)
// })

// 搭建服务器
var server =http.createServer(function(req, res){
    /** 1.这里改为text/html 而不是 text/plain 2.当读取的是json文件时，text/html 页面显示是的json{...}，text/plain 被格式化的json数据。
     * 但更建议用  res.writeHead(200,{"Content-type":"application/json"}); 展示效果同text/plain
    */ 
    if(req.url !=='/favicon.ico'){//加此判断不会返回/fivicon.ico =>客户端向服务器发送请求：/
        console.log("额户端向服务器发送请求："+req.url)//这里返回两个内容 一个回返的是路径地址，另一个是 fivicon.ico
        res.writeHead(200,{"Content-type":"text/plain"});
        // var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');//读取html数据
        var myReadStream = fs.createReadStream(__dirname + '/person.json','utf8');//读取html数据
        myReadStream.pipe(res)//输入出管道 127.0.0.1:3000 展示是是一个乱码 手机转utf-8会看到页面是writeMe2.txt 内容
    }
})

server.listen(3000,'127.0.0.1')
console.log("Server is runing...")