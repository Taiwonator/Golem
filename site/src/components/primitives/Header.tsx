import React from 'react'
import styles from './Header.module.scss'
import cx from 'classnames'
import { IContainer } from 'src/types/react-types'

interface IHeader extends IContainer {
    large?: boolean,
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
    theme?: string,
    uppercase?: boolean,
    className?: string
}

const Header: React.FC<IHeader> = ({ children, large, tag, theme, uppercase, className }) => {
    const Tag = tag || 'h2'
    const classNames = cx(
        styles['header'],
        theme && styles[`header--${theme}`],
        uppercase && styles['header--uppercase'],
        large && styles['header--large'],
        className
    )
    

    return (
        <Tag className={classNames}>
            { children }
        </Tag>
    )
}

export default Header