# React

[TOC]

## 概述

### React简介

[官网]( https://react.docschina.org/ )

1. 什么是React?

   React是有Facebook研发的，用于**解决UI复杂度**的开源Javascript库，目前由React联合社区维护。

   > 它不是框架，只是为了解决UI复杂度而诞生的一个库

2. React的特点

   - 轻量：React的开发版所有源码（包含注释）仅3000多行
   - 原生：所有的React的代码都是用原生JS书写而成，不依赖其他库
   - 易扩展：React对代码的封装程度较低，也没有过多的使用魔法，所有React中的很多功能可以扩展
   - 不依赖宿主环境：React只依赖原生的JS语言，不依赖任何其他东西，包括运行环境。因此，它可以被轻松的移植到浏览器、桌面应用、移动端
   - 渐进式：React并非框架，对整个工程没有强制约束力。这对与那些以存在的工程，可以逐步的将其改造为React，而不需要全盘重写
   - 单向数据流：所有的数据自顶而下的流动
   - 用JS代码声明界面
   - 组件化

3. 对比Vue

   | 对比项 |   Vue   |   React   |
   | :----: | :--: | :--: |
   |   全球使用量     |  | √ |
   |    国内使用量    | √ |      |
   |    性能    | √ | √ |
   |     易上手   | √ |      |
   |   灵活度     |      | √ |
   | 大型企业 | | √ |
   | 中/小型企业 | √ |  |
   | 生态 | | √ |

4. 学习路径

   整体原则：熟悉API --> 深入理解原理

   1. React
      1. 基础：掌握React的基本使用方法，有能力制作各种组件，并理解其基本的运作原理
      2. 进阶：掌握React中的一些黑科技，提高代码质量
   2. React-Router：相当于 vue-router
   3. Redux：相当于vuex
      1. Redux本身
      2. 各种中间件
   4. 第三方脚手架：umi
   5. UI库：Ant Design，相当于Vue的Element-UI 或 IView
   6. 源码分析
      1. React源码分析
      2. Redux源码分析

### Hello Wrold

```html
 <!-- ... 其它 HTML ... -->

  <div id="root"></div>
  <!-- 加载 React。-->
  <!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
  <!-- script标签中加入crossorigin属性的主要目的是为了更详细的显示错误信息 -->
  <!-- React的核心库，与宿主环境无关 -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <!-- 依赖核心库，将核心的功能与页面结合 -->
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
  <!-- 编译JSX -->
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script>
      ReactDOM.render('Hello world', document.getElemetById('root'));
  </script>
```

1. `React.createElement`：React核心库中的方法

   创建一个**React**元素，称作虚拟DOM，本质上是一个对象

   1. 参数1：元素类型，如果是字符串，就是一个普通的html元素
   2. 参数2：元素的属性，一个对象
   3. 后续参数：元素的子节点

   ```javascript
   var h1 = React.createElement("h1", {
       title: "第一个React元素"
   }, "hello world");
   
   var span = React.createElement('span', {}, '这是一个span元素')
   ```

2. JSX

   JS的扩展语法，需要用babel进行转义

   ```html
   <script type="text/babel">
   	var span = <span>一个span元素</span>
   	var h1 = <h1 title="第一个React元素">Hello World  <span>一个span元素</span></h1>
   	ReactDOM.render(h1, document.getElemetById('root'));
   </script>
   ```

3. `ReactDOM.render`：React-dom库中的方法，负责将React元素渲染成真实的DOM元素

### 使用脚手架

1. 脚手架类型
   - 官方：create-react-app
   - 第三方：next.js、umi.js
2. 凡是使用JSX的文件，必须导入React
3. React项目支持`.js, .jsx`文件

```javascript
yarn create react-app project-name
```

### 开发环境搭建

1. vscode配置

   emmet配置：文件 --> 首选项 --> 设置 --> emmet

   ```json
   "javascript":"javascriptreact"
   ```

2. vscode插件安装

   - ESLint：代码风格检查
   -  ES7 React/Redux/GraphQL/React-Native snippets：快速代码编写

3. chrome插件安装

   - React Developer Tools

## 核心概念

### JSX语法

1. 什么是JSX语法？

   - FaceBook起草的JS扩展语法

   - 本质是一个JS对象，会被babel编译，最终会转换成createElement

   - 每个JSX表达式，**有且仅有一个根节点**，若想创建一个不影响页面结构的额根节点，使用`React.Fragment`

     ```javascript
     const h1 = (
     	<>
         	<h1>Hello World <span>span元素</span></h1>
         	<p>p元素</p>
         </>
     );
     // 等同于
     const h1 = (
     	<React.Fragment>
         	<h1>Hello World <span>span元素</span></h1>
         	<p>p元素</p>
         </React.Fragment>
     );
     ```

   - 每个JSX元素必须结束（XML规范）

2. 在JSX中嵌入表达式

   - 在JSX使用注释`{/* 注释 */}`
- 将表达式作为内容的一部分
  
  - `null、undefined、false`不显示
     - 普通对象，不可以作为子元素
     - 可以放置React元素对象
     - 表达式中的值为数组时，会将数组的每一项进行遍历并渲染，需要添加key属性
   - 将表达式作为元素属性
   - 属性使用**小驼峰命名法**
   - 防止注入攻击
     - 自动编码
     - dangerouslySetInnerHTML
  
3. 元素的不可变性

   - 虽然JSX元素是一个对象，但是该对象中的所有属性不可更改
   - 如果确实需要更改元素的属性，需要重新创建JSX元素

```javascript
     
	// 将表达式作为内容的一部分
	 const a = 111;
     const b = 2222;
     const obj1 = {
         a: 1,
         b: 2
     };
     const obj2 = (<span>span元素</span>);
                   
     const numbers = (new Array(30)).fill(0).map((item, i) => {
         return (<li key={i}>{i}</li>)
     })
                   
     
     const div = (
     	<div>
         	{ a } * { b } = { a*b }
         </div>
     	<p>
         	{ /* 普通对象无法放置 */ }
         	{ obj1 } // 出错
         </p>
     	<p>
         	{ obj2 } // 渲染
         </p>
		<ul>
         	{ numbers }    
         </ul>
     );
     
     // 等价于即内部会编译成
     React.createElement('div', {}, `${a} * ${b} = ${ a * b }`)

// 将表达式作为元素属性
const url = '....';
const cls = 'image';

cosnt div = (
	<div>
    	<img alt="" src={ url } className={ cls } style={ {width:"100px",height:"200px" } } />
    </div>
);

// 防止注入攻击
const content = '<h1>sdfdsfds</h1><p>dsfdsgfhgh</p>';
const div = (
	<div>
    	{/* content中的标签元素会被自动编码 */}
    	{content}
    </div>
);

const div = (
	<div dangerouslySetHTML={{
    	__html: content
    }}>
    </div>
);

// 元素的不可变性
let num = 1;
const div = (
	<div title="标题">{ num }</div>	
);

console.log(div.props.children); // 1

div.props.children = 2; // 报错
div.props.title = '测试'; // 报错

ReactDOM.render(div, document.getElementById('root'));

// 若是需要改变，则粗腰重新徐然
num = 2;
div = (
	<div title="标题">{ num }</div>	
);
ReactDOM.render(div, document.getElementById('root'));
```

### 组件和组件属性

**组件**：包含内容、样式和功能的UI单元

1. 创建组件

   **特别书注意：组件的名称首字母必须大写**

   1. 函数组件

      ```javascript
      function MyFuncComp() {
          return (<h1>组件内容</h1>)
      }
      
      // 使用组件
      ReactDOM.render((
      	<div>
          	{ /* 方式1：使用函数调用的方式使用，不推荐，因为呈现不出组件结构 */ }
          	{ MyFuncComp() }
               { /* 方式2，推荐使用 */ }
      		<MyFuncComp />
          </div>
      ) ,document.getElementById('root'));
      ```

   2. 类组件

      - 必须继承`React.Component`
      - 必须提供`render`函数，用于渲染组件

      ```javascript
      // MyClassComp.js
      import React from 'react';
      
      export default class MyClassComp extends React.Component {
          
          // 该方法必须返回React元素
          render() {
              return (<h1>类组件内容</H1>)
          }
      }
      
      // index.js
      import MyClassComp from './MyClassComp.js'
      
      ReactDOM.render((
      	<div>
          	<MyClassComp />
          </div>
      ), document.getElementById('root'));
      ```

2. 组件的属性

   **注意：组件的属性应该使用小驼峰命名法**

   - 对于**函数组件**，属性会作为一个对象的属性，传递给函数的参数
   - 对于**类组件**，属性会作为一个对象的属性，传递给构造函数的参数

   **组件无法改变自身的属性**

3. React中的哲学：数据属于谁，谁才有改动的权利（单向数据流）

   **React中的数据，是自顶向下流动**

### 组件状态

**组件状态**：组件可以自行维护的数据

1. 组件状态**仅在类组件中有效**

2. 状态(state)，本质上，是类组件的一个属性，是一个对象

3. 状态初始化

   - 在构造函数中初始化

     ```javascript
     constructor(props) {
         super(props);
         // 初始化状态
         this.state = {
             left: this.props.number
         };
         this.timer = setInterval(() => {
             // 会将状态进行混合
             this.setState({
                 left: this.state.left - 1
             });// 重新设置状态，触发自动重新渲染
             if (this.state.left === 0) {
                 clearInterval(this.timer);
             }
         }, 1000);
     }
     ```

   - 使用类属性进行初始化

     ```javascript
     export default class Tick extends React.Component {
         // 初始化状态，JS Next 语法，目前处于试验阶段
         // 该属性创建会在构造函数结束之后
         state={
             left: this.props.number
         }
     }
     ```

4. React中不能直接改变状态：因为React无法监控到状态发生了变化

   状态的变化，必须使用`this.setState({})`来改变

   一旦调用`this.setState`，组件就会重新渲染

   ***猜想***：`this.setState`方法，改变状态是同步进行的，重新渲染组件是异步进行的

5. 组件中的数据

   - props：该数据是由组件的使用者传递的数据，所有权不属于组件本身，因此组件无法改变该数据
   - state：该数据是由组件自身创建的，所有权属于组件自身，因此组件有权改变该数据

### 事件

在React中，组件的事件，本质上就是一个属性

按照之前Ract组件的约定，由于事件的本质是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this指向undefined**

- 使用bind函数，绑定this
- 使用箭头函数

```javascript
function handleClick(e) {
    console.log('click');
    console.log(e);
}

// 内置html组件的事件与原生dom一一对应，只是命名方式变为了小驼峰命名法
// 在React中事件的本质就是一个属性并赋值为函数，然后在合适的时候，调用该函数，实现回调
	// 只是在React内置组件中做了相应的回调处理，而自定义组件中需要自己定义回调的时机
cosnt btn = (
	<button onClick={this.handleClick}></button>
	<button onClick={ (e) => {  console.log(e); } }></button>
);


// 处理事件中的this问题

// 1. bind函数
constructor(props) {
    // 将原型上的事件处理函数绑定好this赋值到对象上
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleOver = this.handleOver.bind(this);
}

cosnt btn = (
    // 这种处理方式，效率较低，因为每次重新渲染都要生成一个新的函数
	<button onClick={this.handleClick.bind(this)}></button>
);

// 2、箭头函数
handleClick = () => {
    // 根据es6语法，handleClick会成为对象的一个属性，而箭头函数的指向为外层非箭头函数的this指向
    console.log(this);
}

```







