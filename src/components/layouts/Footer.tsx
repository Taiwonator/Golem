import React from 'react'
import styles from './Footer.module.scss'
import SETTINGS from 'src/styles/settings'
import classNames from 'classnames'
import Link from '../primitives/Link'
import { IContainer } from 'src/types/react-types'

const Footer: React.FC = props => {

    const linksColumns = [
        {
            header: 'get to know us',
            links: [
                { name: 'about us', to: '#' },
                { name: 'missions', to: '#' },
                { name: 'values', to: '#' },
            ]
        },
        {
            header: 'connect',
            links: [
                { name: 'contact us', to: '#' },
            ]
        },
        {
            header: 'donate',
            links: [
                { name: 'give monthly', to: '#' },
                { name: 'give once', to: '#' },
            ]
        },
        {
            header: 'stay updated',
            links: [
                { name: 'read our blog', to: '#' },
            ]
        }
    ]

    return (
        <footer className={styles['footer']}>
            <Row>
                {linksColumns.map(column => (
                   <RowItem key={column.header}>
                    <h3>{column.header}</h3>
                    <ul>
                        {column.links.map(link => (
                            <li key={link.name}><Link to={link.to}>{ link.name }</Link></li>
                        ))}
                    </ul>
                </RowItem> 
                ))}
            </Row>
            <Row>
                <p className={styles['footer__credit']}>Made by <span><Link to='https://michaeltaiwo.com/' external>Michael Taiwo 😏</Link></span></p>
            </Row>
            <Row row>
                <Circle color={SETTINGS.orange} />
                <Circle color={SETTINGS.darkgreen} />
                <Circle color={SETTINGS.green} />
                <Circle color={SETTINGS.darkgreen} />
                <Circle color={SETTINGS.orange} />
            </Row>
        </footer>
    )
}

interface IRow extends IContainer {
    row?: boolean
}

const Row: React.FC<IRow> = ({ children, row }) => (
    <div className={classNames(styles['footer__row'], row && styles['footer__row--row'])}>
        { children }
    </div>
)

const RowItem: React.FC<IContainer> = ({ children }) => {
    return (
        <div className={styles['footer__row__item']}>
            <div className={styles['footer__row__item__inner']}>
                { children }
            </div>
        </div>
    )
}

interface ICircle {
    color?: string 
}

const Circle: React.FC<ICircle> = ({ color }) => {
    color = color || SETTINGS.green

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 366.9 394.29"
            className={classNames(
                styles['footer'],
                styles['footer__circle']
            )}
        >
            {/* <circle cx="183.45" cy="183.45" r="123.29" fill="#fff"/> */}
            <path d="M517.33,510.12a182.91,182.91,0,1,1,71.41-14.42A182.42,182.42,0,0,1,517.33,510.12Zm0-297.36A113.91,113.91,0,1,0,631.25,326.67,114,114,0,0,0,517.33,212.76Z" transform="translate(-333.89 -143.22)" fill={SETTINGS.black} />
            <path d="M517.33,537.51a182.85,182.85,0,1,1,71.41-14.41A182.06,182.06,0,0,1,517.33,537.51Zm0-297.36A113.92,113.92,0,1,0,631.25,354.07,114.05,114.05,0,0,0,517.33,240.15Z" transform="translate(-333.89 -143.22)" fill={SETTINGS.black} />
            <path d="M517.33,152.6a174.07,174.07,0,0,0,0,348.14h0A174.08,174.08,0,0,0,691.41,326.67h0A174.07,174.07,0,0,0,517.34,152.6Zm0,297.36A123.28,123.28,0,0,1,394.05,326.67h0A123.29,123.29,0,1,1,517.34,450Z" transform="translate(-333.89 -143.22)" fill={color} />
        </svg>
    )
}

export default Footer