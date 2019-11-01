import React, { Component } from 'react';
import './Ball.css';

export default class Ball extends Component {
    state = {
        left: this.props.left || 0,
        top: this.props.top || 0,
        xSpeed: this.props.xSpeed || 100,
        ySpeed: this.props.ySpeed || 100
    }

    constructor(props) {
        // 小球的初始位置：left, top
        // 小球的初始速度：xSpeed, ySpeed 每秒运动的像素值
        // 小球的背景颜色：bg
        super(props);
        this.start();
    }

    start() {
        const duration = 16; // 单位为ms
        setInterval(() => {
            const xDis = this.state.xSpeed * duration / 1000;
            const yDis = this.state.ySpeed * duration / 1000;

            let newLeft = this.state.left + xDis;
            let newTop = this.state.top + yDis;

            if (newLeft <= 0) {
                newLeft = 0;
                this.setState({
                    xSpeed: -this.state.xSpeed
                });

            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100;
                this.setState({
                    xSpeed: -this.state.xSpeed
                });
            } 

            if (newTop <= 0) {
                newTop =  0;
                this.setState({
                    ySpeed:-this.state.ySpeed
                });

            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100;            
                this.setState({
                    top: document.documentElement.clientHeight - 100,
                    ySpeed: -this.state.ySpeed
                });
            }

            this.setState({
                top: newTop,
                left: newLeft
            });
        }, duration);
    }

    render() {
        return (
            <div className="ball" style={{
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.bg || "#f40"
            }}>
            </div>
        )
    }
}
