import React from 'react'
import styles from './Content.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IContent extends IContainer {
    width?: 'small' | 'medium' | 'wide'
}

const Content: React.FC<IContent> = ({ children, width }) => {

    const className = classNames(
        styles['content'],
        width && styles[`content--${width}`]
    )


    return (
        <div className={className}>
            { children }
        </div>
    )
}

export default Content