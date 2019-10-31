import React, { Component } from 'react'

export default class Tick extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        };
        const timer = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            });
            if (this.state.time === 0) {
                clearInterval(timer);
            }
        }, 1000)
    }

    render() {
        return (
            <div>
                倒计时：{ this.state.time }
            </div>
        )
    }
}
