import classNames from 'classnames'
import React from 'react'
import styles from './Section.module.scss'
import { IContainer } from '../../types/react-types'

interface ISection extends IContainer {
    otherClassNames?: string
}

const Section: React.FC<ISection> = ({ children, otherClassNames }) => {

    const className = classNames(
        styles['section'],
        otherClassNames
    )

    return (
        <section className={className}>
            { children }
        </section>
    )
}

export default Section