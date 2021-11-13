import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { IContainer } from '../../types/react-types'

interface IButton extends IContainer {
    border?: boolean,
    color?: string
}

const Button: React.FC<IButton> = ({ border, children, color }) => {
    const className = classNames(
        styles['button'],
        border && styles['button--border']
    )

    return (
        <button className={className} style={{ backgroundColor: color }}>{ children }</button>
    )
}

export default Button