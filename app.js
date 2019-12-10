//通过http模块，创建本地服务器

var http= require("http");

//创建服务器方法
var server = http.createServer(function(request, res){
    console.log("客户端向服务器发送请求："+request.url)
    res.writeHead(200,{"Content-type":"text/plain"});//请求头text/plain=纯文本
    res.end("Server is working!")//重启动后查看浏览器，http://127.0.0.1:8888/ 页面显示response信息 Server is working!
})

//服务对象监听服务器地址以及端口号
server.listen(8888,"127.0.0.1");

console.log("server is running");//执行