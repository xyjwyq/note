
# webpack

[TOC]

## webpack 大纲

1. `webpack`是什么？

`webpack`是前端自动化构建工具

2. 代码开发与构建发布流程

需求确认 --> 本地开发 (development)--> 构建发布（webpack） --> 代码上线

3. 现代开发流程

需求（PM）--> 原型（PM & UI）--> 开发（FE / BE）--> 测试（QA）--> 上线（User）

一般正式上线之前会进行预发布与测试：预发布是模拟正常线上环境，并测试可能出现的错误，以防止真正上线后出现问题导致损失

<img src="webpack-yin.assets/%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.jpg" alt="项目开发流程" style="zoom:50%;" />

<img src="webpack-yin.assets/%E6%B5%81%E7%A8%8B1.jpg" alt="流程1" style="zoom:35%;" />

## 代码开发与环境构建

<img src="webpack-yin.assets/%E4%BB%A3%E7%A0%81%E5%BC%80%E5%8F%91%E4%B8%8E%E7%8E%AF%E5%A2%83%E6%9E%84%E5%BB%BA.jpg" alt="代码开发与环境搭建" style="zoom:50%;" />

1. ==less==解析

`npm install -g less`：安装==less解析器==

`lessc demo.less`：解析less文件为css，直接解析在命令行中

`lessc demo.less  demo.css`：将less文件解析到指定的css文件中

2. js文件压缩

`npm install -g uglify-js`：安装==ugify-js==插件

`uglifyjs demo.js -o demo.min.js`：压缩js文件到指定文件，`-o`表示输出

## 前端工程化

1. 前端工程化、组件化、模块化

   - ==前端工程化==：是指根据业务特点，将前端开发流程啊==规范化==、==标准化==，包括了开发流程、技术选型、代码规范、构建发布等，用于==提升前端工程师的开发效率和代码质量==

   - 模块化：代码复用
   - 组件化：页面上每一个独立的，可视/可交互的区域视为一个组件
     - 每个组件对应一个目录，组件所需资源在这个目录下进行维护
     - 组件之间相互独立
     - 页面可以由各个组件形成完整界面

   工程化是一种思想，而组件化和模块化是工程化思想的具体表现形式

   模块化和工程化的共同特点：==高内聚、低耦合==

2. 前端工程化体系

   - node服务层 --> 数据 /  后端模板渲染
   - web应用层 --> 技术选型 --> 开发调试
   - 前端运维层 --> 测试、部署

3. 前端工程化的出现

随着前端工程的业务与需求提升，个人的开发效率等受到极大的限制与约束，前端工程化应运而生，提升前端开发效率等

4. 前端工程化的体现与好处

   **体现**：

   - 开发：使用一些模板、模块、插件）等简化开发
   - 测试：使用自动化测试用例等
   - 部署：压缩、MD5、合并等

   **好处**：

   - 提升代码质量，提高开发效率

## 前端模块化

1. 什么是模块化？

   ==**模块化**==，是指将一个复杂的系统分解为多个模块，方便编码。

2. 为什么要使用模块化？

   降低复杂性，降低代码耦合性，部署方便，提高效率

3. 模块化的好处？

   - 避免命名冲突，减少变量空间污染
   - 更好的分离代码，按需加载
   - 更高的复用性
   - 更好的可维护性

4. 模块化实现演变

   - 函数形式
   - 命名空间形式
   - 立即执行函数
   - 模式增强

   ``` javascript
   // 模式增强
   (function($, global) {
       // $ , global
       // 不需要每次去全局作用域中找，只需要在自身作用域中找即可，节省时间，提高效率
   })(jQuery, window)
   ```

5. 模块化规范

   - CommonJs
     - 采用同步加载不同模块文件，适用于服务器端
     - 浏览器不兼容CommonJs，因为缺少module、exports、require、global四个环境变量，如需使用需要工具转换（browserify工具可转换CommonJs：`browserify index.js -o bundle.js`）
     
   - AMD（Asynchronous Module Definition）
     - 因CommonJs采用同步加载文件的策略，因此不适合浏览器，即同步容易造成网络迟缓，页面阻塞
     - AMD采用异步加载模块，允许指定回调函数，等模块异步加载完成后即可调用回调函数
     - 产物为 require.js
     - 核心是通过==define==定义模块，使用==require==加载模块，依赖前置，`define( moduleId, ['module1', 'module2'], function(m1, m2){} )`
     - `<script src="./js/require.js" data-main="index.js"></script>`
     
   - CMD

     - CMD采用异步加载，与SMD的主要区别在于，AMD依赖前置，提前加载，而CMD就近加载，按需加载
     - 产物俄日sea.js

   - ES6

     - ES6自带模块化，使用`import`关键字引入模块，`export`关键字导出模块
     - 目前浏览器暂不支持，一般使用==babel==将不被支持的`import`编译为当前收到广泛支持的==require==

     ```javascript
     // 导出
     export var a = 123;
     export function myFun() {}
     export default a = 123;
     export default function myFun() {}
     
     //导入
     import theDefault, {m1, m2} from 'libs';
     import theDefault from 'libs';
     import {m1, m2} from 'libs';
     import {m1 as custonName, m2} from 'libs';
     import * as myLib from 'libs';
     import 'lins'; // 只将lins加载进来，但是没有用到libs中暴露的接口
     ```

6. ==webpack==支持的模块化规范

   - AMD
   - ES Module（推荐）：webpack3 版本以上支持其语法，不需要插件转换
   - CommenJs：因webpack是具有NodeJs
   - 不支持<font color="red">CMD</font>/<font color="red">UMD</font>

## css预处理器 -- Less

<img src="webpack-yin.assets/less%E5%A4%A7%E7%BA%B2.jpg" alt="less大纲" style="zoom:50%;" />

## 前端自动化构建工具

1. 前端自动化构建工具的作用

   将源代码转换为可以执行的 Javascript、css、HTML

2. ==构建==是工程化、自动化思想在前端开发中的体现，将一系列流程用代码去实现，让代码自动化的执行这一系列复杂的流程

3. 自动化构建工具功能

   - 代码转换：将TypeScript转换为Javascript，将SCSS转换为CSS等
   - 文件优化：压缩Javascript、css、HTML代码，压缩并合并图片等
   - 代码分割：提取多个页面的公共代码，提取首屏不需要执行的部分代码让其异步运行
   - 模块合并：在采用模块化的项目中，会有很多模块或者文件，需要通过构建功能将模块分类合并成一个文件
   - 自动刷新：监听本地源代码变化，自动重新构建，刷新浏览器
   - 代码校验：在代码被提交到仓库前需要校验代码是否符合规范，以及单位测试是否通过
   - 自动发布：更新代码后，自动构建出线上发布代码并传输给发布系统

4. 自动化构建工具

   - Grunt（基本不用）
   - Gulp（小型项目）
   - Fis
   - Webpack（中、大型项目）

5. 构建工具选型

   - 是否符合团队的技术栈
   - 是否符合项目需求
   - 生态圈是否完善，社区是否活跃

6. 构建工具分类

   **基于任务运行的工具**：Grunt、Gulp

   ​	它们会自动执行指定的任务，像流水线，把资源放上去然后通过不同的插件进行加工，它们包含活跃的社区，丰富的插件，能方便打造各种工作流

   **基于模块化打包工具**：Browserify、Webpack、rollup.js

   ​	直接通过一定的方式引入需要的模块，可以实现按需加载、异步加载模块

   **整合型工具**：Yeoman、FIS、jdf、Athena等

   ​	使用了多种技术栈实现的脚手架工具，好处是即开即用，缺点是它们约束了技术选型，并且学习成本相对较高

7. ==webpack==有点

   - 专注于处理模块化的项目
   - 可通过==plugin==扩展，完成好用不失灵活
   - 使用场景不局限与web开发
   - 社区活跃，紧跟时代发展的新特性
   - 良好的开发体验

## webpack的安装与简单使用

1. 淘宝镜像安装：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
2. webpack安装：`npm install -g webpack`
3. ==webpack-cli==安装：`npm install -g webpack-cli`，在3版本之后需要安装才能使用webpack命令
4. `webpack demo.js -o bunddle.js`：将指定js文件打包至指定打包目录
5. `npm init`：初始化项目文件；`npm init -y`：按默认方式初始化项目文件
6. 通常在使用webpack时，会在项目中安装局部webpack，防止其他开发者的webpack全局版本的差异导致的错误
   - `npm install webpack --save-dev`：安装局部webpack至开发环境，等同于`npm install webpacl -D`
   - `npm install webpack --save`：安装webpac至生产环境

## webpack核心概念

webpack默认配置文件为webpack.config.js，使用`webpack`可以直接使用该配置文件中的配置，进行项目打包

若不使用默认配置文件名称，则使用`webpack --config webpack.config.product.js`

### 入口（entry）

&ensp;&ensp; ==入口起点==：指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始，进入入口起点后，webpack会找出哪些模块和库是入口起点（直接和间接）依赖的。

&ensp;&ensp;每个依赖项随即被处理，最后输出到bundle文件中

```javascript
// 默认情况下，主入口文件为/src/index.js
module.exports = {
    entry: './src/entry.js' // 单个入口配置
   	entry: { // 多入口配置
    	index: './src/inex.js',
    	app: './src/app.js'
	}
}
```

### 出口（output）

&ensp;&ensp;==output==：告诉webpack在哪里输出它所创建的bundle，以及如何命名这些文件，默认值为`./dist`。

&ensp;&ensp;即使存在多个入口文件，也可以只指定一个输出配置

&ensp;&ensp;基本上，整个应用程序结构，都会被编译到指定的输出路径的文件夹中

```javascript
const path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js' // 对应单入口配置
        filename: '[name].bunddle.js' // 对应多入口配置,[name]会编译为多入口配置中的属性名
        filename: '[name][hash5].bunddle.js' // 对应多入口配置,[name]会编译为多入口配置中的属性名
    }
}
```

### loader

&ensp;&ensp;==loader==：用于对源模块的源代码进行转换，它可以在`import`或加载模块时预处理文件

&ensp;&ensp;==loader==让webpack能够去处理那些非Javascript文件（webpack自身子理解Javascript），它可以将所有类型的文件转换为webpack能够处理的有效模块，然后就可以利用webpack的打包能力，对它们进行处理

&ensp;&ensp;本质上，loader将所有类型的文件，转换为应用程序的依赖图（和最终的Module）可以直接引用的模块

&ensp;&ensp;在webpack的配置中，loader有两个目标

&ensp;&ensp;&ensp;&ensp; - `test`属性，用于标识出应该被对应loader进行转换的某个或某些文件

&ensp;&ensp;&ensp;&ensp; - `use`属性：表示进行转换时，应该使用哪个loader

   ```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/, //正则匹配
                use: ['style-loader' ,'css-loader' ,'less-loader'] // use中loader执行顺序从后往前
            }
        ]
    }
}
   ```

### 插件（plugin）

&ensp;&ensp;==loader==被使用于转换某些类型的模块，==插件==则可以用于执行范围更广的任务。

&ensp;&ensp;==插件==的范围包括：从打包优化到压缩，一直到重新定义环境中的变量。插件接口功能及其强大，可以用来处理各种各样的任务

```javascript
const HtmlWebpackPlugin = require('htmo-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
```

### 模式（mode）

&ensp;&ensp;&ensp;&ensp;通过选择`development`或`profuction`之中的一个，来设置`mode`参数，可以启用相应模式下的webpack内置优化

```javascript
module.exports = {
    mode: 'development / profuction'
}
```

## js tree shaking

1. 什么是js tree shaking?

   ==js tree shaking==：是指将源代码中没有使用到的代码剔除，减小文件体积，提高运行速度

2. 如何使用js tree shaking?

   在webpack生产环境下自带js tree shaking功能	但其功能只支持词法和语法的 js tree shaking，并不支持作用域（scope）的 js tree shaking;

3. 如何进行深度tree shaking?

   使用插件`webpack-deep-scope-plugin`

   ```javascript
   // npm install webpack-deep-scope-plugin
   const WebpackDeepScopePlugin = require('webpack-deep-scope-plugin').default;
   module.exports = {
       plugins: [
           new WebpackDeepScopePlugin()
       ]
   }
   ```

## css tree shaking

1. 单独抽离css文件

   `mini-css-extract-plugin`插件

2. css tree shaking

   `purifycss-webpack`插件

   css shaking 应该在js shaking 之前，要不然会出现错误

   css tree shaking 会匹配html文件的注释标签，所以应将html中注释标签清除

## PostCss使用

1. `postCss`是什么？

   `postCss`是一个功能呢比较单一的工具，它提供了一种方式：用Javascript代码来处理css

   处理流程如下：

   - 先将css代码解析成抽象语法树（AST），
   - 然后用插件处理抽象语法树 ：插件基于css代码的AST所能进行的操作是多种多样的
     - 支持变量和混入（Mixin）
     - 增加浏览器相关的声明前缀
     - 把使用将来的css（css next）规范的样式规则转译成当前css规范支持的格式

2. `postCss`在webpack中的使用

   - `postCss`一般不单独使用，而是与已有的构建工具进行集成，如 webpack、Gulp、Grunt等，完成集成后，选择满足功能需求的postCss插件并进行配置
   - 在webpack中，使用`postcss-loader`来执行插件处理，需在`style-loader`与`css-loader`之前执行，在`less-loader`、`scss-loader`后执行
   - `postCss`重用插件有
     - AutoPrefixer
     - cssnext
     - cssnano

   ```javascript
   // npm install -D postcss postcss-loader autoprefixer cssnano postcss-cssnext
   module.exports = {
       module: {
           rules: [
               {
                   test: /\.less$/,
                   use: [
                       'style-loader',
                       'css-loader',
                       {
                           loader: 'postcss-loader',
                           options: {
                               ident: 'postcss',
                               plugins: [
                                   require('postcss-cssnext')(),
                                   // postcss-next插件中完全包含autoprefixer中的功能
                                   // require('autoprefixer')(),
                                   require('cssnano')()
                               ]
                           }
                       }
                   ]
               }
           ]
       }
   }
   ```

## html in webpack

1. 根据当前的 html 文件，通过 webpack 的处理，生成一个 html 文件，并自动插入处理的 css 文件以及 js 文件

2. `html-webpack-plugin`插件：以当前html为模板，生成新的html文件，并动态插入处理后的js与css文件

3. `clean-webpack-plugin`插件：清除之前打包好的文件

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeCOmments: true, // 清理注释
                collapseWhitespace: true, // 清理空格
            }
        }),
        new CleanWebpackPlugin()
    ]
}
```

## 提取公共代码

1. 减少代码冗余，提高用户加载速度
2. webpack4 新增`optimization`配置

```javascript
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // index: './index.js'
        A: './src/A.js',
        B: './src/B.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js',
        chunkFilename: '[name][hash:5].common.js' // 导出的公共模块的名称
    },
    optimization: {
        // webpack4 新增，代替的webpack3z 中commons-chunk-plugin
        splitChunks: { // 分离包
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks: 'all', // 哪些js文件范围内
                    minSize: 1, // 默认为30kb， 表示公共模考最小的抽离体积
                    minChunks: 2, // 公共模块被引入的最小次数
                    priority: 1
                },
                vendor: { // 提取第三方公共代码块
                    name: 'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 10 // 优先级
                }
            },
           
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'entry.html',
            template: './index.html',
            minify: {
                removeComments: true, //移除评论
                collapseWhitespace: true // 移除空白
            }
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ],
    mode: 'development'
}
```

##  图片处理

1. 使用 `url-loader` 或 `file-loader`、`img-loader`， `url-loader`包含`file-loader`中所有功能
   - `url-loader`：决定图片是单独打包出来，还是抽取为base64格式的图片
   - `img-loader`：压缩图片
2. `html-loader`：处理html中引入的内容

```javascript
var path = require('path');
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jp?g|png|jpeg|gif)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[name][hash:5].[ext]',
                            // 图片大小 小宇limit限制，则大包围诶base64，否则单独抽离，limit单位为byte
                            limit: 100,
                            outputPath: 'img'
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-mozjpeg')({
                                    // progressive: true,
                                    // arithmetic: false
                                    quality: 50
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin()

    ],
    mode: 'development'
}
```

## 字体文件处理

1. 使用 `url-loader` 识别并且处理 `emt、woff`等结尾的字体文件，同时根据字体文件大小，可以灵活 配置是否进行base64编码。

```javascript
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash:5].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
           {
            test: /\.(eot|woff2?|ttf|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  name: "[name]-[hash:5].min.[ext]",
                  limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                  publicPath: "fonts/",
                  outputPath: "fonts/"
                }
          	},
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            minify: {
                removeComments: true,
                // collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin()

    ],
    mode: 'development'
}
```

## 使用和管理第三方JS库

1. 使用 `webpack.ProvidePlugin`
   - 参数是键值对形式，键就是我们项目中使用的变量名，值就是键所指向的库
   - `webpack.ProvidePlugin`会先从`npm`安装的包中查找是否有符合的库。
   - 如果`webpack`配置了`resolve.alias`选项（理解成“别名”），那么`webpack.ProvidePlugin`就会顺着这条链一直找下去

```javascript
// webpack.config.js
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    publicPath: __dirname + "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].chunk.js"
  },
  resolve: {
    alias: {
      jQuery$: path.resolve(__dirname, "src/vendor/jquery.min.js")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery", // npm
      jQuery: "jQuery" // 本地Js文件
    })
  ]
};
```

## 开启本地服务器

1. 使用 `webpack-dev-server`指令开启服务器，但应先使用npm安装，`npm install webpack-dev-server -g`
   - 一般会下载一个全局，一个局部的`webpack-dev-server`
   - 自带监听，自动刷新浏览器功能
   - `webapck-dev-server --open`：启动服务器并且打开浏览器

```javascript
module.exports  = {
    devServer: {
        port: '9091'， // 更改服务器启动端口
        contentBase: 'dist', // 默认打开的路径
    }
}
```

2. `webpack watch`：开启监听功能，但不自动刷新浏览器

## hot module replace

1. 由于服务器监听和刷新浏览器，每次都要将所有数据重新请求，比较浪费性能，而hot module replace则只更新更改的文件

```javascript
var Webpack = require('require');
module.exports = {
	plugins: [
		new Webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		port: '9091',
		contentBase: 'dist',
        hot: true
	}
}


// 在入口文件中添加
if (module.hot) {
	module.hot.accept();
}
```








