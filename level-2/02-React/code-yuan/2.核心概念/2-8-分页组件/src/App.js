import React, { Component } from 'react'
import Pager from './components/Pager'
import StudentList from './components/StudentList'
import Modal from './components/Modal'

export default class App extends Component {

    state={
        current: 1,
        total: 0,
        pageSize: 10,
        panelNumber: 5,
        students: [],
        isLoading: false
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
        // this.setState(() => {
        //     return {
        //         current: target
        //     }
        // });
        // console.log(this.state.current);
        // this.fetchStudents();
        
    }

    async fetchStudents() {
        this.setState({
            isLoading: true
        });
        const resp = await fetch(`http://open.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.pageSize}`)
            .then(resp => resp.json())
            .then(resp => resp.data);
        this.setState({
            total: resp.cont,
            students: resp.findByPage,
            isLoading: false
        });
    }

    render() {
        return (
            <div>
                <StudentList students={this.state.students} />
                <Pager {...this.state} onPageChange={this.handlePageChange} />
                <Modal isLoading={this.state.isLoading} />
            </div>
        )
    }
}
