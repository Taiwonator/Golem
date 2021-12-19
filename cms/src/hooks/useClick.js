import { useState, useEffect } from 'react'

const useClick = (leftAction, rightAction) => {
    const [ click, setClick ] = useState(null)

    useEffect(() => {
        const onClick = (e) => {
            let threshold = (window.innerWidth / 2)
            if(e.clientX > threshold) {
                setClick('right')
                rightAction()
            } else {
                setClick('left')
                leftAction()
            }
        }

        window.addEventListener('click', onClick)
        return () => { window.removeEventListener('click', onClick) }
    }, [click, leftAction, rightAction])

    return click
}

export default useClick