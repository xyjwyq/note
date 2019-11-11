import React, { Component } from 'react'

export default class index extends Component {
    static defaultProps = {
        a: 1,
        b: 'test',
        c: 'sfdsdfdsaf'
    }

    render() {
        return (
            <div>
                {this.props.a} ,
                {this.props.b} ,
                {this.props.c} ,
                {this.props.d}
            </div>
        )
    }
}
