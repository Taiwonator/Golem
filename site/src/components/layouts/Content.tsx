import React from 'react'
import styles from './Content.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IContent extends IContainer {
    width?: 'small' | 'medium' | 'wide',
    className?: string
}

const Content: React.FC<IContent> = ({ children, className, width }) => {

    return (
        <div className={classNames(
            styles['content'],
            width && styles[`content--${width}`],
            className
        )}>
            { children }
        </div>
    )
}

export default Content