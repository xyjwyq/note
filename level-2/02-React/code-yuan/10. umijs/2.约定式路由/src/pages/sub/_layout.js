import React from 'react'

export default function _layout(props) {
    return (
        <div>
            <header>
                <h1>sub页头</h1>
            </header>
            <div className="main">
                {props.children}
            </div>
            <footer>
                <h1>sub页脚</h1>
            </footer>
        </div>
    )
}
