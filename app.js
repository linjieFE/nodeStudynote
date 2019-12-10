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
    if(req.url !=='/favicon.ico'){
        //判断用户所访问的页面地址
        if(req.url ==='/home' || req.url ==='/'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname + '/index.html').pipe(res)
        }else if(req.url ==='/contact'){
            res.writeHead(200,{"Content-type":"text/html"});
            fs.createReadStream(__dirname + '/contact.html').pipe(res)
        }else if(req.url ==='/api/docs'){
            var data=[{name:"Jenny",age:'18'},{name:"Zoe",age:'9'}]
            res.writeHead(200,{"Content-type":"application/json"});//写入文件头
            res.end(JSON.stringify(data));//end 方法展示内容
        }
    }
})

server.listen(3000,'127.0.0.1')
console.log("Server is runing...")