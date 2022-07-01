import React, {useState, useEffect} from "react";

export default function HeaderEffect() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 700)
        })
    }, [])

    return (
        <>
            <header className={scroll ? 'banner-scroll' : 'banner'}>
                <p>Header Effect</p>
            </header>
        </>
    )
}