import classNames from 'classnames'
import React from 'react'
import styles from './Section.module.scss'
import { IContainer } from '../../types/react-types'

interface ISection extends IContainer {
    id: string,
    otherClassNames?: string
}

const Section: React.FC<ISection> = ({ children, id, otherClassNames }) => {

    const className = classNames(
        styles['section'],
        otherClassNames
    )

    return (
        <section id={id} className={className}>
            { children }
        </section>
    )
}

export default Section