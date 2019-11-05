import React from 'react'

export default function Student(props) {
    return (
        <li>
            【姓名】{props.id}
            【出生年月】{props.birth}
            【性别】{props.sex === 1 ? '男' : '女'}
        </li>
    )
}
