import React from 'react'

interface ILink {
    children: React.ReactNode,
    external?: boolean,
    to?: string
}

const Link: React.FC<ILink> = ({ children, external, to }) => {
    to = to || '#'

    return (
        <a 
            href={to}
            target={external && '_blank'}
            rel={external && 'noopener'}
        >
            { children }
        </a>
    )
}

export default Link