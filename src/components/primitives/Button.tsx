import React from 'react'
import styles from './Button.module.scss'

interface IButton {
    children: React.ReactNode
}

const Button: React.FC<IButton> = ({ children }) => {
    return (
        <button className={styles['button']}>{ children }</button>
    )
}

export default Button