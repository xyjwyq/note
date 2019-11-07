import React from 'react';
import './index.css';

/**
 * 分页组件
 * 属性：
 * current：初始页码
 * total：总数据量
 * pageSize：页面容量，每页显示的数据量
 * panelNumber：数字页码最多显示多少个
 * onPageChange：当页码改变的事件
 */
export default function Pager(props) {
    const pageNumber = getPageNumber(props);
    if (pageNumber === 0 ) {
        return null;
    }

    const min = getMinNumber(props);
    const max = getMaxNumber(min, pageNumber, props);

    const pages = [];
    for (let i = min; i <= max; i++) {
        pages.push((
            <span 
                className={props.current === i ? "item active" : "item"} 
                onClick={() => {toPage(i, props)}}
                key={i}>{i}</span>
        ));
    }
    return (
        <>
            <span 
                onClick={() => {toPage(1, props)}}
                className={props.current === 1 ? "item disabled" : 'item'}
            >首页</span>
            <span 
                onClick={() => {toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}}
                className={props.current === 1 ? "item disabled" : 'item'}
            >上一页</span>
            {pages}
            <span 
                onClick={() => {toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)}}
                className={props.current === pageNumber ? "item disabled" : 'item'}
            >下一页</span>
            <span 
                onClick={() => {toPage(pageNumber, props)}}
                className={props.current === pageNumber ? "item disabled" : 'item'}
            >尾页</span>
            <span className="current">{props.current}</span>
            /
            <span>{pageNumber}</span>
        </>
    )
}

/**
 * 计算总页数
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.pageSize);
}

/**
 * 跳转到某一页
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, props) {
    console.log(target)
    if (target === props.current) {
        return;
    }
    props.onPageChange && props.onPageChange(target);
   
}

function getMinNumber(props) {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}

function getMaxNumber(min, pageNumber, props) {
    let max = min + props.panelNumber -1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}