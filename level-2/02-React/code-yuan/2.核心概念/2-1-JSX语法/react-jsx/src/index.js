import React from 'react';
import ReactDOM from 'react-dom';


// js表达式作为内容

// const a = 123;
// const b = 222;
// const obj = {a: 1, b: 2};
// const obj1 = (<span>span元素</span>);
// const array = [1, 23, 456, 4543543]

// const numbers = (new Array(30)).fill(0).map((item, i) => (<li key={i}>{i}</li>));

// const div = (
//     <>
//         {/* 注释 */}
//         <div>
//             {a} * {b} = {a*b}
//         </div>
//         <p>
//             {null}
//             {undefined}
//             {false}
//         </p>    
//         <p> 
//             {/* { obj }  */}
//             { obj1 }
//             { array }
//         </p>
//         <ul>{numbers}</ul>
//     </>
// );

// js表达式作为属性

// const url = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018939532,1617516463&fm=26&gp=0.jpg';
// const cls = 'image';

// const div = (
//     <div>
//         <img src={url} alt="" className={cls} style={{width: "100px",height: "200px"}} />
//     </div>
// );

// 防止注入攻击

// const content = "<h1>防止注入攻击</h1><p>注入</p>";

// // const div = (
// //     <div>
// //         { content }
// //     </div>
// // );

// const div = (
//     <div dangerouslySetInnerHTML={ {__html: content} }>

//     </div>
// );


// 元素的不可变性

let num = 1;
const div = (
    <div title="标题">
        { num }
    </div>
);

console.log(div.props);
// div.props.children = 2;
// div.props.title = '测试标题';

ReactDOM.render(div, document.getElementById('root'));

setInterval(() => {
    num++;
    const div = (
        <div title="标题">
            { num }
        </div>
    );
    ReactDOM.render(div, document.getElementById('root'));

    
}, 1000);
