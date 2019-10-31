import React, { Component } from 'react';
import Student from './Student';

export default class StudentList extends Component {
    render() {
        var students = this.props.students.map(stu => (<Student key={stu.id} {...stu} />))
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
