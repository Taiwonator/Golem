
import React, { useState, useEffect } from 'react'
import SETTINGS  from 'src/styles/settings'

export const useResponsiveWidth = () => {
    const [ device, setDevice ] = useState('mobile')

    const onResize = () => {
        let minTabletWidth = parseInt(SETTINGS.minTablet.slice(0, -2))
        let minDesktopWidth = parseInt(SETTINGS.minDesktop.slice(0, -2))
        
        if(window.innerWidth >= minDesktopWidth) {
            setDevice('desktop')
        } else if (window.innerWidth < minDesktopWidth && window.innerWidth >= minTabletWidth) {
            setDevice('tablet')
        } else {
            setDevice('mobile')
        }

        
    }

    useEffect(() => {
        onResize()
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
      }, [device])

    return device
}