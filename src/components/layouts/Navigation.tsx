import React from 'react'
import Button from '../primitives/Button'
import Link from '../primitives/Link'
import styles from './Navigation.module.scss'

const Navigation: React.FC = props => {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['navigation__left']}>
                Left
            </div>
            <div className={styles['navigation__right']}>
                <NavigationItems />
            </div>
        </nav>
    )
}

const NavigationItems: React.FC = props => {
    return (
        <ul className={styles['navigation__items']}>
            <li><Link>about us</Link></li>
            <li><Link>mission</Link></li>
            <li><Link>blog</Link></li>
            <li><Link>how to help</Link></li>
            <li>
                <Button>
                    <Link>about us</Link>
                </Button>
            </li>
        </ul>
    )
}

export default Navigation