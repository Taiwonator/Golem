import React from 'react'
import { IContainer } from 'src/types/react-types'
import Text from '../primitives/Text'
import styles from './Credit.module.scss'

interface ICredit extends IContainer {
    prefix: string
}

const Credit: React.FC<ICredit> = ({ children, prefix }) => {
    return (
        <Text 
            className={styles['credit']}
            bold
        >
            {prefix}&nbsp;
            { children }
        </Text>
    )
}

export default Credit