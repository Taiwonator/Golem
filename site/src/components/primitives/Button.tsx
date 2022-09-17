import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { IContainer } from '../../types/react-types'

interface IButton extends IContainer {
    border?: boolean,
    color?: string,
    disabled?: boolean,
    theme?: string,
    onClick?: () => void
}

const Button: React.FC<IButton> = ({ border, children, color, disabled, theme, otherClassNames, onClick }) => {
    const className = classNames(
        styles['button'],
        border && styles['button--border'],
        disabled && styles['button--disabled'],
        otherClassNames
    )

    const Component = 
    !theme 
    ? <button onClick={() => onClick && onClick()} className={className} style={{ backgroundColor: color }} disabled={disabled}>{ children }</button>
    : <button 
        onClick={() => onClick && onClick()}
        className={classNames(className, styles['button--blog'])}
        disabled={disabled}
        style={{
            color,
            border: `2px solid ${color}`,
            boxShadow: `0 4px 1px  ${color}`
        }}
    >
        { children }
    </button>

    return Component
}

export default Button