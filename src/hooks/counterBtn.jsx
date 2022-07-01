import React, { useEffect, useState } from 'react';

export default function CounterBtn() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `${count} fois`
    })
    
    return (
        <>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter +1</button>
            <button onClick={() => setCount(count + 2)}>Incrémenter +2</button>
            <button onClick={() => setCount(count - 1)}>Décrementer -1</button>
        </>
    )
}