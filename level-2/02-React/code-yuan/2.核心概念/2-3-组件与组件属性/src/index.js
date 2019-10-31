import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';

// function MyFuncComp() {
//     return <h1>函数组件内容</h1>;
// }

// const funcComp = <div>
//     <MyFuncComp />
//     {/* { MyFuncComp() }/ */}
// </div>;

ReactDOM.render(<div>
    <MyFuncComp number={2} />
    <MyFuncComp string="123" />
    <MyFuncComp boolean={true} />
    <MyFuncComp arr={[1,2,3,4]} />
    <MyFuncComp obj={{a:1,b:2}} />
    <MyFuncComp obj={<h2>h2元素</h2>} />

    <MyClassComp number={2} />
    <MyClassComp string="123" />
    <MyClassComp boolean={true} />
    <MyClassComp arr={[1,2,3,4]} />
    <MyClassComp obj={{a:1,b:2}} />
    <MyClassComp obj={<h2>h2元素</h2>} />
</div>, document.getElementById('root'));
