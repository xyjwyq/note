1. vue项目目录结构

   ![vue项目模目录结构](vue%E9%A1%B9%E7%9B%AE%E6%B5%81%E7%A8%8B%E6%A2%B3%E7%90%86.assets/vue.dist.svg)

2. 项目构建到发布流程

   1. 使用`vue-cli3`初始化项目`vue create project-name`

   2. 在`vue.config.js`中进行相关的配置

   3. 在`.env.[mode].local > .env.[mode] > .env.local > .env `文件中进行项目环境配置

   4. 路由配置 `router文件夹`

   5. vuex配置 `store文件夹`

   6. 接口配置 `services文件夹`

   7. 公共设置配置 `utils文件夹`

   8. 编码技巧与规范

      - 使用对象代替 if 以及 switch
      - 使用 `Array.from `快速生成数组
      - 使用 `router.beforeEach` 来处理跳转前逻辑
      - 使用 v-if 来优化页面加载
      - 路由跳转尽量使用 name 而不是 path
      - 使用 key 来优化 v-for 循环
      - 使用 computed 代替 watch
      - 统一管理缓存变量
      - 使用 setTimeout 代替 setInterval
      - 不要使用 for in 循环来遍历数组
   9. 编写可复用性模块
    
      - 函数封装
      - 组件封装
      - 插件封装
    
   10. 合理划分容器组件和展示组件
    
   11. chrome调试
    
   12. 将UI界面交给第三方库
    
   13. mock数据
    
   14. 知识点
    
       - 使用 performance 开启性能追踪
   
       - 使用 errorHandler 来捕获异常
   
       - 使用 nextTick 将回调延迟到下次 DOM 更新循环之后执行
   
       - 使用 watch 的深度遍历和立即调用功能
   
       - 对低开销的静态组件使用 v-once
   
       - 使用 $isServer 判断当前实例是否运行于服务器

