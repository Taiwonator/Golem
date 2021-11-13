import classNames from 'classnames'
import React from 'react'
import styles from './TextDecorator.module.scss'
import { IContainer } from '../../types/react-types'

interface TextDecorator extends IContainer {
    color?: string,
    underline?: boolean,
    underlineColor?: string
}

const TextDecorator: React.FC<TextDecorator> = ({ children, color, underline, underlineColor }) => {

    const style = {
        color
    }
    
    const className = classNames(
        underline && styles['underline']
    )

    return (
        <span className={className} style={style}>
            { children }
        </span>
    )
}

export default TextDecorator