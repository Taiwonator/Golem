import React from 'react'

interface IIcon {
    children: React.ReactNode
}

const Icon: React.FC<IIcon> = ({ children }) => {
    return (
        <i>
            { children }
        </i>
    )
}

export default Icon

// logo
// bar--s
// bar--ne
// bar--nw