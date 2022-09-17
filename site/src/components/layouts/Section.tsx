import classNames from 'classnames'
import React from 'react'
import styles from './Section.module.scss'
import { IContainer } from '../../types/react-types'

interface ISection extends IContainer {
    id: string,
    otherClassNames?: string
}

const Section = React.forwardRef<HTMLElement | null, ISection>(({ children, id, otherClassNames }, ref) => {

    const className = classNames(
        styles['section'],
        otherClassNames
    )

    return (
        <section id={id} className={className} ref={ref}>
            { children }
        </section>
    )
})

Section.displayName = "Content"

export default Section