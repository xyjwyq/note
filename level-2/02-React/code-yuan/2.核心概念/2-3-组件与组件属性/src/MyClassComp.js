import React, { Component } from 'react'

export default class MyClassComp extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>类组件内容</h1>
            </div>
        )
    }
}
