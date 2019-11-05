import React from 'react'
import Student from './Student'

export default function StudentList(props) {
    const students = props.students.map(item => (
        <Student key={item.id} {...item} />
    ));
    return (
        <ul>
            {students}
        </ul>
    )
}
