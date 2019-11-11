import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CompC extends Component {

    static propTypes = {
        a: PropTypes.string.isRequired,
        b: PropTypes.bool.isRequired,
        onClick: PropTypes.func
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={this.props.onClick}>
                { this.props.a }
                { this.props.b }
            </div>
        )
    }
}
