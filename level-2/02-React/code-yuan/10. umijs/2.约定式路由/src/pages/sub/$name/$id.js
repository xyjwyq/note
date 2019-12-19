import React from 'react'

export default function $id(props) {
    console.log(props);
    return (
        <div>
            {/* {props.route.march.params.id} */}
            {props.match.params.id}
        </div>
    )
}
