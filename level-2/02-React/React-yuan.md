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

### 深入认识setState

1. setState，它对状态的改变，**可能**是异步的
   
   - 如果改变状态的代码处于某个HTML元素的事件中，则其实异步的
   - 否则，是同步的，即执行完setState之后立即同步状态并执行render函数，然后再执行setState后面的代码
2. 如果遇到某个事件中，需要同步调用setState多次，需要使用函数的方式得到最新状态
3. 最佳实践
   1. 把所有的setState当做异步处理
   
   2. 永远不要信任setState调用之后的状态
   
   3. 如果要使用改变之后的状态，需要使用回调函数( setState的第二个参数 )
   
   4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态 ( setState的第一个参数 )
   
      **个人理解**：该种方式与第一个参数为对象形式的调用方式相比
   
      - 前者，每次函数状态改变函数均会对state进行改变，待所有状态改变完成后，触发render
      - 后者，将多次状态改变完成后，再统一对stete进行改变，然后触发render
4. React会对**异步的setState**进行优化：将多次setState进行合并（将多次状态改变完成后，再统一对stete进行改变，然后触发render）

```javascript
import React, { Component } from 'react'

export default class Comp extends Component {

    state = {
        n: 0
    }

	// 情景1
    handleClick = () => {
        this.setState({
            n: this.state.n + 1
        }, () => {
            //状态完成改变之后触发，该回调运行在render之后
            console.log(this.state.n);
        });
    }
    
    // 情景2
    handleClick = () => {
        this.setState(cur => {
            //参数cur表示当前的状态
            //该函数的返回结果，会混合（覆盖）掉之前的状态
            //该函数是异步执行
            return {
                n: cur.n + 1
            }
        }, ()=>{
            //所有状态全部更新完成，并且重新渲染后执行
            console.log("state更新完成", this.state.n);
        });

        this.setState(cur => ({
            n: cur.n + 1
        }));

        this.setState(cur => ({
            n: cur.n + 1
        }));
    }
    
    // 情景3
    // constructor(props) {
    //     super(props);
    //     setInterval(() => {
    	   // 此处，非事件处理函数中，setState同步执行
    //         this.setState({
    //             n: this.state.n + 1
    //         });

    //         this.setState({
    //             n: this.state.n + 1
    //         });
    //         this.setState({
    //             n: this.state.n + 1
    //         });
    //     }, 1000)
    // }

    render() {
        console.log("render");
        return (
            <div>
                <h1>
                    {this.state.n}
                </h1>
                <p>
                    <button onClick={this.handleClick}>+</button>
                </p>
            </div>
        )
    }
}
```

### 生命周期

**生命周期**：组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。React在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行

**生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻销毁**

#### 旧版生命周期

指的是：React版本 < 16.0.0

<img src="./React-yuan.assets/image-20191104180104762.png" alt="image-20191104180104762" style="zoom:80%;" />

1. constructor
   - 同一个组件对象只会创建一次
   - 不能在第一次**挂载到页面之前**，调用setState，为了避免问题，构造函数中严禁使用setState
2. componentWillMount**（16版本以上已移除）**
   - 和构造函数一样，它只会运行一次
   - 可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能会调用多次
3. **render**
   - 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
   - render可能不止运行一次，只要需要重新渲染，就会运行
   - 严禁使用setState，因为可能会导致无限递归渲染
4. **componentDidMount**
   - 只会执行一次
   - 可以使用setState
   - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
5. componentWillReceiveProps**（16版本以上已移除）**
   - 即将接收新的属性值，指属性被重新赋值
   - 参数为新的属性对象
   - 该函数可能会产生一些bug，**不推荐使用**
6. **shouldComponnetUpdate**
   - 指示React是否要重新渲染该组件，通过返回true和false来指定
   - 默认情况下，返回true
7. componentWillUpdate**（16版本以上已移除）**
   - 组件即将被重新渲染
8.  componentDidUpdate 
   - 往在该函数中使用dom操作，改变元素
9. **componentWillUnmount** 
   -  通常在该函数中销毁一些组件依赖的资源，比如计时器 

#### 新版生命周期

指的是：React版本 >= 16.0.0

React官方认为，某个数据的来源必须是单一的

React16废弃的三个生命周期函数

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

![react新版生命周](React-yuan.assets/react%E6%96%B0%E7%89%88%E7%94%9F%E5%91%BD%E5%91%A8.png)

1. getDerivedStateFromProps
   - 通过参数可以获取新的属性和状态
   - 该函数是静态的
   - 该函数的返回值会覆盖掉组件状态
   - 该函数几乎没有什么作用
2. getSnapshotBeforeUpdate
   - 真实的DOM构建完成，但是还未实际渲染到页面中
   - 在该函数中，通常用于实现一些附加的DOM操作
   - 该函数的返回值，会作为componentDidUpdate的第三个参数

### 传递元素内容

1. 内置组件：div、p、h1等

   ```html
   <div>
       元素内容
   </div>
   ```

2. 自定义组件

   如果给自定义组件传递元素内容，则React会将元素内容作为children属性传递过去

   ```javascript
   // index.js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import Comp from "./Comp"
   
   ReactDOM.render((
       <Comp content1={<h2>第2组元素内容</h2>} content2={<h2>第3组元素内容</h2>}>
   
           <h2>第1组元素内容</h2>
   
       </Comp>
   ), document.getElementById('root'));
   
   // Comp.js
   import React from 'react'
   
   export default function Comp(props) {
       console.log(props);
       return (
           <div className="comp">
               <h1>组件自身的内容</h1>
               {/* {props.children || <h1>默认值</h1>} */}
               {props.children}
               {props.content1}
               {props.content2}
           </div>
       )
   }
   ```

### 表单

   1. 受控组件和非受控组件
      - 受控组件：组件的使用者，有能力完全控制该组件的行为和内容。通常情况下，受控组件往往没有自身的状态，其内容完全受到属性的控制
      - 非受控组件：组件的使用者，没有能力控制该组件的行为和内容，组件的行为和内容完全自行控制
   2. **表单组件**，默认情况下是非受控组件，一旦设置了表单组件的value属性，则其变为受控组件(单选和多选框需要设置checked属性)

## React进阶

### 属性默认值和属性类型检查

1. 属性默认值

   通过一个**静态属性**`defaultProps`告知React属性默认值

   ```javascript
   // 函数组件
   import React from 'react'
   
   export default function FuncDefault(props) {
       console.log(props);//已经完成了混合
       return (
           <div>
               a:{props.a}，b:{props.b}，c:{props.c}
           </div>
       )
   }
   //属性默认值
   FuncDefault.defaultProps = {
       a: 1,
       b: 2,
       c: 3
   }
   
   // 类组件
   
   import React from 'react'
   
   export default class ClassDefault extends React.Component {
   
       static defaultProps = {
           a: 1,
           b: 2,
           c: 3
       }
   
       constructor(props) {
           super(props);
           console.log(props);
       }
   
       render() {
           return (
               <div>
                   a:{this.props.a}，b:{this.props.b}，c:{this.props.c}
               </div>
           )
       }
   }
   // //属性默认值
   // ClassDefault.defaultProps = {
   //     a: 1,
   //     b: 2,
   //     c: 3
   // }
   ```

2. 属性类型检查

   使用库`prop-types`

   对组件使用静态属性`propTypes`告知React如何检查属性

   ```javascript
   PropTypes.any：//任意类型
   PropTypes.array：//数组类型
   PropTypes.bool：//布尔类型
   PropTypes.func：//函数类型
   PropTypes.number：//数字类型
   PropTypes.object：//对象类型
   PropTypes.string：//字符串类型
   PropTypes.symbol：//符号类型
   
   PropTypes.node：//任何可以被渲染的内容，字符串、数字、React元素
   PropTypes.element：//react元素
   PropTypes.elementType：//react元素类型
   PropTypes.instanceOf(构造函数)：//必须是指定构造函数的实例
   PropTypes.oneOf([xxx, xxx])：//枚举
   PropTypes.oneOfType([xxx, xxx]);  //属性类型必须是数组中的其中一个
   PropTypes.arrayOf(PropTypes.XXX)：//必须是某一类型组成的数组
   PropTypes.objectOf(PropTypes.XXX)：//对象由某一类型的值组成
   PropTypes.shape(对象): //属性必须是对象，并且满足指定的对象要求
   PropTypes.exact({...})：//对象必须精确匹配传递的数据
   
   //自定义属性检查，如果有错误，返回错误对象即可
   属性: function(props, propName, componentName) {
      //...
   }
   ```

   ```javascript
   import React, { Component } from 'react'
   import PropTypes from "prop-types";
   
   export class A {
   
   }
   
   export class B extends A {
   
   }
   
   export default class ValidationComp extends Component {
       //先混合属性
       static defaultProps = {
           b: false
       }
   
       //再调用相应的函数进行验证
       static propTypes = {
           a: PropTypes.number.isRequired,  //a属性必须是一个数字类型,并且必填
           b: PropTypes.bool.isRequired, //b必须是一个bool属性,并且必填
           onClick: PropTypes.func, //onClick必须是一个函数
           c: PropTypes.any, //1. 可以设置必填   2. 阵型保持整齐（所有属性都在该对象中）
           d: PropTypes.node.isRequired, //d必填，而且必须是一个可以渲染的内容，字符串、数字、React元素
           e: PropTypes.element, //e必须是一个React元素
           F: PropTypes.elementType, //F必须是一个组件类型
           g: PropTypes.instanceOf(A), //g必须是A的实例
           sex: PropTypes.oneOf(["男", "女"]), //属性必须是数组当中的一个
           h: PropTypes.arrayOf(PropTypes.number), //数组的每一项必须满足类型要求
           i: PropTypes.objectOf(PropTypes.number), //每一个属性必须满足类型要求
           j: PropTypes.shape({ //属性必须满足该对象的要求
               name: PropTypes.string.isRequired, //name必须是一个字符串，必填
               age: PropTypes.number, //age必须是一个数字
               address: PropTypes.shape({
                   province: PropTypes.string,
                   city: PropTypes.string
               })
           }),
           k: PropTypes.arrayOf(PropTypes.shape({
               name: PropTypes.string.isRequired,
               age: PropTypes.number.isRequired
           })),
           m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
           score: function (props, propName, componentName) {
               console.log(props, propName, componentName);
               const val = props[propName];
               //必填
               if (val === undefined || val === null) {
                   return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`);
               }
               //该属性必须是一个数字
               if (typeof val !== "number") {
                   return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`);
               }
               const err = PropTypes.number.isRequired(props, propName, componentName);
               if(err){
                   return err;
               }
               //并且取值范围是0~100
               if (val < 0 || val > 100) {
                   return new Error(`invalid prop ${propName} in ${componentName}，${propName} must is between 0 and 100`);
               }
           }
       }
   
       render() {
           const F = this.props.F;
           return (
               <div>
                   {this.props.a}
                   <div>
                       {this.props.d}
                       <F />
                   </div>
               </div>
           )
       }
   }
   ```

### HOC

 **HOF**：Higher-Order Function, 高阶函数，以函数作为参数，并返回一个函数

**HOC**: Higher-Order Component, 高阶组件，以组件作为参数，并返回一个组件 

 通常，可以利用HOC实现**横切关注点** 

>  举例：
>
> 1. 20个组件，每个组件在创建组件和销毁组件时，需要作日志记录 
> 2. 20个组件，它们需要显示一些内容，得到的数据结构完全一致 

**注意**：

-  不要在render中使用高阶组件 
-  不要在高阶组件内部更改传入的组件 

**个人补充**

1. HOC组件的命名方式，一般为`with + 要分离的功能`，如`withLog、withLogin`等

2. 一般将传入的组件，不做任何改动的在render中显示

3. HOC组件中，导出的是一个函数组件，该组件运行后返回的组件可以是函数组件/类组件，如下

   ```react
   // withLog.js
   import React from "react";
   
   export default function withLog(Comp, str) {
     return class LoginWrapper extends React.Component {
       componentWillMount() {
         console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
       }
       componentWillUnmount() {
         console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
       }
       render() {
         return (
           <>
             <h1>{str}</>
             <Comp {...this.props} />
           </>
         );
       }
     };
   }
   
   // withLogin.js
   import React from "react";
   import PropTypes from "prop-types";
   
   export default function withLogin(Comp, title) {
     LoginWrapper.propTypes = {
       isLogin: PropTypes.bool.isRequired
     };
   
     function LoginWrapper(props) {
       if (props.isLogin) {
         return (
           <>
             <h1>{title}</h1>
             <Comp {...props} />
           </>
         );
       }
       return null;
     }
     return LoginWrapper;
   }
   ```

### ref

reference引用

1. 使用场景：希望直接使用DOM元素中的某个方法，后者希望直接使用自定义组件中的某个方法

   -  ref作用于内置的html组件，得到的将是真实的dom对象
   - ref用于类组件，得到的将是类的实例
   - ref不能用于函数组件（ref写的位置，不能是函数组件，函数组件内部可以使用）：React认为获得函数组件的引用没有意义

2. ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移除；

   目前，ref推荐使用功能对象或者函数

   **对象**

   - 通过`React.createRef`函数创建

   **函数**

   函数的调用时间

   1. `componentDidMount`时候会调用该函数

      在`componnetDidMount`事件中可以使用ref

   2. 如果ref的值发生了变动（旧函数被新函数替代），分别调用旧的函数和新的函数，时间点出现在`componentDidUpdate`之前

      - 旧的函数被调用时，传递null
      - 新的函数被调用时，传递对象

      ```react
        		<input type="text" ref={el => {
                  console.log('调用函数', el);
                  this.txt = el;
              }} />
              <button onClick={() => {
                  this.setState({});
              }}>测试</button>
      ```

   3. 如果ref所在的组件被卸载，会调用函数

3. **谨慎使用ref**

      能够使用属性和状态进行控制，就不要使用ref

      - 调用真实DOM对象中的方法
      - 某个时候需要调用类组件中的方法
            
      
```react
// 对象形式使用ref
import React, { Component } from "react";

class A extends Component {
  method() {
    console.log("调用了组件A的方法");
  }
  render() {
    return <h1>组件A</h1>;
  }
}

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.txt = React.createRef();
    this.compA = React.createRef();
  }

  handleClick = () => {
    console.log(this.compA.current);
    this.txt.current.focus();
    this.compA.current.method();
  };

  render() {
    return (
      <div>
        <input ref={this.txt} id="inp" type="text" />
        <A ref={this.compA} />
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    );
  }
}
// 函数形式使用ref
import React, { Component } from "react";

export default class Comp extends Component {
  state = {
    show: true
  };

  getRef = el => {
    console.log("函数被调用了", el);
    this.txt = el;
  };

  handleClick = () => {
      this.setState({
          show: !this.state.show
      });
  };

  componentDidMount() {
    console.log("didMount", this.txt);
  }

  render() {
    return (
      <div>
        {
            this.state.show && <input ref={this.getRef} type="text" />
        }
        <button onClick={this.handleClick}>获取焦点</button>
      </div>
    );
  }
}

```

### ref转发

1. 使用`fowardRef`方法
   1. 参数，传递的是**函数组件**，不能是类组件，并且，函数组件需要有第二个参数来得到ref
   2. 返回值，返回一个新的组件
2. ref转发的使用场景：当需要引用函数组件的内部元素，而非组件本身时

```react
import React, { Component } from "react";

function A(props, ref) {
  return (
    <>
      <h1 ref={ref}>A</h1>
      <p>{props.words}</p>
    </>
  );
}

const NewA = React.forwardRef(A);

export default class Comp extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log("componentDidMount", this.ARef);
  }

  render() {
    return (
      <div>
        {/* <A ref={this.ARef} /> */}
        <NewA ref={this.ARef} words="sfdsdfsadf" />
      </div>
    );
  }
}
```

```react
// 转发类组件（将类组件用函数组件进行包装后进行转发）
import React, { Component } from "react";

class A extends Component {
  render() {
    return (
      <h1 ref={this.props.forwardRef}>
        组件A
        <span>{this.props.words}</span>
      </h1>
    );
  }
}

const NewA = React.forwardRef((props, ref) => {
  return <A {...props} forwardRef={ref} />
});

export default class Comp extends Component {
  ARef = React.createRef();

  componentDidMount() {
    console.log("componentDidMount", this.ARef);
  }

  render() {
    return (
      <div>
        {/* <A ref={this.ARef} /> */}
        <NewA ref={this.ARef} words="sfdsdfsadf" />
      </div>
    );
  }
}
```

### context

上下文：context，表示做某一些事情的环境

1. React中的上下文特点

   - 当某个组件创建了上下文后，上下文中的数据，会被所有的后代组件共享
   - 如果某个组件依赖了上下文，会导致该组件不在纯粹（纯粹指的是：外部数据仅来源于属性props）
   - 一般情况下，用于第三方组件（通用组件）

2. 旧版本API

   **创建上下文**

   只有类组件才可以创建上下文

   1. 给类组件书写静态属性`childContextTypes`，使用该属性对上下文中的数据类型进行约束
   2. 添加实例方法`getChildContext`，该方法返回的对象，即为上下文数据，该数据必须满足类型约束，该方法会在每次render之后运行

   **使用上下文中的数据**

   要求：如果要使用上下文中的数据，组件必须有一个静态属性`contextTypes`，该属性描述了需要获取的上下文中的数据类型

   1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据
   2. **从组件的`context`属性中获取**
   3. 在函数组件中，通过第二个参数，获取上下文数据

   **上下文数据变化**

   1. 上下文中的数据不可以直接变化，最终都是通过状态改变
   2. 在上下文中加入一个处理函数，可以用于后代组件更改上下文数据

   ```react
   import React, { Component } from "react";
   import PropTypes from "prop-types";
   
   const types = {
     a: PropTypes.number,
     b: PropTypes.string.isRequired,
     onChangeA: PropTypes.func
   };
   
   function ChildA(props, context) {
     return (
       <div>
         <h1>ChildA</h1>
         <h2>
           a:{context.a}，b:{context.b}
         </h2>
         <ChildB />
       </div>
     );
   }
   
   ChildA.contextTypes = types;
   
   class ChildB extends Component {
     static contextTypes = types;
   
     constructor(props,context) {
         super(props, context);
     }
   
     render() {
       return (
         <p>
           ChildB，来自于上下文的数据：a: {this.context.a}, b:{this.context.b}
           <button
             onClick={() => {
               this.context.onChangeA(this.context.a + 2);
             }}
           >
             子组件的按钮，a+2
           </button>
         </p>
       );
     }
   }
   
   export default class Comp extends Component {
     static childContextTypes = types;
   
     state = {
       a: 123,
       b: "abc"
     };
   
     getChildContext() {
       return {
         a: this.state.a,
         b: this.state.b,
         onChangeA: newA => {
           this.setState({
             a: newA
           });
         }
       };
     }
   
     render() {
       return (
         <div>
           <ChildA />
         </div>
       );
     }
   }
   ```

3. 新版本API

   旧版本API存在严重的效率问题，并且容易导致滥用
   
   **创建上下文**
   
   上下文是一个独立于组件的对象，该对象通过`React.createContext(默认值)`创建，返回的是一个包含两个属性的对象
   
   1. Provider属性：生产者。一个组件，该组件会创建一个上下文，该组件有一个value属性，通过该属性，可以为其数据赋值
   
      同一个Provider，不要用到多个组件中，如果需要在其他组件中使用该数据，应该考虑将数据提升到更高的层次
   
   2. Consumer属性
   
   **使用上下文中的数据**
   
   1. 类组件中获取上下文
   
      1. 在类组件中，直接使用`this.context`获取上下文数据
   
         要求：必须拥有静态属性`contextTypes`，应赋值为创建的上下文对象
   
      2. 在类组件中，也可以使用`consumer`来获取上下文数据
   
   2. 在函数组件中，需要使用`consumer`来获取上下文数据
   
      - Consumer是一个组件
      - 它的子节点，是一个函数（它的props.children需要传递一个函数）
   
   **注意细节**
   
   如果，上下文提供者（Context.Provoder）中的value属性发生变化（Object.i比较），会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否优化（无论`shouldComponentUpdate`函数返回什么结果）
   
4. 上下文的应用场景：编写一套组件（有多个组件），这些组件之间需要相互配合才能最终完成功能

   ```react
   import React, { Component } from "react";
   
   const ctx = React.createContext();
   
   function ChildA(props) {
     return (
       <div>
         <h1>ChildA</h1>
         <h2>
           <ctx.Consumer>
             {value => (
               <>
                 {value.a}, {value.b}
               </>
             )}
           </ctx.Consumer>
         </h2>
         <ChildB />
       </div>
     );
   }
   
   class ChildB extends Component {
     render() {
       return (
         <ctx.Consumer>
           {value => (
             <p>
               ChildB，来自于上下文的数据：a: {value.a}, b:{value.b}
               <button
                 onClick={() => {
                   value.changeA(value.a + 2);
                 }}
               >
                 后代组件的按钮，点击a+2
               </button>
             </p>
           )}
         </ctx.Consumer>
       );
     }
   }
   
   // class ChildB extends Component {
   //   static contextType = ctx;
   
   //   render() {
   //     return (
   //       <>
   //         a: {this.context.a},
   //         b: {this.context.b}
   //         <button onClick={() => {
   //             this.context.changeA(this.context.a + 1);
   //         }}>加1</button>
   //       </>
   //     );
   //   }
   // }
   
   export default class NewContext extends Component {
     state = {
       a: 0,
       b: "abc",
       changeA: newA => {
         this.setState({
           a: newA
         });
       }
     };
   
     render() {
       return (
         <ctx.Provider value={this.state}>
           <div>
             <ChildA />
           </div>
         </ctx.Provider>
       );
     }
   }
   ```
   
### `PureComponent`, 纯组件

纯组件：用于避免不必要的渲染（运行render函数），从而提高效率

优化：如果一个组件的属性和状态，都没有发生变化，重新渲染该组件是没有必要的

`PureComponent`是一个组件，如果某个组件继承自该组件，则该组件的`shouldComponentUpdate`会进行优化，即对属性和状态进行浅比较

**注意**

1. `PureComponent`进行浅比较

   - 为了效率，应该尽量使用`PureComponent`
   - 要求不要改动之前的状态，永远是创建新的状态覆盖之前的状态（Immutable，不可变对象）
   - 有一个第三方库，Immutable.js，它专门用于制作不可变对象

2. 函数组件，使用`React.memo`函数制作纯组件，其原理是使用HOC原理，返回一个类组件，类组件包含该函数组件

   ```react
   function memo(FuncComp) {
       return class Memo extends PureComponent {
           render() {
               return (
               	<>
                   	<FuncComp {...this.props} />
                   </>
               );
       }
   }
   ```

### render props

有时候，某些组件的各种功能及其处理的逻辑几乎完全相同，只是显示的界面不一样，建议下面的方式任选其一来解决重复代码问题（横切关注点）

1. render props
   1. 某个组件，需要某个属性
   2. 该属性是一个函数，函数的返回值用于渲染
   3. 函数的参数会传递为需要的数据
   4. 注意纯组件的属性（尽量避免每次传递的render props的地址不一致）
   5. 通常该属性的名字叫做render
2. HOC

### Protals, 插槽

插槽：将一个**React元素**渲染到指定的DOM容器中

`ReactDOM.createProtal(React元素, 真实的DOM)`

**注意**

1. React中的事件是包装过的
2. 它的事件冒泡，是根据虚拟DOM树来冒泡的，与真实的DOM无关

```react
import React from 'react'
import ReactDOM from "react-dom"

function ChildA() {
    return ReactDOM.createPortal(<div className="child-a" style={{
        marginTop: 200
    }}>
        <h1>ChildA</h1>
        <ChildB />
    </div>, document.querySelector(".modal"));
}

function ChildB() {
    return <div className="child-b">
        <h1>ChildB</h1>
    </div>
}

export default function App() {
    return (
        <div className="app" onClick={e => {
            console.log("App被点击了", e.target)
        }}>
            <h1>App</h1>
            <ChildA />
        </div>
    )
}
```

### 错误边界

1. 默认情况下，若一个组件在**渲染期间**（render）发生错误，会导致整个组件树全部被卸载

2. 默认情况下的错误处理机制，组件发生错误之后，若无法处理错误，则按照层级，往父元素抛出错误，若父元素无法处理，则继续向上抛出，直到根组件，若根组件英文无法处理错误，则整个组件树全部被卸载

3. 错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播

4. **让某个组件捕获错误的方式**

   1. 编写生命周期函数` getDerivedStateFromError `
      - 静态函数
      - 运行时间点：渲染子组件的过程中，发生错误之后，更新页面之前
      - **注意**：只有子组件发生错误，才会运行该函数
      - 该函数返回一个对象，React会将该对象的属性覆盖掉当前组件的state
      - 函数存在一个参数：错误对象
      - 通常，该函数用于改变状态
   2. 编写生命周期函数`componentDidCatch`
      - 实例方法
      - 运行时间点：渲染子组件的过程中，发生错误，更新页面之后，由于其运行时间点比较靠后，因此不太会在该函数中改变状态（在其中改变状态比较浪费效率）
      - 该函数有两个参数：错误对象和错误信息
      - 通常，该函数用于记录错误消息（即发送到后台进行记录或者在控制台打印）

5. **细节**

   某些错误，错误边界组件无法捕获

   1. 自身的错误
   2. 异步的错误
   3. 事件中的错误

   总结：**仅处理渲染子组件期间的同步错误**

   
















