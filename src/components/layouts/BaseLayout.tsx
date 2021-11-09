import React from 'react'
import Footer from './Footer'
import styles from './BaseLayout.module.scss'
import Main from './Home'
import Navigation from './Navigation'

interface IBaseLayout {
    children: React.ReactNode
}

const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
    return (
        <div className={styles['base-layout']}>
            <Navigation />
                { children }
            <Footer />
        </div>
    )
}

export default BaseLayout