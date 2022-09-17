import React from 'react'
import { IContainer } from 'src/types/react-types'
import Text from '../primitives/Text'
import styles from './Credit.module.scss'
import cx from 'classnames'

interface ICredit extends IContainer {
    prefix: string,
}

const Credit: React.FC<ICredit> = ({ children, prefix, className }) => {
    return (
        <Text 
            className={cx(styles['credit'], className)}
            bold
        >
            {prefix}&nbsp;
            { children }
        </Text>
    )
}

export default Credit