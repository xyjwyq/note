import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {

    state = {
        isOver: false
    }

    // handleOver() {
    //     console.log(this);
    //     console.log('over');
    // }

    // handleClick() {
    //     console.log(this);
    //     console.log('click');
    // }

    // constructor(props) {
    //     super(props);

    //     this.handleClick = this.handleClick.bind(this);
    //     this.handleOver = this.handleOver.bind(this);
    // }

    handleOver=() => {
        // console.log(this);
        // console.log('over');
        this.setState({
            isOver: true
        });
    }

    handleClick=() => {
        console.log(this);
        console.log('click');
    }

    render() {
        let state ='';
        if (this.state.isOver) {
            state="倒计时结束！"
        }
        return (
            <div>
                <Tick
                    number={5}
                    onOver={this.handleOver}
                    // onClick={this.handleClick.bind(this)}
                    onClick={this.handleClick}
                />
                <h2>
                    {state}
                </h2>
            </div>
           
        )
    }
}
