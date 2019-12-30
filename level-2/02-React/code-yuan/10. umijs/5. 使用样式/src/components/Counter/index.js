import React from 'react'
import styles from './index.less'

console.log(styles);

export default function Counter() {
    return (
        <div className={`${styles.container} ${styles['text-color']}`}>
            test
        </div>
    )
}
