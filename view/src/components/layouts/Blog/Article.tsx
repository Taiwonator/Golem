import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Frame from 'src/components/widgets/Frame'
import SETTINGS from 'src/styles/settings'
import styles from './Article.module.scss'
import classNames from 'classnames'
import Link from 'src/components/primitives/Link'

interface IArticle {
    main?: boolean
}

const Article: React.FC<IArticle> = ({ main }) => {

    const className = classNames(
        styles['article'],
        main && styles['article--main']
    )

    return (
        <article className={className}>
            <div className={styles['article__frame']}>
                <Frame square={main} />
            </div>
            <div className={styles['article__content']}>
                <div className={styles['article__content__inner']}>
                    <div className={styles['article__content__row']}>
                        <Header><TextDecorator underline underlineColor='green' theme='blog'>Tigers and Deserts</TextDecorator></Header>
                        <div className={styles['article__info']}>
                            <p><Icon fa='calendar' />30/06/2021</p>
                            <p><Icon fa='calendar' />20 views</p>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante.</p>
                    <Link to='/test'><Button border color={SETTINGS.orange} theme='blog'>Read Blog</Button></Link>
                </div>
            </div>
        </article>
    )
}

export default Article