# 网络

[TOC]

## 基础理论

### 互联网起源

1. 起源
   - 1969年
   - 加利福尼亚大学洛杉矶分校，斯坦福大学，加利福尼亚大学，犹他州大学
2. 互联网——Internet(音译：英特网，因特网)，**网际网路**
3. 1989年，欧洲粒子物理研究所——协议（格式），WWW(World Wide Web，万维网)，互联网突飞猛进的变化
4. 互联网普及（商用、民用），1991年

### 局域网

1. 计算机与电脑的区别
   - 计算机包含电脑，电脑不包含计算机
2. **冯诺依曼式计算机**
   - 运算器
     - CPU（逻辑运算、整数运算）、GPU(显卡)（浮点运算）
   - 存储器
     - 内存（断电数据清空，读写速度快）
     - 硬盘（辅存）：数据可以持久化、读写速度相对较慢
   - 控制器
     - 主板上的一些器件
   - 输入设备
     - 键盘、鼠标、麦克风、网口
   - 输出设备
     - 显示器、耳机、网口
3. 冯诺依曼——计算机之父；图灵——计算机科学之父
4. 局域网内的机器可以相互连通，跨局域网之间的机器无法相互连通

### IP地址与公网

1. IP地址
   - 格式：`xxx.xxx.xxx.xxx`，分为四个段，每个段0~255，即每个段都是由8个0或1组成
   - 分类：一个IP地址分为两个部分：网络ID、主机ID
     - A类：0.0.0.0 ~ 127.255.255.255（一个网络能有1600万家台）
     - B类：128.0.0.0 ~ 191.255.255.255（172.16.0.0 ~ 172.31.255.255，私人IP）
     - C类：192.0.0.0 ~ 223.255.255.255（192.168.xxx.xxx）
     - D类：多播地址
     - E类
2. 如果想搭建一个服务器，那么必须有一个公网IP

### 域名与DNS解析过程

1. 能通过域名直接访问到一台机器吗？

   不能

2. 用域名与IP形成对应关系

   - 首先，计算机是不知道域名对应的IP
   - 问路由器，如果路由器认识这个域名，就返回一个IP，然后计算机访问这个IP
   - 如果路由器不认识，就访问上一层路由器
   - 如果访问到城市级别的路由器时还不认识这个域名，则访问该城市的DNS服务器
   - 如果DNS不认识这个域名，则继续向上一级DNS服务器查找（互联网建立的时候，设立了13台总的DNS服务器）

3. 当浏览器的地址栏中输入一个URL 按回车之后，网络中都发生了什么？

   - 看浏览器缓存
   - 本机host（不缓存IP/域名映射）
     - `C:window/syetem32/drivers/etc/host`
     - `127.0.0.1 localhost`：本机
     - `0.0.0.0`：代表不知道IP地址，当不知道IP时，默认寻找本机，建议使用`127.0.0.1`
   - 家里路由器
   - 上级路由器 --> 城市的LDNS（Local DNS）服务器
   - 继续向上级的DNS服务器查找
   - GDNS（Global DNS）服务器

### 五层网络模型

1. 五层网络模型

   - 应用层（HTTP协议、DNS协议）
   - 运输层（TCP协议/UDP协议）
   - 网络层（IP地址 —— IP协议）
   - 数据链路层 (mac地址)
   - 物理层 （定义数据传输的介质以及数据传输频率）

2. 发送一个消息

   ```javascript
   //格式
   TCP/IP协议(对方的IP,自己的IP,对方的端口) HTTP协议(请求头) hello
   ```

### HTTP协议

1. HTTP协议分为两个部分：

   - 请求：Request

     - 请求头：请求方式 路径(不带域名) 协议版本
     - 数据体

   - 相应：Response

     - 响应头：协议版本 状态码 信息

       ​				属性：值

       ​				……

     - 数据体

### GET与POST的区别

1. 是基于什么前提的？

   - 如果什么前提都没有，不使用任何规范，只考虑语法和理论上的HTTP协议，则GET与POST几乎没有什么区别，只有名字不一样

   - 如果是基于RFC规范的

     （1）理论上的(specification)

     ​		GET与POST具有相同的语法，但是有不同的语义，GET是用来获取数据的，POST是用来发送数据的，其他方面没有任何区别

     （2）实践上的(implementation)：各种浏览器，就是这个规范的实现着

     - GET的数据在URL是可见的，POST请求是不显示在URL中
     - GET请求对长度是有限制的，POST 的西长度是无限制的
     - GET请求的数据可以收藏为书签，POST请求的数据不能收藏为书签
     - GET请求后，按后退按钮、刷新按钮无影响；POST数据会被重新提交
     - GET编码类型：`application/x-www-form-url`；POST的编码类型：有很多种
       - `encodeapplication/x-www-form-urlencoded`(POST编码类型)
       - `multipart/form-data`(POST编码类型)：这种类型可以发送文件
     - GET的历史参数会被保存在浏览器中，POST不会保存在浏览器中
     - GET只允许ACSII编码，不允许中文；POST没有编码限制，允许发二进制
     - GET与POST相比，GET的安全性较差，因为所发的数据是URL的一部分

### cookie与session

1. 如果使用JS的变量来存数据，那么在页面关闭的时候，数据就消失了

2. 保持登录状态是怎么做到的?

   按照正常的HTTP协议是无法做到的，因为HTTP协议是上下文无关协议

   所以说前端页面上，要有可以持久化村存储数据的东西，一旦登录成功，就记录在里面，这个东西就是**cookie**

3. **cookie**是有限制的

   cookie是存在浏览器中的，不是存在某个页面上的，是可以长期存储的

   cookie即使是保存在浏览器中的，也是存放在不同的域名下的

4. 使用cookie登录流程

   ```javascript
   // 1.初始状态：未登录
   // 2. 访问百度的登录：输入用户名、密码
   // 3. 如果用户名和密码是正确的，百度的后端会向这个域名下，设置一个cookie，写入用户的基本信息（加密的）
   // 4. 以后每一次向百度发送请求，浏览器都会自动带上这些cookie
   // 5. 服务端（后端）看到了带有ID的cookie，就可以解析这个加密ID，来获取到这个用户本身的ID
   // 6. 如果能获取到本身的ID，那么久证明这个用户已经登录过了，所以后端就可以继续保留用户信息
   
   // 缺点：如果本机浏览器中的cookie被复制，那么就可以在别的电脑上登录账号
   ```

5. session

   session是存在服务器端的，安全性较高，不容易被复制

   缺点：

   ​	在用户量很大的时候，服务器端的资源会被大量消耗（存在内存中） —— 因为后端可能不止一台服务器，用户的登录信息一般只存在一台服务器上（用户的登录操作，在哪台机器上执行的，一般就存在哪台机器上，需要通过反向代理（轮询（该方式无法适用于session登录），IP哈希））

### 论页面的正确打开方式

1. B/S与C/S

   - C/S：Client / server，Client只负责内容的展示，Server负责提供内容
   - B/S：Browser / Server，Browser只负责内容的展示，Server负责提供内容

2. 页面的本质是什么？

   页面的本质就是一个带有HTML格式的字符串 

3. 浏览器向服务器请求一个页面的本质是什么？

   - `www.baidu.com`
   - 服务器接收到请求后，服务器想要把这个`页面的内容（HTML格式的字符串）`，返回给浏览器
   - 页面的字符串存在哪里呢？ --> 存在HTML文件里，例如：index.html
   - 服务器端读取文件
   - 将读取出的内容返回给浏览器
   - 最后返回的是一个字符串，这个字符串的来源可能是文件，可能是缓存，可能是数据库

4. 服务器：严格的说，服务器是一台计算机，只提供服务（不是用户用的）

   但是，我们常说的服务器，指的是服务容器，不是服务器

5. 服务容器：是一个程序，程序可以监听一个端口，读物文件，并且返回

6. 如果想通过访问服务器（服务容器）的方式，来访问自己写的页面，那么就需要安装一个服务容器程序

## 实战应用

### 安装`WebServer`插件

1. `webStrom`：不需要安装插件，自带服务容器插件
2. `vscode`：`live-server`
3. `subline`：`subline server`

### 发送网络请求

1. 发送网络请求的方式

   - 在浏览器中直接输入地址（无法使用代码控制）

   - `location.href = 'url'`：可以发出网络请求，但是页面会发生跳转（页面会跳转）

   - 带有`src`属性的标签：请求可以发出，服务端是可以处理也可以返回，但是返回之后，能否被应用还需看浏览器，`img`、`script`（无法处理返回结果）

   - 带有`href`属性的标签：请求可以发出，服务端是可以处理也可以返回，但是返回之后，能否被应用还需看浏览器，`link`、`a`（无法处理返回结果）

   - 带有`action`属性的标签：如`form`表单，也可以像后端发出请求，但是`form`表单发出请求之后，也会页面跳转（页面会跳转）

   - `ajax`（能用代码控制，页面不会跳转，服务器端返回的数据也可以使用JS进行处理）

     ```javascript
     // 请求要点
     // 1）请求方式：get/post
     // 2）url
     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
     xhr.open('get','http://developer.duyiedu.com/edu/testAjax');// 存在跨域错误
     ```

### 跨域

1. 哪些东西属于可跨域请求的资源？

   `src`属性的资源都是可以被跨域请求的，`href`资源大部分都是可以被跨域请求的

2. 哪些资源算跨域请求的资源

   - 后端接口的资源
   - 其他域的cookie
   - 其他域的缓存

3. 什么是其他的域？怎样算跨域？

   页面本身：有协议、域名、端口

   要请求的数据：`http://www.baidu.com:80`

   `跨域`是当协议、域名、端口号任一不一样就是跨域

4. 跨域这个行为发生在哪里？

   - 即使跨域了，请求也可以发出
   - 服务器端也是可以接收到额
   - 服务器端也是可以正常处理的
   - 服务器端也是可以正常返回数据的
   - 浏览器也能接收到这些数据
   - 接收到数据之后，发现当前页面的域与请求的域不同，所有判定为跨域
   - 我们的代码在等待结果，但是因为浏览器判定跨域了，不会把结果传递给我们的代码

5. 虽然跨域了，但是我们依然需要这个数据，怎么办（如何解决跨域问题）？

   **后端配合进行跨域**

   - `jsonp`（正常情况下，返回的数据是`json`格式，`jsonp`是一种特殊的格式）
   - 后端设置`Access-Control-Allow-Origin`属性支持跨域

   **后端不配合进行跨域**

   - `iframe`：只能显示，不能控制
   - 通过后端代理（自己的后端）

### 原生JS发送ajax

```javascript
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHttp");
xhr.open('get','http://developer.duyiedu.com/edu/testAjaxCrossOrigin', true);
xhr.onreadystatechange = function() {
    // readyState === 4 表示自请求完成，已经接收到数据
    // status === 200 网络请求，结果都会有一个状态码，来表示这个请求是否正常
    if (xhr.readySate === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
xhr.send();
```

1. http状态码
   - `2xx`：表示成功
   - `3xx`：表示重定向
   - `4xx`：表示客户端错误，404——页面未找到
   - `5xx`：服务器端错误
2. 同步与异步
   - 在计算机世界里，异步与同步和现实世界是相反的
   - 在计算机世界里，同步表示串行，异步表示并行，可以理解为同线程与异线程

### JSOP的使用与特性

1. JSOP的格式特殊？
   - 发送的时候，会带上一个callback参数
   - 返回的不是json：callback的名字 + （+ json + ）
   
2. JSPNP跨域只能使用get方法，如果使用的是post方法，jquery会自动转为get方法

3. 是不是在jsonp里面只能使用jsonp方法？是不是设置的post方法都会转为get方法？

   不是

   - jquery会先判断是否同源，如果同源，那么设置的get就是get，设置的post就是post
   - 如果不是同源，无论设置为什么，都改为get

### JSONP原理

1. `script`标签，有src属性，可以跨域请求

   `script`标签虽然可以引用其他域的资源，浏览器不限制，但是，浏览器会将其返回的内容，作为js代码执行

2. JSONP原理

   - 判断请求域与当前页面域是否同源，如果同源则发送正常的ajax，不进行跨域请求

   - 如果不同源，生成一个script标签

   - 再生成一个随机的callback名字，还需创建一个名为这个的方法

   - 设置script标签的src，设置为要请求的接口 —— 通过标签的src、href请求资源的方式均为get请求

   - 将callback作为参数拼接在后面 

     ---------------------------------------==以上为前端部分==--------------------------------------------------------------------
     
   - 后端接收到请求后，开始准备要返回的数据‘
   
   - 后端拼接数据，将要返回的数据用callback的值和括号包裹起来，如`callback = asd123456`要返回的数据为`{"a":1,"b":2}`，则要拼接为`asd123456({"a":1,"b":2})`
   
   - 将内容发返回
   
     ---------------------------------------==以上为后端部分==--------------------------------------------------------------------
   
   - 浏览器接受到内容，会当做js代码执行
   
   - 从而执行名为asd123456的方法，这样就接受到了后端返回的对象     

```javascript
function ajax(option) {
    var url = option.url,
        type = option.type,
        dataType = option.dataType,
        targetProtocol = '', // 目标协议
        targetHost = ''; // 目标域名
    // 如果url中不带有http，那么一定是相对路径，相对路径一定是同源的
    if (url.indexOf('http://')===0 || url.indexOf('https://') === 0) {
        var targetUrl = new URL(url);
        targetProtocol = url.protocol;
        targetHost = url.host;
    } else {
        targetProtocol = location.protocol;
        targetHost = location.host;
    }
    
    // 判断请求是否是jsonp，若不是，则发送正常ajax请求
    if (dataType === 'jsonp') {
        // 判断是否是同源，拖同源，则发送正常的ajax
        if (targetProtocol === location.protocol && targetHost === location.host) {
            // 同源，发送正常ajax
        } else {
            // 获得一个随机的callback名称
            var callback = 'cb' + Math.floor(Math.random() * 1000000);
            // 创建一个callback函数
            window[callback] = option.success;
            //创建script标签
            var script = document.createElement('script');
            var param = url.indexOf('?') === -1 ? '?callback=' + callback : '&callback=' + callback;
            script.src = url + param;
            document.head.appendChild(script);
        }
    } else {
       // 发送正常ajax
    }
    
}

ajax({
     url: 'http://developer.duyiedu.com/edu/testJsonp',
     type: 'get',
     dataType: 'jsonp',
     success: function (data) {
         console.log(data);
     }
});
```







   

























