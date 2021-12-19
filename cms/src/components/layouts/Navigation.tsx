import React, { useState } from 'react'
import Button from '../primitives/Button'
import Header from '../primitives/Header'
import Icon from '../primitives/Icon'
import Link from '../primitives/Link'
import styles from './Navigation.module.scss'
import SETTINGS from 'src/styles/settings'
import classNames from 'classnames'
import { IContainer } from 'src/types/react-types'

const Navigation: React.FC = props => {
    const [active, setActive] = useState(false)
    
    const toggleNav = () => {
        setActive((active) => !active)
    }

    return (
        <nav className={styles['navigation']}>
            <div className={styles['navigation__inner']}>
                <div className={styles['navigation__left']}>
                    <Link to={'/'}>
                        <div className={styles['navigation__logo']}>
                            <Icon name='logo--green' width={50}/><Header>Golem</Header>
                        </div>
                    </Link>
                </div>
                <div className={styles['navigation__right']}>
                    <NavigationItems active={active} toggleNav={toggleNav}/>
                </div>
            </div>
        </nav>
    )
}

interface INavigationItems {
    active: boolean,
    toggleNav: Function
}

const NavigationItems: React.FC<INavigationItems> = ({ active, toggleNav }) => {
    return (
            <ul className={styles['navigation__items']}>
                <ul className={classNames(styles['navigation__items__links'], active && styles['navigation__items__links--active'])}>
                    <Item to={'/#about-us'}>about us</Item>
                    <Item to={'/#mission'}>mission</Item>
                    <Item to={'/blog'}>blog</Item>
                    <Item to={'/photo-gallery'}>gallery</Item>
                    <Item to={'/#help'} button>donate</Item>
                </ul> 
                <Hamburger action={toggleNav}/>
            </ul>
    )
}

interface IHamburger {
    action: Function
}

const Hamburger: React.FC<IHamburger> = ({ action }) => {
    return (
        <li className={styles['navigation__hamburger']} onClick={() => action()}>
          <Button border>
            <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 76" height={50}>
                <path fill={SETTINGS.black} d="M591.28,383.37a36,36,0,0,0-72,0c0,.67,0,1.34.06,2s-.06,1.33-.06,2a36,36,0,0,0,72,0c0-.67,0-1.34-.06-2S591.28,384,591.28,383.37Z" transform="translate(-519.28 -347.37)"/>
                <circle fill={SETTINGS.green}cx="36" cy="36" r="32"/>
                <path fill={SETTINGS.white} d="M537.78,370.37h36a3.5,3.5,0,0,1,3.5,3.5h0a3.5,3.5,0,0,1-3.5,3.5h-36a3.5,3.5,0,0,1-3.5-3.5h0A3.5,3.5,0,0,1,537.78,370.37Z" transform="translate(-519.28 -347.37)"/>
                <path fill={SETTINGS.white} d="M537.78,380.37h36a3.5,3.5,0,0,1,3.5,3.5h0a3.5,3.5,0,0,1-3.5,3.5h-36a3.5,3.5,0,0,1-3.5-3.5h0A3.5,3.5,0,0,1,537.78,380.37Z" transform="translate(-519.28 -347.37)"/>
                <path fill={SETTINGS.white} d="M537.78,390.37h36a3.5,3.5,0,0,1,3.5,3.5h0a3.5,3.5,0,0,1-3.5,3.5h-36a3.5,3.5,0,0,1-3.5-3.5h0A3.5,3.5,0,0,1,537.78,390.37Z" transform="translate(-519.28 -347.37)"/>
            </svg> 
          </Button>
        </li>   
    )
}

interface IItem extends IContainer {
    button?: boolean,
    to: string
}

const Item: React.FC<IItem> = ({ children, button, to }) => {
    return (
        <li className={classNames(styles['navigation__link'], button && styles['navigation__link--button'])}><Link to={to}>{ children }</Link></li>
    )
}

export default Navigation