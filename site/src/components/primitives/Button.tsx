import classNames from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { IContainer } from '../../types/react-types'

interface IButton extends IContainer {
    border?: boolean,
    color?: string,
    theme?: string,
    onClick?: () => void
}

const Button: React.FC<IButton> = ({ border, children, color, theme, otherClassNames, onClick }) => {
    const className = classNames(
        styles['button'],
        border && styles['button--border'],
        otherClassNames
    )

    const Component = !theme 
                            ? <button onClick={() => onClick && onClick()} className={className} style={{ backgroundColor: color }}>{ children }</button>
                            : <button 
                                onClick={() => onClick && onClick()}
                                className={classNames(className, styles['button--blog'])}
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