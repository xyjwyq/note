import React from 'react';
import './index.css'

export default function Modal(props) {
    if (!props.isLoading) {
        return null;
    }
    return (
        <div className="modal">
            <p className="content">加载中。。。</p>
        </div>
    )
}
