import { useState, useEffect } from 'react'

export const useScroll = () => {
    const [ scrollY, setScrollY ] = useState(0)

    useEffect(() => {
        const onScroll = () => {
          setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
      }, [scrollY])

    return scrollY
}