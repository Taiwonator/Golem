import React, { useState, useEffect, useRef, MutableRefObject } from 'react'


export const useScreenElement = (options): [MutableRefObject<HTMLInputElement>, boolean] => {
    // Create ref
    const ref = useRef<HTMLInputElement>(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        // Create observer
        const observer = new IntersectionObserver(callbackFunction, options);
        if(ref.current) observer.observe(ref.current)
        
        
        // Unmount
        return () => { if(ref.current) observer.unobserve(ref.current) }

    }, [ref, options])

    return [ref, isVisible]
    // Return ref and isVisible
}