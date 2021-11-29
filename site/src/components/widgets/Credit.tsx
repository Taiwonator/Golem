import React from 'react'
import { IContainer } from 'src/types/react-types'
import styles from './Credit.module.scss'

interface ICredit extends IContainer {
    prefix: string
}

const Credit: React.FC<ICredit> = ({ children, prefix }) => {
    return (
        <p 
            className={styles['credit']}
        >
            {prefix}&nbsp;
            { children }
        </p>
    )
}

export default Credit