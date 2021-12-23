import React from 'react'
import { IContainer } from '../../types/react-types'

interface ILink extends IContainer {
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