import React from 'react'
import styles from '@/assets/css/button.less'

export default function Home() {
    return (
        <div className="active">
            Home
            <p>
                <button onClick={() => console.log('test')} className={styles.active}>test</button>
            </p>
        </div>
    )
}
