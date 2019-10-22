
# VUE全家桶

[TOC]

## 概述

1. 为什么要使用VUE?

   - 性能更好
   - 视图、数据分离
   - 维护成本低

2. VUE性能好在哪里？

   VUE的核心是虚拟DOM，使用虚拟DOM可以减少DOM操作，从而提升应用性能

3. 什么会影响web英勇的性能？==（待补充）==

   - 操作DOM影响性能，因为操作DOM十分昂贵
     - JS 与 DOM是两种东西，每次连接需要消耗性能
     - 操作 DOM 会导致重排与重绘

4. 什么时候触发重排？

   - 添加或删除==可见的 DOM 元素==
   - 元素位置改变
   - 元素尺寸改变（外边距、内边距、边框宽度、宽度、高度）
   - 内容改变，如文本改变或图片别另一个不同尺寸的图片代替
   - 页面渲染器初始化
   - 浏览器窗口尺寸改变

   [各CSS属性对重排重绘的影响](https://csstriggers.com/)

5. 什么是虚拟DOM?

   虚拟DOM(virtual dom)，是一个伪DOM，是由JS来模拟出的具有真实DOM结构的一个树形结构
   
6. 为什么要使用JS来模拟DOM结构？

   - 在前端的三种语言（HTML, CSS, JS）中，只有JS是一种编程语言，只有JS能做到判断、循环、递归、能够实现各种逻辑、实现各种算法
   - DOM的操作是昂贵的，js的运行效率更高，将DOM对比放在js层，减少DOM操作，效率更高

7. [虚拟DOM库——snabbdom](https://github.com/snabbdom/snabbdom)

8. 什么是VUE?

   - 渐进式的MVVM框架
     - M：model，数据
     - V：view，视图
     - VM：viewModel

## 创建一个vue实例

1. 插值表达式：`{{  }}}`

   ```javascript
   {{ 'a' }}
   {{ 1 }}
   {{ true }}
   {{ [123] }}
   {{ {a: 1, b: 2} }} // 填写对象时，要与插值表达式用空格分开
   {{ 1+1 }} //2
   {{ 1-2 }}  // -1
   
   {{ var a = 10; return a; }} // 语法错误，不能填写js语句
   {{  if(true) {return 'a'} }} // 语法错误
   
   {{ !true ? 'a' : 'b' }} // 'b'
   
   {{ name }} // 'xiexie'
   {{ desc }} // 'weiwei'
   
   <script>
   	const vm = new Vue({
       	el: '#app',
       	data: {
               name: 'xiexie',
               desc: 'weiwei'
           }
   	});    
   </script>
   ```

2. 数据使用和数据绑定

   - 使用数据时，需要在data中先存在
   - 数据要先存在，才能实现绑定

3. 监测数组改变

   - 通过索引的方式改变数组，==不能==渲染视图
   - 通过数组长度的改变的方式去改变数组，==不能==渲染视图
   - 通过数组变异方法的方式改变数组，能渲染视图
     - `push`、`pop`、`shift`、`unshift`、`sort`、`reverse`、`splice`
   - 通过`Vue.set()`与`vm.$set()`的方式改变数组，也==能==渲染视图
     - `Vue.set(vm.arr, indexOfArr, newValue)`
     - `vm.$set(vm.arr, indexOfArr, newValue)`

4. 监测对象改变

   - Vue不能检测到对象属性的添加或删除，即==不能==渲染视图
   - 通过`Vue.set()`与`vm.$set()`的方式添加属性，==能==渲染视图
     - `Vue.set(vm.obj, propertyName, value)`
     - `vm.$set(vm.obj, propertyName, value)`
   - 也可以使用`Object.assign()`与`_extend()_`为对象添加一次性添加多个属性，==能==渲染视图
     - `vm.obj = Object.assign({}, vm.obj, { //多个键值对 })`

5. ==vue重新渲染视图的过程是异步的==

   ```javascript
   const vm = new Vue({
       el: '#app',
       data: {
           name: 'xiexie',
           desc: 'weiwei'
       }
   });    
   
   // vue重新渲染视图是异步的
   vm.name = 'xiaoguli';
   vm.desc = 'naer';
   
   console.log(vm.$el.innerText); // xiexie weiwei
   
   vm.$nextTick(() => { // 在vue渲染页面之后执行
       console.log(vm.$el.innerText); // xiaoguli nuer
   });
   
   ```

6. `Vue.nextTick()`或 `vm.$nextTick()`：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

7. `vm.$mount()`：挂载 DOM 元素

8. 在`data`中`this`指向window，在`methods`中`this`指向vue实例；在组件中，`data`和`methods`中的`this`均指向组件实例

## vue指令

1. `v-pre`：跳过这个元素和它的子元素的编译过程。可以用来显示原始模板标签。**跳过大量没有指令的节点会加快编译**。

   ```html
   <span v-pre>{{ this will not be compiled }}</span> // {{ this will not be compiled }}
   ```

2. `v-cloak`：这个指令**保持在元素上直到关联实例结束编译**。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

   ```css
   [v-cloak] {
     display: none;
   }
   ```

   ```html
   <div v-cloak>
     {{ message }}
   </div>
   <!-- 不会显示，直到编译结束 -->
   ```

3. `v-once`：只渲染元素和组件**一次**。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能

   ```html
   <!-- 单个元素 -->
   <span v-once>This will never change: {{msg}}</span>
   <!-- 有子元素 -->
   <div v-once>
     <h1>comment</h1>
     <p>{{msg}}</p>
   </div>
   <!-- 组件 -->
   <my-component v-once :comment="msg"></my-component>
   <!-- `v-for` 指令-->
   <ul>
     <li v-for="i in list" v-once>{{i}}</li>
   </ul>
   ```

4. `v-html`：更新元素的 `innerHTML` 。**注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译** 。如果试图使用 `v-html` 组合模板，可以重新考虑是否通过使用组件来替代

   > 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。只在可信内容上使用 `v-html`，**永不**用在用户提交的内容上。

   ```html
   <div v-html="html"></div>
   ```

5. `v-text`：更新元素的 `textContent`。如果要更新部分的 `textContent` ，需要使用 `{{ Mustache }}` 插值。很少使用，一般适应插值语句

6. `v-if、v-else、v-else-if`：根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 `<template>` ，将提出它的内容作为条件块。

   当条件变化时该指令触发过渡效果。

   当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。

7. `v-show`：根据表达式之真假值，切换元素的 `display` CSS 属性。不支持`<template>`

   当条件变化时该指令触发过渡效果。

8. `v-bind`：

   - **编写**：`:`

   - **预期**：`any (with argument) | Object (without argument)`

   - **参数**：`attrOrProp (optional)`

   - **修饰符**：

     - `.prop` - 被用于绑定 DOM 属性 (property)。([差别在哪里？](https://stackoverflow.com/questions/6003819/properties-and-attributes-in-html#answer-6004028))
     - `.camel` - (2.1.0+) 将 kebab-case 特性名转换为 camelCase. (从 2.1.0 开始支持)
     - `.sync` (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 `v-on` 侦听器。

   - **用法**：

     动态地绑定一个或多个特性，或一个组件 prop 到表达式。

     在绑定 `class` 或 `style` 特性时，支持其它类型的值，如数组或对象。

     在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

     没有参数时，可以绑定到一个包含键值对的对象。注意此时 `class` 和 `style` 绑定不支持数组和对象。

   - **示例**：

     ```html
     <!-- 绑定一个属性 -->
     <img v-bind:src="imageSrc">
     
     <!-- 动态特性名 (2.6.0+) -->
     <button v-bind:[key]="value"></button>
     
     <!-- 缩写 -->
     <img :src="imageSrc">
     
     <!-- 动态特性名缩写 (2.6.0+) -->
     <button :[key]="value"></button>
     
     <!-- 内联字符串拼接 -->
     <img :src="'/path/to/images/' + fileName">
     
     <!-- class 绑定 -->
     <div :class="{ red: isRed }"></div>
     <div :class="[classA, classB]"></div>
     <div :class="[classA, { classB: isB, classC: isC }]">
     
     <!-- style 绑定 -->
     <div :style="{ fontSize: size + 'px' }"></div>
     <div :style="[styleObjectA, styleObjectB]"></div>
     
     <!-- 绑定一个有属性的对象 -->
     <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
     
     <!-- 通过 prop 修饰符绑定 DOM 属性 -->
     <div v-bind:text-content.prop="text"></div>
     
     <!-- prop 绑定。“prop”必须在 my-component 中声明。-->
     <my-component :prop="someThing"></my-component>
     
     <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
     <child-component v-bind="$props"></child-component>
     
     <!-- XLink -->
     <svg><a :xlink:special="foo"></a></svg>
     ```

     `.camel` 修饰符允许在使用 DOM 模板时将 `v-bind` 属性名称驼峰化，例如 SVG 的 `viewBox` 属性：

     ```html
     <svg :view-box.camel="viewBox"></svg>
     ```

     在使用字符串模板或通过 `vue-loader`/`vueify` 编译时，无需使用 `.camel`。

9. `v-on`

   - **缩写**：`@`

   - **预期**：`Function | Inline Statement | Object`

   - **参数**：`event`

   - **修饰符**：

     - `.stop` - 调用 `event.stopPropagation()`。
     - `.prevent` - 调用 `event.preventDefault()`。
     - `.capture` - 添加事件侦听器时使用 capture 模式。
     - `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
     - `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
     - `.native` - 监听组件根元素的原生事件。
     - `.once` - 只触发一次回调。
     - `.left` - (2.2.0) 只当点击鼠标左键时触发。
     - `.right` - (2.2.0) 只当点击鼠标右键时触发。
     - `.middle` - (2.2.0) 只当点击鼠标中键时触发。
     - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

   - **用法**：

     绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

     用在普通元素上时，只能监听[**原生 DOM 事件**](https://developer.mozilla.org/zh-CN/docs/Web/Events)。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。

     在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 `$event` 属性：`v-on:click="handle('ok', $event)"`。

     从 `2.4.0` 开始，`v-on` 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。

   - **示例**：

     ```html
     <!-- 方法处理器 -->
     <button v-on:click="doThis"></button>
     
     <!-- 动态事件 (2.6.0+) -->
     <button v-on:[event]="doThis"></button>
     
     <!-- 内联语句 -->
     <button v-on:click="doThat('hello', $event)"></button>
     
     <!-- 缩写 -->
     <button @click="doThis"></button>
     
     <!-- 动态事件缩写 (2.6.0+) -->
     <button @[event]="doThis"></button>
     
     <!-- 停止冒泡 -->
     <button @click.stop="doThis"></button>
     
     <!-- 阻止默认行为 -->
     <button @click.prevent="doThis"></button>
     
     <!-- 阻止默认行为，没有表达式 -->
     <form @submit.prevent></form>
     
     <!--  串联修饰符 -->
     <button @click.stop.prevent="doThis"></button>
     
     <!-- 键修饰符，键别名 -->
     <input @keyup.enter="onEnter">
     
     <!-- 键修饰符，键代码 -->
     <input @keyup.13="onEnter">
     
     <!-- 点击回调只会触发一次 -->
     <button v-on:click.once="doThis"></button>
     
     <!-- 对象语法 (2.4.0+) -->
     <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
     ```

     在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：

     ```html
     <my-component @my-event="handleThis"></my-component>
     
     <!-- 内联语句 -->
     <my-component @my-event="handleThis(123, $event)"></my-component>
     
     <!-- 组件中的原生事件 -->
     <my-component @click.native="onClick"></my-component>
     ```
   
10. `v-for`

    - **预期**：`Array | Object | number | string | Iterable (2.6 新增)`

    - **用法**：

      基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression` ，为当前遍历的元素提供别名：

      ```html
      <div v-for="item in items">
        {{ item.text }}
      </div>
      ```

      另外也可以为数组索引指定别名 (或者用于对象的键)：

      ```html
      <div v-for="(item, index) in items"></div>
      <div v-for="(val, key) in object"></div>
      <div v-for="(val, name, index) in object"></div>
      ```

      `v-for` 默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素，你需要提供一个 `key` 的特殊属性：

      ```html
      <div v-for="item in items" :key="item.id">
        {{ item.text }}
      </div>
      ```

      从 2.6 起，`v-for` 也可以在实现了[可迭代协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)的值上使用，包括原生的 `Map` 和 `Set`。不过应该注意的是 Vue 2.x 目前并不支持可响应的 `Map` 和 `Set` 值，所以无法自动探测变更。

      当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高。详见[列表渲染教程](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)

11. `v-model`

    - **预期**：随表单控件类型不同而不同。

    - **限制**：

      - `<input>`
      - `<select>`
      - `<textarea>`
      - components

    - **修饰符**：

      - [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件
      - [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
      - [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

    - **用法**：

      在表单控件或者组件上创建双向绑定。	

    - **参考**：

      - [表单控件绑定](https://cn.vuejs.org/v2/guide/forms.html)
      - [组件 - 在输入组件上使用自定义事件](https://cn.vuejs.org/v2/guide/components-custom-events.html#将原生事件绑定到组件)
    
12. `v-slot`

    - **缩写**：`#`

    - **预期**：可放置在函数参数位置的 JavaScript 表达式 (在[支持的环境下](https://cn.vuejs.org/v2/guide/components-slots.html#解构插槽-Props)可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。

    - **参数**：插槽名 (可选，默认值是 `default`)

    - **限用于**

      - ` <template> `
      - [组件](https://cn.vuejs.org/v2/guide/components-slots.html#独占默认插槽的缩写语法) (对于一个单独的带 prop 的默认插槽)

    - **用法**：

      提供具名插槽或需要接收 prop 的插槽。

    - **示例**：

      ```html
      <!-- 具名插槽 -->
      <base-layout>
        <template v-slot:header>
          Header content
        </template>
      
        Default slot content
      
        <template v-slot:footer>
          Footer content
        </template>
      </base-layout>
      
      <!-- 接收 prop 的具名插槽 -->
      <infinite-scroll>
        <template v-slot:item="slotProps">
          <div class="item">
            {{ slotProps.item.text }}
          </div>
        </template>
      </infinite-scroll>
      
      <!-- 接收 prop 的默认插槽，使用了解构 -->
      <mouse-position v-slot="{ x, y }">
        Mouse position: {{ x }}, {{ y }}
      </mouse-position>
      ```

      更多细节请查阅以下链接。

    - **参考**：

      - [组件 - 插槽](https://cn.vuejs.org/v2/guide/components-slots.html)
      - [RFC-0001](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0001-new-slot-syntax.md)

## API

1. **Vue.directive( id, [definition\] )](https://cn.vuejs.org/v2/api/#Vue-directive)**

   - **参数**：

     - `{string} id`
     - `{Function | Object} [definition]`

   - **用法**：

     注册或获取全局指令。

     ```javascript
     // 注册
     Vue.directive('my-directive', {
       bind: function () {},
       inserted: function () {},
       update: function () {},
       componentUpdated: function () {},
       unbind: function () {}
     })
     
     // 注册 (指令函数)
     Vue.directive('my-directive', function (el, bindings, vnode) {
         // el: 指令所在的dom元素
         // bindings: 存在所在dom元素所绑定的信息
         // vnode: 指定绑定的节点
         
       // 这里将会被 `bind` 和 `update` 调用
     })
    
     // getter，返回已注册的指令
    var myDirective = Vue.directive('my-directive')
     ```
   
   - **参考**：[自定义指令](https://cn.vuejs.org/v2/guide/custom-directive.html)
   
2. **Vue.filter[( id, [definition\] )](https://cn.vuejs.org/v2/api/#Vue-filter)**
   
   - **参数**：
   
     - `{string} id`
     - `{Function} [definition]`
   
   - **用法**：
   
     注册或获取全局过滤器。
   
     ```js
     // 注册
     Vue.filter('my-filter', function (value) {
       // 返回处理后的值
     })
     
     // getter，返回已注册的过滤器
     var myFilter = Vue.filter('my-filter')
     ```
   
   - **参考**：[过滤器](https://cn.vuejs.org/v2/guide/filters.html)

## 选项/DOM

<img src="./VUE全家桶.assets/0-el,template,render.svg" alt="el,template,render" style="zoom:70%;" />

1. **el**

   - **类型**：`string | Element`

   - **限制**：只在由 `new` 创建的实例中遵守。

   - **详细**：

     提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

     在实例挂载之后，元素可以用 `vm.$el` 访问。

     如果在实例化时存在这个选项，实例将立即进入编译过程，否则，需要显式调用 `vm.$mount()` 手动开启编译。

     > 提供的元素只能作为挂载点。不同于 Vue 1.x，所有的挂载元素会被 Vue 生成的 DOM 替换。因此不推荐挂载 root 实例到 `` 或者 `` 上。

     > 如果 `render` 函数和 `template` 属性都不存在，挂载 DOM 元素的 HTML 会被提取出来用作模板，此时，必须使用 Runtime + Compiler 构建的 Vue 库。

   - **参考**：

     - [生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)
     - [运行时 + 编译器 vs. 只包含运行时](https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时)

2. **template**

   - **类型**：`string`

   - **详细**：

     一个字符串模板作为 Vue 实例的标识使用。模板将会 **替换** 挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。

     如果值以 `#` 开始，则它将被用作选择符，并使用匹配元素的 innerHTML 作为模板。常用的技巧是用 `  <script type="x-template">  ` 包含模板。

     > 出于安全考虑，你应该只使用你信任的 Vue 模板。避免使用其他人生成的内容作为你的模板。

     > 如果 Vue 选项中包含渲染函数，该模板将被忽略。

   - **参考**：

     - [生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)
     - [通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)

3. **render**

   - **类型**：`(createElement: () => VNode) => VNode`

   - **详细**：

     字符串模板的代替方案，允许你发挥 JavaScript 最大的编程能力。该渲染函数接收一个 `createElement` 方法作为第一个参数用来创建 `VNode`。

     如果组件是一个函数组件，渲染函数还会接收一个额外的 `context` 参数，为没有实例的函数组件提供上下文信息。

     > Vue 选项中的 `render` 函数若存在，则 Vue 构造函数不会从 `template` 选项或通过 `el` 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。

   - **参考**：[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)

4. **renderError**

   - **类型**：`(createElement: () => VNode, error: Error) => VNode`

   - **详细**：

     **只在开发者环境下工作。**

     当 `render` 函数遭遇错误时，提供另外一种渲染输出。其错误将会作为第二个参数传递到 `renderError`。这个功能配合 hot-reload 非常实用。

   - **示例**：

     ```js
     new Vue({
       render (h) {
         throw new Error('oops')
       },
       renderError (h, err) {
         return h('pre', { style: { color: 'red' }}, err.stack)
       }
     }).$mount('#app')
     ```

   - **参考**：[渲染函数](https://cn.vuejs.org/v2/guide/render-function.html)

## 生命周期

<img src="./VUE全家桶.assets/lifecycle.png" alt="vue生命周期" style="zoom:35%;" />

常用生命周期函数

- `created`：用于进行ajax请求
- `mounted`：用于进行ajax请求，此时dom元素挂载完毕
- `beforeUpdate`：用于改变数据，不要再`updated`函数中更改数据，会造成死循环
- `beforeDestroy`：用于清除计时器之类

## 计算属性与侦听器

1. 将不断变化数据放在methods中，会造成性能消耗

   因为当data中的数据变化时，会进行视图的重新渲染，会重新执行页面上调用的methods中的函数，因此，data中任一数据进行变化，都会使页面中调用的methods方法重新运行，而造成性能的损耗。

2. **计算属性(computed)**

   只有计算属性涉及的数据发生改变时，才会重新执行

   ```html
   <div id="app">
   	{{ person }}
       {{ msg }}
   </div>
   ```

   ```javascript
   const vm = new Vue({
       el: '#app',
       data: {
           name: 'test',
           age: 18,
           msg: 'hello world'
       },
       methods: {},
       computed: {
           person() {
               return `姓名: ${this.name}, 年龄: ${this.age}`
           },
           person: {
               get() {
                   return `姓名: ${this.name}, 年龄: ${this.age}`
   		    },
               set(value) {
                   // vm.person = 'test'
                   console.log(value) // 'test'
               }
           }
       }
   });
   ```

3. **侦听器(watch)**

   当监听的数据发生改变时，执行函数

   ```javascript
   const vm = new Vue({
       el: '#app',
       data: {
           name: 'test',
           age: 18,
           msg: 'hello world'
       },
       methods: {},
       watch: {
           name(newVal) {
               console.log(newVal)
           },
           age(newVal) {
               console.log(newVal)
           },
           name: {
               immediate: true, // 表示第一次进入页面时，会先执行一次函数
               handler(newVal) {
                   console.llog(newVal)
               }
           }
       }
   });
   
   vm.$watch('name', function(newVal) {
       console.log(newVal);
   }, {
       // config
       immediate: true
   })
   
   // vm.name = 'duyi' --> 'duyi'
   // vm.age = 11 --> 11
   ```

4. 计算属性与侦听器的使用场景

   - 当需要使用多个值得到一个值时，使用计算属性
   - 当只需侦听一个属性时，使用侦听器

5. 计算属性与methods的区别

   - 计算属性有缓存机制，当其涉及的属性改变时，会重新执行，当涉及数据没有改变时，则会从缓存中获取，不重新执行；

   - methods没有缓存机制，因此，只要有数据发生改变，就会重新执行

6. 计算属性与侦听器的区别

   - 计算属性一次性可以关联多个数据，只要其中一个数据改变，则执行函数；侦听器一次只能观察一个数据，若数据变化，则执行函数；

   - 计算属性可以生成新的数据，可以直接在视图中进行渲染；侦听器则观察的是本身存在的数据，不生成新的数据；

   - 侦听器中可以执行异步函数；计算属性不可以；
   
7. 视图中数据查找顺序：`data --> methods --> computed`

## 组件

1. 组件特性
   - 组件中的dat不是对象形式，是函数形式，为保证组件复用时，每个组件中数据的独立性
   - 命名规范：在html文件中，不能使用大驼峰和小驼峰命名，应使用连字符（不能出现大写字母），在`.vue`文件中均可使用
   - 在html文件中，使用组件不能用单标签的形式，在`.vue`文件中可以

```html
<div id="app">
    <!--先查找局部组件，再查找全局组件，若没有，则报错-->
    <hello-world></hello-world> 
</div>
```

```javascript
// 全局组件
Vue.component('hello-world', {
    // 组件中的data是一个函数，是为了使组件之间的数据不互相影响
    data() {
        return {
            msg: 'hello world'
        }
    },
    template: '<div>{{ msg }}</div>'
});

// 局部组件
const vm = new Vue({
    el: '#app',
    components: {
        'hello-world': {
            data() {
                return {
                    msg: 'hello world'
                }
            },
            template: '<div>{{ msg }}</div>'
        }
    }
});
```

### 组件数据传递&属性校验

```html
<div id="app">
    <my-content a="1" b="2" :title="title" :content="content"></my-content>
</div>

<!--上面html被vue解析后结构如下-->
<!--在组件中注册的属性，不会保留在元素上，未注册的属性则会保留在元素上-->
<div id="app">
    <div a="1" b="2">
        <h3>
            测试
        </h3>
        <p>
            sjfdljdflsjdfljsdlf
        </p>
    </div>
</div>
```

```javascript
const vm = new Vue({
    el: '#app',
    data: {
      title: '测试',
      content: 'sjfdljdflsjdfljsdlf'
    },
    // props: ['title', 'content']
    preps: {
        title: {
            type: String,
            required: true,
            default: 'sfddskfjdsjfdsjf'
        },
        content: {
            type: String,
            required: true
        },
        num: {
          type: Number,
          validator: (value)=> {
          	return value > 10;      
          }
        },
        arr: {
            type: Array,
            default:()=> [1, 2, 3]
        },
        obj: {
            type: Object,
            default: ()=> ({a: 1, b: 2, c: 3})
        }
    },
    components: {
        myContent: {
            template: `<div>
						<h3>{{ title }}</h3>
						<p>{{ content }}</p>
					</div>`
        }
    }
});
```

### 组件间通信

1. 父传子

   - `props`：官方推荐使用
   - `vm.$attrs`配合`inheritAttrs:false`
   - `vm.$root`：不推荐，[访问根实例](https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问根实例)
   - `vm.$parent`：不推荐，[访问父级组件实例](https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问父级组件实例)
   - `provide`与`inject`：不推荐，[依赖注入](https://cn.vuejs.org/v2/guide/components-edge-cases.html#依赖注入)

2. 子传父

   - `vm.$children`

   - `vm.$refs`

     - 当ref重名时，vm.refs只能获取最后一个，但当使用v-for时候，则可以获取所有的重名ref

   - 传递函数

     ```html
     <div id="app">
          <my-cmp :fun="fun"></my-cmp>
     </div>
     ```

     ```javascript
      const vm = new Vue({
                 el: '#app',
                 methods: {
                     fun(data) {
                         console.log(data);
                     }
                 },
                 components: {
                     myCmp: {
                         created() {
                             this.fun(this.msg);
                         },
                         props: ['fun'],
                         data() {
                             return {
                                 msg: 'hello world'
                             }
                         },
                         methods: {
                             cmpFun() {
                                 return 'cmpFun';
                             }
                         },
                         template: `<div>{{ msg }}</div>`
                     }
                 }
             });
     ```

   - 监听组件事件

     - 自定义组件，不具备原生dom的事件系统，因此不能监控在其发生的事件，需要添加修饰符.native
     - 当为自定义组件事件添加.native修饰符后，其对事件具有监控能力，但是其是给整个组件绑定的事件，如点击事件，当添加.native修饰符后，点击组件内的任意地方，均可触发，因此不推荐使用

   - `vm.$listeners`

   - `vm.$emit`

   - `v-on="$listeners"`

     - 能在子组件中触发父组件的函数，但是不能传参

   - 自定义事件

3. 兄弟组件传值

   **event bus，事件总线**

   ```html
   <div id="app">
           <my-inp></my-inp>
           <hr>
           <my-content></my-content>
       </div>
   ```

   ```javascript
    Vue.prototype.bus = new Vue();
   
           new Vue({
               el: '#app',
               components: {
                   myInp: {
                       data() {
                           return {
                               inpVal: ''
                           }
                       },
                       methods: {
                           handleClick() {
                               this.bus.$emit('test', this.inpVal);
                           }
                       },
                       template: `
                                   <div>
                                       <input type="text" v-model.lazy="inpVal">
                                       <button @click="handleClick">提交</button>
                                   </div>
                               `
                   },
                   myContent: {
                       created() {
                           this.bus.$on('test', (value)=> {
                               console.log(value);
                               this.content = value;
                           });
                       },
                       data() {
                           return {
                               content: ''
                           }
                       },
                       template: `<div>{{ content }}</div>`
                   }
               }
           });
   ```

4. 组件间双向通信

   vue中单向数据流的概念，子组件中不去改动父组件传递过来的值，以免造成混乱，因为当父组件传递过来的值为引用值时，会改变父组件中的值，会导致其余复用的组件也改变。

   - `:value + @input` --> `v-model`
   - `:attr+ @update:attr`等同于`:attr.sync`

## vue脚手架

1. 安装

   - `npm install -g @vue/cli`：安装脚手架，用于生成项目
   - `npm install -g @vue/cli-service-global`：快速原型开发，编译vue文件

   如果之前已经安装过旧版本(非3.x)脚手架，需先写在旧版本

   - `npm uninstall vue-cli -g`

   如果仍然需要旧版本的`vue init`功能，需要全局安装一个桥接工具

   - `npm install -g @vue/cli-init`：拉取旧版本

   vscode中使用的vue插件：`Vetur`
   
2. 使用vue serve注意事项

   在使用vue serve执行单个vue文件时，需要安装`@vue/cli-service-global`,还需要安装一些依赖：

   ```javascript
   npm init -y // 初始化项目
   npm install eslint eslint-plugin-vue babel-eslint -D // 没有安装这个依赖，则vue serve不能运行
   
   // vue serve 配置
   
   Usage: serve [options] [entry]
   
   serve a .js or .vue file in development mode with zero config
   
   
   Options:
   
     -o, --open         Open browser
     -c, --copy         Copy local url to clipboard
     -p, --port <port>  Port used by the server (default: 8080 or next available port)
     -h, --help         Output usage information
   ```


### 利用脚手架搭建项目

1. 创建项目

   I、 `vue create project-name`

   II、`vue ui`：项目图形化界面

2. 配置预设的保存目录在用户文件夹下的.vuerc中：`C:\Users\xyj\.vuerc`

3. 图形化界面的相关配置保存在用户文件夹下的.vue-cli-ui文件夹下: `C:\Users\xyj\.vue-cli-ui`

## 路由

### 路由配置

### 嵌套路由

### 动态路由

### 导航守卫

### 路由元信息







































































