import React from 'react'
import styles from './Stack.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IStack extends IContainer {
    gap?: 'small' | 'medium' | 'large',
    className?: string
}

const Stack: React.FC<IStack> = ({ children, className, gap }) => {

    return (
        <div className={classNames(
            styles['stack'],
            gap ? styles[`gap--${gap}`] : styles['gap--medium'],
            className
        )}>
            { children }
        </div>
    )
}

export default Stack