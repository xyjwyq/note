import React, { useState } from 'react'

export default function Comp() {
    // const arr = useState(0);
    // const n = arr[0];
    // const setN = arr[1];
    // console.log(arr);
    const [n, setN] = useState(0)

    return (
        <div>
            <button onClick={() => {
                setN(n -1);
            }}>-1</button>
            {n}
            <button onClick={() => {
                setN(n + 1);
            }}>+1</button>
        </div>
    )
}
