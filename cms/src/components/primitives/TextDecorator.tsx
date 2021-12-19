import classNames from 'classnames'
import React from 'react'
import styles from './TextDecorator.module.scss'
import { IContainer } from '../../types/react-types'

interface TextDecorator extends IContainer {
    color?: string,
    theme?: string,
    underline?: boolean,
    underlineCenter?: boolean
    underlineColor?: 'orange' | 'green' | 'white',
}

const TextDecorator: React.FC<TextDecorator> = ({ children, color, theme, underline, underlineCenter, underlineColor }) => {

    const style = {
        color
    }
    
    const className = classNames(
        theme && styles[`underline--${theme}`],
        underline && styles['underline'],
        underlineCenter && styles['underline--center'],
        underlineColor && styles[`underline--${underlineColor}`],
    )

    return (
        <span className={className} style={style}>
            { children }
        </span>
    )
}

export default TextDecorator