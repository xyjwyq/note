import React, { Component } from 'react'
import Ball from './Ball';
import {getRandom} from '../util';

export default class BallList extends Component {

    state = {
        ballList: []
    }

    constructor(props) {
        super(props);
        this.createBall();
    }

    createBall() {
        const timer = setInterval(() => {
            const ballProps = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bg: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)}`,
            };
            this.setState({                
                ballList: [...this.state.ballList, ballProps]
            });
            if (this.state.ballList.length >= 20) {
                clearInterval(timer);
            }
        }, 1000);       
    }

    render() {
        const balls = this.state.ballList.map((item, i) => (<Ball key={i} {...item} />));
        return (
            <div>
                {balls}
            </div>
        )
    }
}
