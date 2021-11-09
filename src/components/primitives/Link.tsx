import React from 'react'

interface ILink {
    children: React.ReactNode
}

const Link: React.FC<ILink> = ({ children }) => {
    return (
        <a href='#'>{ children }</a>
    )
}

export default Link