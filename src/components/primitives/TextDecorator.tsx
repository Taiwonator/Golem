import classNames from 'classnames'
import React from 'react'
import styles from './TextDecorator.module.scss'
import { IContainer } from '../../types/react-types'

interface TextDecorator extends IContainer {
    color?: string,
    underline?: boolean,
    underlineCenter?: boolean
    underlineColor?: 'orange' | 'green',
}

const TextDecorator: React.FC<TextDecorator> = ({ children, color, underline, underlineCenter, underlineColor }) => {

    const style = {
        color
    }
    
    const className = classNames(
        underline && styles['underline'],
        underlineCenter && styles['underline--center'],
        underlineColor === 'green' && styles['underline--green'],
        underlineColor === 'orange' && styles['underline--orange'],
    )

    return (
        <span className={className} style={style}>
            { children }
        </span>
    )
}

export default TextDecorator