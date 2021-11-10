import React from 'react'
import styles from './Header.module.scss'

interface IHeader {
    children: React.ReactNode, 
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const Header: React.FC<IHeader> = ({ children, tag }) => {
    const Tag = tag || 'h2'

    return (
        <Tag className={styles['header']}>
            { children }
        </Tag>
    )
}

export default Header