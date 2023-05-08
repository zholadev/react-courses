import React, {useState} from 'react';
import styles from './Counters.module.sass'

function Counters() {
    const [count, setCount] = useState(0)
    const implement = () => {
        setCount(count + 1)
    }

    return (
        <div className={styles.button}>
            <h1>{count}</h1>

            <button onClick={implement}>Click to button</button>
        </div>
    );
}

export default Counters;