import React from 'react'
import styles from './Text.module.scss'
import classNames from 'classnames'
import { IContainer } from 'src/types/react-types'

interface IText extends IContainer {
    bold?: boolean,
    uppercase?: boolean,
    className?: string,
    marginBottom?: boolean,
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

const Text: React.FC<IText> = ({ bold, className, children, marginBottom, size, tag, uppercase }) => {
    const Tag = tag || 'p'
    const isStandard = size && size.includes('standard')
    return (
        <Tag 
        className={classNames(
            styles['text'],
            size ? styles[size] : styles['standard'],
            bold && styles['bold'],
            uppercase && styles['uppercase'],
            marginBottom && (isStandard ? styles['standard--marginBottom'] : styles['header--marginBottom']),
            className
        )}>
            { children }
        </Tag>
    )
}

export default Text