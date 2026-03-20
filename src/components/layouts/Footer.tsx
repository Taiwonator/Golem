import React from 'react'
import styles from './Footer.module.scss'
import SETTINGS from 'src/styles/settings'
import classNames from 'classnames'
import Link from '../primitives/Link'
import { IContainer } from 'src/types/react-types'
import Circle from '../widgets/Circle'
import Credit from '../widgets/Credit'
import Text from '../primitives/Text'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Footer: React.FC = props => {

    const linksColumns = [
        {
            header: 'get to know us',
            links: [
                { name: 'about us', to: '/about' },
                { name: 'missions', to: '/mission' },
                { name: 'values', to: '/about#values' },
            ]
        },
        {
            header: 'connect',
            links: [
                { name: 'contact us', to: '/#contact-us' },
            ]
        },
        {
            header: 'donate',
            links: [
                { name: 'give monthly', to: '/#help' },
                { name: 'give once', to: '/#help' },
            ]
        },
        {
            header: 'stay updated',
            links: [
                { name: 'read our blog', to: '/blog#top' },
            ]
        }
    ]

    return (
        <footer className={styles['footer']}>
            <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce
            >
                <Row>
                    {linksColumns.map(column => (
                    <RowItem key={column.header}>
                        <Text tag="h3" size="header--small">{column.header}</Text>
                        <ul>
                            {column.links.map(link => (
                                <li key={link.name}><Link to={link.to}><Text>{link.name}</Text></Link></li>
                            ))}
                        </ul>
                    </RowItem> 
                    ))}
                </Row>
                <Row>
                    <Credit prefix='Made by'>
                        <Link to='https://michaeltaiwo.com/' external>Michael Taiwo 🥳</Link>
                    </Credit>
                </Row>
            </AnimationOnScroll>
            <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce
                delay={250}
            >
                <Row row>
                    <Circle color={SETTINGS.orange} otherClassNames={styles['footer__circle']}/>
                    <Circle color={SETTINGS.darkgreen} otherClassNames={styles['footer__circle']}/>
                    <Circle color={SETTINGS.green} otherClassNames={styles['footer__circle']} />
                    <Circle color={SETTINGS.darkgreen} otherClassNames={styles['footer__circle']} />
                    <Circle color={SETTINGS.orange} otherClassNames={styles['footer__circle']} />
                </Row>
            </AnimationOnScroll>
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

export default Footer