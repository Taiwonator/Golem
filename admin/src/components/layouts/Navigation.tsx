import React, { useState, useEffect } from 'react'
import Button from '../primitives/Button'
import Header from '../primitives/Header'
import Icon from '../primitives/Icon'
import Link from '../primitives/Link'
import styles from './Navigation.module.scss'
import SETTINGS from 'src/styles/settings'
import classNames from 'classnames'
import { IContainer } from 'src/types/react-types'
import { useResponsiveWidth } from '../../hooks/useResponsiveWidth'
import { getInitials } from 'src/lib/getInitials'
import { useAuth } from 'src/hooks/useAuth'
import { getUserName } from 'src/api/user'

const Navigation: React.FC = props => {
    const [active, setActive] = useState(false)
    const [name, setName] = useState(null)
    const device = useResponsiveWidth()

    const {pending, isSignedIn, user} = useAuth()

    useEffect(() => {
        getUserName(user).then(name => setName(name))
    }, [pending, user])
    
    const toggleNav = () => {
        setActive((active) => !active)
    }

    return (
        <nav className={styles['navigation']}>
            <div className={styles['navigation__inner']}>
                <div className={styles['navigation__left']}>
                    <Link to={'/'}>
                        <div className={styles['navigation__logo']}>
                            <Icon name='logo' width={50}/><Header>Golem CMS</Header>
                        </div>
                    </Link>
                </div>
                <div className={styles['navigation__right']}>
                    <NavigationItems active={device !== 'desktop' ? active : true} toggleNav={toggleNav}/>
                    <div className={styles['navigation__user']}>
                        <p>
                            <span className={styles['navigation__user__name']}>{name || 'Loading'}</span>
                            <span className={classNames(
                                styles['navigation__user__avatar'],
                                !user && styles['navigation__user__avatar--loading']
                            )}>
                                {getInitials(name)}
                            </span>
                        </p>
                    </div>
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
                    <Item to={'/donations'}>blog</Item>
                    <Item to={'/gallery'}>gallery</Item>
                    <Item to={'/donations'} button>donations</Item>
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