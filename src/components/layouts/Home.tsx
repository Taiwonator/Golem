import React from 'react'
import styles from './Main.module.scss'

interface IHome {
    children: React.ReactNode
}

const Home: React.FC<IHome> = ({ children }) => {
    return (
        <main className={styles['main']}>
            {children}
        </main>
    )
}

export default Home