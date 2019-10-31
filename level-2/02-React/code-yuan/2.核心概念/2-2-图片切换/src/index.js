import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import src1 from './assets/images/1.jpg'
import src2 from './assets/images/2.jpg'
import src3 from './assets/images/3.jpg'

const srcArr = [src1, src2, src3];
let index = 0;
let timer = null;
const container = document.getElementById('root');

function render() {
    ReactDOM.render((<img alt="" src={srcArr[index]} />), container);
}

function start() {
    clearInterval(timer);
    timer = setInterval(() => {
        index = (index + 1) % 3;
        render();
    }, 2000);
}

function stop() {
    clearInterval(timer);
}

render();
start();

container.onmouseenter = function() {
    stop();
}

container.onmouseleave = function() {
    start();
}