import React from 'react'

export default function Student(props) {
    return (
        <li>
            【姓名】{props.name}
            【年龄】{props.age}
            【邮箱】{props.email}
            【性别】{props.sex === 1 ? '男' : '女'}
        </li>
    )
}
