[TOC]

#  TypeScript 

## 概述

1. 为什么 要学习TypeScript?

   - 就业 或 获得更大的竞争优势
   - 获得更好的开发体验
   - 解决JS中一些难以解决的问题

2. JS开发中的常见问题？

   - 使用了不存在的变量、函数或成员

   - 把一个不确定的类型当成一个确定的类型进行处理（类型错误）

   - 在使用null或undefined的成员

     ```javascript
     const obj = null;
     console.log(obj.name);
     ```

3. JS的原罪

   - JS语言本身的特性，决定了该语言无法适应大型的复杂的项目
   - 弱类型：某个变量可以随时更换类型
   - 解释型：错误发生的时候，是在运行时

4. **TypeScript**，TS：是JS的==超集==，是一个==可选额==、==静态的====类型系统==

   - 类型系统，对代码中的所有标识符（变量、函数、参数、返回值）进行类型检查
   - 静态，类型检查发生的时间，在编译的时候，而非运行时
   - TS不参与任何运行时的类型检查

5. 无论是浏览器环境，还是node环境，无法直接识别ts代码

   - tsc，TS编译器

6. TS常识

   - 2012年微软发布
   - Anders Hejlsberg 负责开发TS项目
   - 开源、拥抱ES标砖
   - 版本3.4
   - [TS官网](https://www.typescriptlang.org/)

7. **额外惊喜**

   - 有了类型检查，增加了面向对象开发
   - JS中也要类和对象，JS支持面向对象开发，没有类型检查，很多面向对象的场景实现起来有诸多问题
   - 使用TS后，可以编写出完善的面向对象代码

## 在node中搭建TS开发环境

1. 安装 TypeScript，`npm istall typescript -g`

2. `tsc index.ts`，编译TS文件为js文件

3. 默认情况下，TS会做出下面几个假设：

   - 假设当前的执行环境是浏览器环境（dom）
   - 如果代码代码中没有模块化语句（import，export），则认为该代码是全局执行
   - 编译的目标代码是ES3

   **有两种方式更改以上两种假设**

   - 使用tsc命令行的时候，加上选项参数
   - 使用ts配置文件，更改编译选项

4. TS配置文件，tsconfig.json

   - 可以手动创建TS配置文件，即tsconfig.json
   - 也可使用命令行直接生成，`tsc --init`

   ```typescript
   {
     "compilerOptions": { // 编译选项
       "target": "es5", //配置编译目标代码的标准模式，Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
       "module": "commonjs", //配置编译目标使用的模块化标准，Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
       "lib": ["es2016","dom"], // 表示默认情况下使用ts的全局环境，没有node环境配置，需通过@types/node进行配置
       "ourDir": "./dist", //编译输出结果目录
       "strict": true, /* Enable all strict type-checking options. */
       "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
     },
     "include":["./src"], // 指定要编译的文件夹
     // "files": ["./src/index.ts"] // 指定需要编译的具体文件
   }
   
   ```

5. 使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

6. TS中引入第三方库，@types/node...

   - @types是一个TS官方的类型库，其中包含了很对对js代码的类型描述
- 如，jQuery是用js书写，没有类型检查，通过安装@types/jquery，为jquery库添加类型定义
  
7. 使用第三方库简化流程

   - `ts-node`：将TS代码在内存中完成编译，同时完成运行

     `ts-node ./src/index.ts`：需指定入口文件，同时会使用配置文件

   - `nodemon`：用于监测文件的变化     

     `nodemon  --watch ./src -e ts --exec ts-node .src/index.ts`
     
     `rd /s /q dist & tsc`：编译之前，先删除之前的编译结果

## 基本类型检查

### 基本类型约束

1. 如何进行类型约束？

   - 约束的对象：变量、函数参数、函数的返回值

   - 约束方式，仅需在约束对象末的位置加上`:类型`

     ```typescript
     let name:string;
     
     function sum(a:number, b:number):number {
         return a + b;
     }
     
     let num:number = sum(2, 3);
     ```

   - TS在很多场景中可以完成类型推导

   - `any`：表示任意类型，对该类型，TS不做任何类型检查

   > 小技巧：如何区分数字字符串和数字，关键看怎么读？
   >
   > ​                如果按照数字的方式朗读则为数字，否则为数字字符串

2. 源代码与编译结果的差异

   编译结果中没有类型约束信息

### 基本类型

1. 基本类型

   - number

   - string

   - boolean

   - 数组

     ```typescript
     // 方式1（推荐）
     let nums: number[];
     nums = [1, 2, 3, 4];
     // 方式2
     let nums: Array<number> = [1, 2, 3, 4]
     ```

   - object

     ```typescript
     // 方式1：使用较少，难以约束对象中每一项是哪种类型
     let u: object;
     ```
     
   - null 和 undefined：是所有其他类型的子类型，它们可以赋值给其他类型

     通过添加在配置文件中添加`strictNullChecks: true`，可以获得更严格的空类型检查，使 null 和 undefined 只能赋值给自身。

### 其他类型

1.  联合类型：多种类型，任选其一，可配合类型保护进行判断

   - 类型保护：当某个变量进行类型判断之后，在判断的语句块中便可以确定它的确切类型：：

   ```typescript
   let name: string | undefined;
   if(typeof name === 'string'){
   	// 此时可以TS可以判断出name一定是字符串，有相应的智能提示
   }
   ```

2. void类型：通常用于约束函数的返回值，表示该函数没有任何返回值

3. never类型：通常用于约束函数的返回值，表示该函数永远不可能结束

   ```typescript
   function throwError(msg: string):never {
       throw new Error(msg)
   }
   
   function alwaysDoSomething():never {
       while(true) {
           // ...
       }
   }
   ```

4. 字面量类型：表示使用一个值进行约束

   ```typescript
   let a = 'A'; 变量a只能赋值为A
   
   let gender: '男'|‘女; // gender只能取值为男或女
   
   let arr:[]; // arr永远只能取值为一个空数组
   
   let user: {
       name: string
       age: number
   };
   ```

5. 元祖类型（Tuple）：一个固定长度的数组，并且数组中每一项的类型确定

   ```typescript
   let tu: [string, num]; 表示只能有两个元素，而且类型必须是第一项为string，第二项为number
   ```

6. any类型：any类型可以绕过类型检查，因此，any类型的数据可以赋值给任何类型

### 类型别名

&emsp;&emsp;对已知的一些类型定义名称

```typescript
type 类型名 = ...;

type Gender = '男'|‘女’;
type User = {
    name: string
    age: number
    gender: Gender
}

let u:user = {
    name: 'test',
    age: 18
}

function getUser(gender:Gender):User {
	// ....
}
```

### 函数相关约束

1. **函数重载**：在函数实现之前，对函数调用的多种情况进行声明

   ```typescript
   function combine(a:number, b:number):number;
   function combine(a:string, b:string):string;
   function combine(a:number|string, b:number|string):number|string {
   	if (typeof a === 'number' && typeof b === 'number') {
           return a * b;
        } else if(typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
   }
   ```

2. **可选参数**：可以在参数名后加上问号，表示该参数可以不用传递，可选参数必须在函数列表末尾

   ```typescript
   function sum(a: number, b:number, c?: number):number {
       if (c) {
           return a + b + c;
       }
       return a + b;
   }
   ```

## 扩展类型——枚举

1. 扩展类型

   - 类型别名
   - 枚举
   - 接口
   - 类

2. **枚举**通常用于约束某个变量的取值范围

   **字面量和联合类型**配合使用，也可以达到与枚举相同的目标

3. 字面量类型的问题？

   - 在类型约束位置，会产生重复代码，可以使用类型别名解决该问题
   - 逻辑含义和真实的值产生了混淆，会导致当修改真实值的时候产生大量的修改
   - 字面量类型不会进入到编译结果
   
4. 如何让定义枚举？

   ```typescript
   enum 枚举名 {
       枚举字段1 = 值1，
       枚举字段2 = 值2
   }
   ```

5. 枚举会出现在编译结果中，编译结果为对象

6. 枚举的规则：

   - 枚举的字段值可以是数字或字符串
   - 数字枚举的值会自动自增
   - 被数字枚举约束的变量，可以直接赋值为数字
   - 数字枚举的编译结果 和 字符串枚举的编译结果有差异

7. 最佳实践

   - 尽量不要在一个枚举中，既出现字符串字段，又出现数字字段
   - 使用枚举时，尽量使用枚举字段的名称，而不使用真实的值

8. **位枚举**（枚举的位运算）

   - 位运算：两个数字换算成二进制后进行的运算
     - 或运算（|）：两个位都为0时，结果才为0
     - 且运算（&）：两个位都为1时，结果才为1
     - 异或运算（^）： 两个位相同为0，相异为1
     - 取反运算（~）：0变1，1变0
     - 左移运算（<<）：各二进位全部左移若干位，高位丢弃，低位补0
     - 右移运算（>>）：

   ```typescript
   enum Permission {
       Read = 1,
       Write = 2,
       Create = 4,
       Delete = 8
   }
   
   // 组合权限
   let p:Permission = permission.Read | Permission.Write;
   
   // 判断是否拥有某个权限
   function hasPermission(target:Permission, p:Permission):boolean {
       return (target & p) === p;
   }
   
   // 删除权限
   p = p ^ Permission.Write; // 删除write权限
   ```

##  模块化

1. 模块化相关配置

   |       配置名声       |              含义              |
   | :------------------: | :----------------------------: |
   |        module        | 设置编译结果中使用的模块化标准 |
   |   moduleResolution   |     设置解析模块模式的模式     |
   | noImplicitUserStrict |  编辑结果中不包含’use strict‘  |
   |    removeComments    |        编译结果移除注释        |
   |    noEmitOnError     |      错误时不生成编译结果      |
   |   esModuleInterop    | 启用rs6模块化交互非es6模块导出 |

2. 前端领域中的模块化标准：**ES6**、**commonJs**、amd、cmd、system、esnext

3. TS中如何书写模块化语句？

   TS中，导入和导出模块，统一使用ES6的模块化标准

4. 模块化编译结果

   - 可配置

   TS中的模块化在编译结果中：

   - 如果编译结果的模块化标准是ES6:：没有区别
   - 如果编译结果的模块化标准是commonJs：导出的声明会变成export的属性，默认导出会变成export的default属性
   
5. 解决commonJs默认导出问题

   在ts中导入默认模块，如`import fs from 'fs'`会报错，原因是该模块使用`module.esports = {}`方式导出，在ts编译结果中默认导出会变成default属性。

   ```typescript
   // 方式1
   import {readFileSync} from 'fs'; // 直接进行解构，但当所需函数多时，不方便
   
   // 方式2
   import * as fs from 'fs';
   
   // 方式3
   // 添加 esModuleInterop: true 配置，则可以直接使用 import fs from 'fs';
   ```

6. 如何在TS中书写commonJs模块化代码

   - 导出： `export = xxx`
   - 导入：`import xxx = require('xxx')`

7. 模块解析

   - **模块解析**：应该从什么位置寻找模块
   - 在TS中，有两种模块解析策略
     - classic，经典
     - node，node解析策略（唯一的变化时将JS替换为TS），`moduleResolution：'node'`

## 接口和类型兼容性

1. **TS中接口**：用于约束类、对象、函数的契约（标准）

2. 契约（标准）的形式

   - API文档，弱标准
   - 代码约束，强标准

3. 接口约束对象

   ```typescript
   interface User {
       name: string
       age: number
   }
   
   let u: User = {
       name: 'test',
       age: 18
   }
   ```

4. 接口约束函数

   ```typescript
   interface User {
   	sayHello: () => void，
       sayHello(): void
   }
   
   type Condition = (n:number) => boolean
   
   interface Condition { // 大括号在这里是定界符，而不表示对象
       (n:number):boolean
   }
   ```

5. 接口和类型别名一样，不出现在编译结果中

   接口和类型别名真正的区别在于对==类==的约束

6. 接口可以继承

   - 可以通过接口之间的继承，实现多种接口的组合
   - 使用类型别名可以实现类似的组合效果，需要通过`&`，它叫做==交叉类型==
   - 接口继承与类型别名交叉效果的区别是：
     - 子接口不能覆盖父接口的成员
     - 交叉类型会把相同成员的类型进行交叉

   ```typescript
   interface A {
       T1: string
   }
   
   interface B extends A {
       T2: number
   }
   
   interface C extends A,B {
       T3: boolean
   }
   
   type A = {
       T1: string
   }
   
   type B = {
       T2: number
   }
   
   type C = {
       T3: boolean
   } & A & B
   
   let c:C = {
       T1: 'test',
       T2: 18,
       T3: false
   }
   ```

7. ***readonly***

   - 只读修饰符：修饰的成员是只读
   - 只读修饰符不在编译结果中

   ```typescript
   interface User {
       readonly id: string
       name: string
       age: number
   }
   
   let arr: readonly number[] = [1, 2, 3, 4];  // 将数组限制为只读数组，不能改变数组的成员
   let arr: ReadonlyArray<number> = [1, 2, 3, 4];
   ```

8. **类型兼容性**

   - 将B赋值给A，如果能完成赋值，则B和A类型兼容
   - 鸭子辩型法（子结构辩型法）：目标类型需要某一些特征，赋值的类型只要能蛮子该特征即可

   **兼容性**

   - 基本类型：完全匹配
   - 对象类型：鸭子辩型法
     - 当直接使用对象字面量赋值时，会进行更加严格的类型判断
   - 函数类型
     - 参数：传递给目标函数的参数可以少，但不可以多
     - 返回值：要求返回必须返回；不要求返回，随意

9. ==**类型断言**==：`值 as 类型`

## TS中的类

1. **属性**

   使用属性列表来描述类中的属性，不允许动态创建属性
   
2. **属性初始化检查**

   `strictPropertyInitialization: true`：更严格的属性初始化检查

   属性初始化的位置

   - 构造函数中
   - 属性默认值

3. **属性可修饰为可选的**

4. **属性也可以修饰为只读的**

5. **使用访问修饰符**

   访问修饰符可以控制类中的某个成员的访问权限

   - `public`：默认的访问修饰符，公开的，所有的代码均可访问
   - `private`：私有的，只有在类中可以访问
   - `protected`：受保护的成员，只能在自身和子类中使用

6. **属性简写**

   如果某个属性，通过构造函数的参数传递，并且不做任何处理的赋值给该属性，可以进行简写

7. **访问器**

   控制属性的读取与赋值


```typescript 
class User {
    // 属性列表
    readonly id: number //不可改变
    // name: string
    age: number
    gender: '男'|'女' = '男'
    pid?: string // 可选属性    
    private _publishNumber: number = 3 // 私有属性
    private _curNumber: number = 0 // 私有属性
    private _test: number
    
    // 访问器
    set test(value: number) {
        // 可以做响应的处理
        this._test = value;
    }
    get test() {
       // 可以做相应的处理
        return this._test
    }
    
    constructor(age: nmber,public name: string // 属性简写,一定要加访问修饰符 ) {
        this.id = Math.random();
        // this.name = name;
        this.age = age;
    }
}

const u = new User();
u.test = 10; // 赋值
```

## 泛型

1. 有时，书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的）

2. **泛型**：是指附属于函数、类、接口、类型别名之上的类型

3. **泛型**相当于是一个类型变量，在定义时，无法预先知道具体的类型，可以用该变量代替，只有到调用的时，才能确定它的类型。

4. 很多时候，TS会智能的根据传递的参数，推导出泛型的具体类型

   如果无法完成推导，并且又没有传递具体的类型，默认为空对象

5. **在函数中使用泛型**

   在函数名之后写上`<泛型名称>`

   ```typescript
   function take<T>(arr: T[], n: number): T[] {
       if (n > arr.length) {
           return arr;
       }
       const newArr: T[] = [];
       for(let i = 0; i < n; i++) {
           newArr.push(arr[i]);
       }
       return newArr;
   }
   
   take<number>();
   ```

6. **在类、接口、类型别名中使用泛型**

   直接在名称之后写上`<泛型名称>`

   ```typescript
   // type callback<T> = (n: T, i: number) => boolean;
   interface callback<T> {
       (n: T, i: number): boolean
   }
   function filter<T>(arr: T[], callback: callback<T>): T[] {
       const newArr: T[] = [];
       arr.forEach((n, i) => {
           if (callback(n, i)) {
               newArr.push(arr[i]);
           }
       });
       return newArr;
   }
   
   
   class ArrayHelper<T> {
       take(arr: T[] ,n: number): T[] {
           
       }
       
       shuffle(arr: T[]) {}
   }
   
   const helper = new ArrayHelper([1, 2, 3, 4]);
   ```

7. **泛型约束**

   指对传入的泛型进行相应的约束

   用于现实泛型的取值

   ```typescript
   interface hasNameProperty {
       name: string
   }
   // hasNameProperty 可以是类、接口、类型别名、函数等均可
   function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
       // 应确保传入的值中一定存在name属性
       obj.name
           .split(" ")
       	.map(s => s[0].toUpperCase() + s.substr(1))
       	.join(" ");
   }
   
   const o = {
       name: 'test ts',
       age: 18,
       gender: '男'
   }
   
   const newO = nameToUpperCase(o);
   console.log(newO.name);
   ```

8. **多泛型**

   ```typescript
   function mixinArray<T, K>(arr1: T[], arr2: K[]): (T|K)[] {
   	// ....
   }
   ```

## 深入理解类和接口

### 为什么要学面向对象？

1. TS为前端面向对象开发提供了契机

   JS语言没有类型检查，如果使用面向对象的方式开发，会产生大量的接口，而大量的接口会导致调用复杂度剧增，这种复杂度必须通过严格的类型检查来避免错误，尽管可以使用注释或者文档或记忆力，但是它们没有强约束力。

   TS带来了完整的类型系统，因此开发复杂程序时，无论接口数量有多少，都可以获得完整的类型检查，并且这种检查是具有强约束力的。

2. 面向对象中有许多非常成熟的模式，能处理复杂问题

   在过去的很多年中，在大型应用或复杂领域，面向对象已经积累了非常多的经验

### 什么是面向对象

1. **面向对象**：Oriented(基于) Object(事物)，简称OO
   - 是一种编程思想，它提出一切以对象为切入点思考问题

2. 编程思想：面向对象、面向过程，函数式编程
   - **面向过程**：以功能流程为思考切入点，不太适合大型应用
   - **函数式编程**：以数学运算为思考切入点
   - **面向对象**：以划分类为思考切入点，类是最小的功能单元
   - **类**：可以产生对象的模板

### 类的继承

1. **继承的作用**

   - 可以描述类与类之间的关系
   - 如果A和B都是类，并且可以描述为A是B，则A和B形成继承关系
     - B是父类，A是子类
     - B派生A，A继承B
     - B是A的基类，A是B的派生类
2. **继承的意义**

   - 如果A继承自B，则A中自动拥有B中的所有成员
   
3. **成员重写**
   - 重写（override）：子类中覆盖父类的成员
   - ==子类成员不能改变父类成员的类型==
   - 无论是属性还是方法，子类都可以对父类的相应成员进行重写，但是重写时，需要保类型的匹配
   - 注意this关键字：在继承关系中，this的指向是动态的——调用方法时，根据具体的调用者确定this指向
   - ==super关键字==：在子列方法中，可以使用super关键字获取父类成员
4. **类型匹配**
   - 鸭子辩型法
   - 子类的对象，始终可以赋值给父类——在面向对象中，这种现象，叫做**==里式替换原则==**
   - 如果需要判断一个数据的具体子类类型，可以使用instanceof
5. **继承的单根性和传递性**
   - ==单根性==：每个类最多只能拥有一个父类
   - ==传递性==：如果A是B的父类，并且B是C的父类，可以以为A也是C的父类

### 抽象类

1. 为什么需要抽象类？

   有时，某个类只表示一个抽象概念，主要用于提取子类共有的成员，而不能直接创建它的对象，该类可以作为抽象类。

   给类前面加上`abstract`，表示该类是一个抽象类，不可以创建一个抽象类的对象

2. **抽象成员**

   父类中，可能知道有些成员是必须存在的，但时不知道该成员的值或实例是什么，因此，需要有一种强约束，让继承该类的子类，必须要实现该成员。

   抽象类中，可以有抽象成员，这些抽象成员必须在子类中实现

3. 设计模式 — 模板模式

   - 设计模式：面对一些常见的功能场景，有一些固定的、经过多年实践的成熟方法，这些方法称之为设计模式
   - ==模板模式==：有些方法，所有的子类实现的流程完全一致，只是流程中的某个步骤的具体实现不一致，可以将该方法提取到父类，在父类中完成整个流程的实现，遇到实现不一致的方法时，将该方法做成抽象方法

###  静态成员

1. 什么是静态成员？

   **静态成员**，是指附着在类上的成员（属于某个构造函数）

   使用`static`修饰的成员，是静态成员

2. 实例成员：对象成员，属于某个类的对象

   静态成员：非实例成员，属于某个类
   
3. 静态方法中的`this`?

   - 实例方法中`this`指向的是**当前对象**
   - 静态方法中的`this`指向的是**当前类**

4. 设计模式 —— 单例模式

   **==单例模式==**：某些类的对象，在系统中最多只能有一个，为了避免开发者造成随意创建多个类对象的错误，可以使用单例模式进行强约束

   ```typescript
   class Board {
       width: number = 500;
       height: number = 700;
       
       init() {
           console.log('初始化期盼');
       }
       
       private constructor() {}
       
       private static _board?: Board;
       
       static createBoard(): Board {
           if (this._board) {
               return this._borad;
           } 
           this._board = new Board();
           return this._board;
       }
   }
   ```

### 接口

1. 面向对象领域中的接口含义：表达了某个类是否拥有某种能力
2. 某个类具有某种能力，其实，就是实现了某种接口
3. 类型保护函数：通过调用该函数，会触发TS的类型保护，该函数必须返回boolean
4. ==接口和类型别名的最大区别==：接口可以被类实现，而类型别名不可以
5. **接口可以继承类，表示该类型的所有成员都在接口中**

### 索引器

1. 索引器，`对象[值]`，使用成员表达式
2. 在TS中，默认情况下，不对所引器（成员表达式）做严格的类型检查
3. 使用配置`noImplicitAny: true`，开启对隐式any的检查
4. 在索引器中，键的类型可以是字符串，也可以是数字
5. 在类中，索引器书写的位置应该是所有成员之前
6. TS中索引器的作用：
   - 在严格的检查下，可以实现为类动态增加成员
   - 可以实现动态的操作类成员
7. 在TS中，所有的成员名在本质上，都是字符串，如果使用数字作为成员名，会自动转换为字符串
8. 在TS中，如果某个类中使用了两种类型的索引器，要求两种索引器的值类型必须匹配

```typescript
class User {
    [prop: string]:any
    constructor(
    	public name: string,
         public age: number
    ) {
    }
}
const u = new User('test', 11);
u['pid'] = 111;
u.tset = 'aaa'; // 配置索引器后可以在类之外添加成员
```

### this指向约束

1. 在JS中`this`指向的几种情况：大部分时候，`this`的指向取决于函数的调用方式

   - 如果直接调用函数（全局调用），`this`指向全局对象或`undefined`（启用严格模式）
   - 如果使用`对象.方法`调用，`this`指向本身
   - 如果是dom事件处理函数，`this`指向事件处理对象

   特殊情况：

   - 箭头函数：`this`在函数声明时确定指向，指向函数位置的`this`
   - 使用`call`、`apply`、`bind`手动绑定`this`对象

2. TS中的`this`

   - 配置`noImplicitThis: true`，表示不允许`this`隐式的指向any
   - 在TS中，允许在书写函数时，手动声明该函数中`this`的指向，将`this`作为函数的第一个参数，该参数只用于约束`this`，并不是真正的参数，也不会出现在编译结果中

```typescript
interface IUser {
    naem: string,
    age: number,
    sayHello(this: IUser): void // 这里this不属于函数的参数
}
    
    class User {
        sayHello(this: User) {
            // .....
        }
    }
```

## 装饰器

### 概述

> 面向对象的概念（java: 注解，c#: 特征），decorator

  1. 解决的问题：能够带来额外的信息量，可以达到关注点分离的目的

     - 关注点问题：在定义某个东西时，应该最清楚该东西的情况
     - 重复代码问题

     上述两个问题产生的根源：某些信息，在定义时，能够附加的信息有限。

  2. 装饰器的作用：为某些属性、类、参数、方法提供元数据信息（metadata）

     元数据：描述数据的数据

  3. 装饰器的本质

     在JS中，装饰器是一个函数（装饰器要参与运行）。

  4. 装饰器可以修饰

     - 类
     - 成员（属性，方法）
     - 参数

### 类装饰器

1. 类装饰器的本质是一个函数，该函数接收一个参数，表示类本身（构造函数本身）
2. 使用装饰器`@装饰器名`
3. 在TS中，如何约束一个变量为类
   - Function
   - `new(参数)=> object`
4. 在TS中要使用装饰器，需要开启`experimentalDecorators: true`
5. 装饰器函数的运行时间：在类定义后，直接运行
6. 类装饰器可以具有的返回值：
   - void，仅运行函数
   - 返回一个新的类：会将新的类替换掉装饰目标
7. 多装饰器情况：会按照后加入先调用的额顺序的顺序进行调用

```typescript
function test(target: new(...args: any[]) => onject) {
    console.log(target);
}

function test1(str: string) {
    return function test(target: new(...args: any[]) => onject) {
    	console.log(target);
	}
}

@test
@test1('这是一个字符串')
class A {}
```

### 成员装饰器

1. 属性

   属性装饰器也是一个函数，该函数需要两个参数：

   - 如果是静态属性，则为类本身；如果是实例属性，则为类的原型；
   - 固定为一个字符串，表示属性名

   ```typescript
   function a(target: any, key: string) {
       console.log(target === A.prototype, key);
   }
   
   class A {
       @a
       prop1: string
       
       @a
       prop2: string
   }
   ```

2. 方法

   方法装饰器也是一个函数，该函数需要三个属性：

   - 如果是静态属性，则为类本身；如果是实例属性，则为类的原型；
   - 固定为一个字符串，表示方法名
   - 属性描述对象

```typescript
function a(target: any, key: string, descriptor: PropertyDescriptor) {
    // ...
}

class A {
    @a
    prop1: string
    
    @a
    prop2: string
}
```

### reflect-metadata库

该库的作用：保存元数据

### class-validator 和  class-transformer

### 补充

1. 参数装饰器

   要求函数有三个参数

   - 如果方法是静态的，则为类本身；如果方法是实例方法，则为类的原型
   - 方法名
   - 在参数列表中的索引

   ```typescript
   class MyMath {
       sun(a: number, @test b: number) {
           return a + b;
       }
   }
   
   function test(target: any, method:string, index: number) {}
   ```

2. 关于TS自动注入的元数据

   如果安装了`reflect-metadata`，并且导入了该库，且在某个成员上添加了元数据，且启用了`emitDecoratorMetadata: true`，则TS会在编译结果中，会将约束的类型，作为元数据加入到相应的位置

   这样一来，TS的类型检查（约束），将有机会在运行时进行

3. AOP 

   将一些在业务中共同出现的功能模块，横向切分，已达到分离关注点的目的

## 类型演算

> 根据已知信息，计算出新的类型

### 三个关键字

1. typeof

   - TS中的typeof，书写的位置在类型约束的位置上
   - 表示获取某个数据的类型
   - 当typeof作用域类的时候，得到的类型，是该类的构造函数

   ```typescript
   const a = 'aaaaa';
   
   let b: typeof a = 'bbbbb';// 推导出a的类型
   ```

2. keyof

   - 作用于类、接口、类型别名，用于获取其他类型中的所有成员名组成的联合类型

   ```typescript
   interface User {
       loginId: string
       loginPassword: string
       age: number
   }
   
   function print(obj: User, prop: 'loginId'|'loginPassword'|'age') {
       console.log(obj[prop])
   }
   
   function print(obj: User, prop: keyof User){
       console.log(obj[prop]);
   }
   ```

3. in

   该关键字往往与`keyof`关键字联使，限制某个索引类型的取值范围

   ```typescript
   interface User {
       loginId: string
       loginPassword: string
       age: number
   }
   
   // 将User的所有属性值类型编程字符串，得到一个新类型
   type obj = {
       [p in keyof User]: string
   }
   
   type  obj = {
       readonly [p in keyof User]: User[p]
   }
   
   type  obj = {
       [p in keyof User?]: User[p]
   }
   
   type  obj<T> = {
       [p in keyof T?]: T[p]
   }
   ```

   ### 预定义的类型演算

   - Partial<T>：将类型T中的成员变成可选
   - Required<T>：将类型T中的成员变成必填
   - Readonly<T>：将类型T中的成员变成只读
   - Exclude<T, U>：从T中删除可以赋值给U的类型
   - Extract<T, U>：提取T中可以赋值给U的类型
   - NoNullable<T>：从T中提出null和undefined
   - RuturnType<T>：获取函数返回值类型
   - InstanceType<T>：获取构造函数类型的实例类型

## 声明文件

### 概述

1. 什么是声明文件？

   以`.d.ts`结尾的文件是声明文件

2. 声明文件有什么作用？

   为js文件提供类型声明：ts读取js文件时，得不到类型声明

3. 声明文件位置

   - 放置到tsconfig.json配置包含的目录中
   - 放置到node_modules/@types文件夹中
   - 手动配置，`typeRoots:[]`，前两个配置失效
   - 与js代码所在目录相同，并且文件名也相同的文件（用TS代码书写的工程发布之后的格式）

### 编写声明文件

1. 两种编写情况：

   - 手动编写

     使用场景

     - 对已有库，它是使用js书写而成，并且更改该库的代码为ts成本较高，可以手动编写声明文件
     - 对于一些第三方库，它们使用js书写而成，并且这些第三方库没有模块声明文件，可以手动编写声明文件

   - 自动生成

     - 工程是使用ts开发的，发布（编译）之后，是js文件，发布的是js文件；如果发布的文件，需要其他开发者使用，可以使用声明文件，来描述发布结果中的类型
     - 配置`tasonfig.json`中的`declaration: true`即可

2. **全局声明**

   ```typescript
   declare var console:{
       log(message?: any) =>void
   }
   ```

3. **局部声明**

   ```typescript
   declare module "lodash" {
       export function chunk<T>(array: T[], size: number): T[][];
   }
   ```

   

4. **三斜线指令**

   在一个声明文件中，包含另一个声明文件

   ```typescript
   /// <reference path = "">
   ```

   



























































