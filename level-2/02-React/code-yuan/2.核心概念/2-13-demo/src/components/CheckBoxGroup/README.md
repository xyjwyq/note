## 说明文件

1. data: 每个checkbox为一个对象，包含value与text属性
例如：
```js
data = [
    {value:"football", text:"足球"},
    {value:"basketball", text:"篮球"},
    {value:"movie", text:"电影"},
]
```
2. name：每一个多选框的name属性值
3. chooseData: 数组，表示当前选中的value值
4. onChange：当选中项发生改变时的事件
