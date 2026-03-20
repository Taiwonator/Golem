import React from 'react'
import styles from './Content.module.scss'
import { IContainer } from '../../types/react-types'
import classNames from 'classnames'

interface IContent extends IContainer {
    width?: 'small' | 'medium' | 'wide',
    className?: string,
    center?: boolean
    id?: string
}

const Content = React.forwardRef<HTMLDivElement | null, IContent>(({ children, center, className, width, id }, ref) => {

    return (
        <div className={classNames(
            styles['content'],
            width && styles[`content--${width}`],
            center && styles[`content--center`],
            className
        )}
            id={id}
            ref={ref}
        >
            { children }
        </div>
    )
})

Content.displayName = "Content"

export default Content