import React from 'react'
import styles from './Content.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IContent extends IContainer {
    width?: 'small' | 'medium' | 'wide',
    className?: string,
    center?: boolean
}

const Content: React.FC<IContent> = ({ children, center, className, width }) => {

    return (
        <div className={classNames(
            styles['content'],
            width && styles[`content--${width}`],
            center && styles[`content--center`],
            className
        )}>
            { children }
        </div>
    )
}

export default Content