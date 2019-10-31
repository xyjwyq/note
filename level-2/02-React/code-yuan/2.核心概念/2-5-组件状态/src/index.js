import React from 'react';
import ReactDOM from 'react-dom';
import Tick from './components/Tick';

// let time = 10;

// function render() {
//     const timer = setInterval(() => {       
//         time--;
//         if (time < 0) {
//             clearInterval(timer);
//             return;
//         }
//         ReactDOM.render(<Tick time={time}/>, document.getElementById('root'));
        
//     }, 1000);   
// }

// render();

ReactDOM.render(<Tick time={10}/>, document.getElementById('root'));


