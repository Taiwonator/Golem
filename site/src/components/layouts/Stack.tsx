import React from 'react'
import styles from './Stack.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IStack extends IContainer {
    gap?: 'small' | 'medium' | 'wide'
}

const Stack: React.FC<IStack> = ({ children, gap }) => {

    const className = classNames(
        styles['stack'],
        gap ? styles[`gap--${gap}`] : styles['gap--medium']
    )


    return (
        <div className={className}>
            { children }
        </div>
    )
}

export default Stack