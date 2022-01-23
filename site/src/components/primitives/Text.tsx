import React from 'react'
import styles from './Text.module.scss'
import classNames from 'classnames'
import { IContainer } from 'src/types/react-types'

interface IText extends IContainer {
    bold?: boolean,
    uppercase?: boolean,
    className?: string,
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'
    size?: 'standard' |
            'standard--small' |
            'standard--medium' |
            'standard--large' |
            'header' |
            'header--small' |
            'header--medium' |
            'header--large'
}

const Text: React.FC<IText> = ({ bold, className, children, size, tag, uppercase }) => {
    const Tag = tag || 'div'
    return (
        <Tag 
        className={classNames(
            styles['text'],
            size ? styles[size] : styles['standard'],
            bold && styles['bold'],
            uppercase && styles['uppercase'],
            className
        )}>
            { children }
        </Tag>
    )
}

export default Text