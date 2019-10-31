import React from 'react';
import ReactDOM from 'react-dom';
import StudentList from './components/StudentList';

const students = [
    {
        id: 1,
        name: 'xxxx',
        age: 12,
        email: 'dfdfdsf@dddf',
        sex: 1,
        loves: 'dfdfdsfa'
    },
    {
        id: 2,
        name: 'yyyyyyy',
        age: 57,
        email: 'dfdfdsf@dddf',
        sex: 1,
        loves: 'dfdfdsfa'
    },
    {
        id: 3,
        name: 'zzzzzzz',
        age: 32,
        email: 'dfdfdsf@dddf',
        sex: 1,
        loves: 'dfdfdsfa'
    }
];

ReactDOM.render(<StudentList students={students} />, document.getElementById('root'));

