import React from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames'
import { IContainer } from 'src/types/react-types'

interface IHeader extends IContainer {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    uppercase?: boolean
}

const Header: React.FC<IHeader> = ({ children, tag, uppercase }) => {
    const Tag = tag || 'h2'
    const className = classNames(
        styles['header'],
        uppercase && styles['header--uppercase'],
    )
    

    return (
        <Tag className={className}>
            { children }
        </Tag>
    )
}

export default Header