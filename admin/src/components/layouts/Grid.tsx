import React from 'react'
import Button from '../primitives/Button'
import Header from '../primitives/Header'
import styles from './Grid.module.scss'
import SETTINGS from 'src/styles/settings'
import { getCurrentUser } from 'src/service/firebase'

const Grid: React.FC = props => {
    return (
        <>
            <GridHeader />
        </>
    )
}

const GridHeader: React.FC = props => {
    return (
        <div className={styles['grid-header']}>
            <Header tag="h1" large>Blog Section</Header>
            <div className={styles['grid-header__actions']}>
                <Button onClick={() => getCurrentUser()} border color={SETTINGS.green}>+ Get User</Button>
            </div>
        </div>
    )
}

export { GridHeader }

export default Grid