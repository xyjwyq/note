import React from 'react'

export default function Comp(props) {
    console.log(props);
    return (
        <div>
            {props.content2}
            {props.children || '默认内容'}
            {props.content1}
        </div>
    )
}
