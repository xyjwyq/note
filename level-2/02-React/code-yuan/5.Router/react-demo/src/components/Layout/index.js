import React from 'react'
import './index.css'
import PropTypes from 'prop-types'


Layout.propTypes = {
    header: PropTypes.node,
    aside: PropTypes.node,
    children: PropTypes.node
}

export default function Layout(props) {
    return (
        <div className="container">
            <header className="header">
                {props.header}
            </header>
            <div className="middle">
                <aside className="aside">
                    {props.aside}
                </aside>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
