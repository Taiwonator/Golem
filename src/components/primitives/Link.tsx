import React from 'react'
import { IContainer } from '../../types/react-types'
import NextLink from 'next/link'

interface ILink extends IContainer {
    external?: boolean,
    to?: string
}

const Link: React.FC<ILink> = ({ children, external, to }) => {
    to = to || '#'

    return (
        <NextLink href={to} target={external && '_blank'} rel={external && 'noopener'}>
            {children}
        </NextLink>
    )
}

export default Link