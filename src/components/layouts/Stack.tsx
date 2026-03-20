import React from 'react'
import styles from './Stack.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IStack extends IContainer {
    gap?: 'small' | 'medium' | 'large' | 'huge',
    className?: string,
    tag?: 'div' | 'article' | 'section'
}

const Stack: React.FC<IStack> = ({ children, className, gap, tag }) => {
    const Tag = tag || 'div'

    return (
        <Tag className={classNames(
            styles['stack'],
            gap ? styles[`gap--${gap}`] : styles['gap--medium'],
            className
        )}>
            { children }
        </Tag>
    )
}

export default Stack