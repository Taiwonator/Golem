import React from 'react'
import Button from '../primitives/Button'
import Header from '../primitives/Header'
import Icon from '../primitives/Icon'
import Link from '../primitives/Link'
import styles from './Navigation.module.scss'

const Navigation: React.FC = props => {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['navigation__left']}>
                <div className={styles['navigation__logo']}>
                    <Header>
                        <Icon /> Golem
                    </Header>
                </div>
            </div>
            <div className={styles['navigation__right']}>
                <NavigationItems active={false} />
            </div>
        </nav>
    )
}

interface INavigationItems {
    active: boolean
}

const NavigationItems: React.FC<INavigationItems> = ({ active }) => {
    return (
        <React.Fragment>
            <Button><Icon /></Button>
            { active && <ul className={styles['navigation__items']}>
                <Item>about us</Item>
                <Item>mission</Item>
                <Item>blog</Item>
                <Item>how to help</Item>
                <Item>
                    <Button>how to help</Button>
                </Item>
            </ul> }
        </React.Fragment>
    )
}

interface IItem {
    children: React.ReactNode
}

const Item: React.FC<IItem> = ({ children }) => {
    return (
        <li><Link>{ children }</Link></li>
    )
}

export default Navigation