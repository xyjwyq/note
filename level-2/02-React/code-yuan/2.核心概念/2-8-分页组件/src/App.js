import React, { Component } from 'react'
import Pager from './components/Pager'
import StudentList from './components/StudentList'

export default class App extends Component {

    state={
        current: 1,
        total: 0,
        pageSize: 10,
        panelNumber: 5,
        students: []
    }

    constructor(props) {
        super(props);
        this.fetchStudents();
    }

    handlePageChange= target => {       
        this.setState({
            current: target
        },() => {
            this.fetchStudents();
        });
        
    }

    async fetchStudents() {
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.pageSize}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        this.setState({
            total: resp.cont,
            students: resp.findByPage
        });
    }

    render() {
        return (
            <div>
                <StudentList students={this.state.students} />
                <Pager {...this.state} onPageChange={this.handlePageChange} />
            </div>
        )
    }
}
