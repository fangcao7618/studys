廖雪峰的官方网站[http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014735914606943e2866257aa644b4bdfe01d26d29960b000]

1.koa-guide[https://github.com/guo-yu/koa-guide]

2.koa实战[http://book.apebook.org/minghe/koa-action/start/router.html]

3.koa-ejs[https://wohugb.gitbooks.io/koajs/content/template/koa-ejs.html]

4.koa + socket.io 制作简易聊天室[http://www.alloyteam.com/2015/04/koa-socket-io-zhi-zuo-jian-yi-liao-tian-shi/]

5.websocket.org[http://www.websocket.org/echo.html]

（https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log）

一般情况下我们用来输入信息的方法主要是用到如下四个

1、console.log 用于输出普通信息

2、console.info 用于输出提示性信息

3、console.error用于输出错误信息

4、console.warn用于输出警示信息

5、console.debug用于输出调试信息

console对象的上面5种方法，都可以使用printf风格的占位符。不过，占位符的种类比较少，只支持字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）四种。

如：console.log("%d年%d月%d日",2011,3,26);

console.log("圆周率是%f",3.1415926);

var dog = {}; dog.name = "大毛"; dog.color = "黄色"; console.log("%o", dog);

var mytable = document.getElementById('Label3'); console.dirxml(mytable);