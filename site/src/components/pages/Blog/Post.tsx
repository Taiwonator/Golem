import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Frame from 'src/components/widgets/Frame'
import SETTINGS from 'src/styles/settings'
import styles from './Post.module.scss'
import classNames from 'classnames'
import Link from 'src/components/primitives/Link'
import { formatDate } from 'src/lib/date'

interface PostProps {
    title: string,
    publishedAt: Date,
    views: number,
    snippet: string,
    slug: string,
    mainImageUrl: string
    main?: boolean,
}

const Post: React.FC<PostProps> = ({ 
    title,
    publishedAt,
    views,
    snippet,
    slug,
    mainImageUrl,
    main 
}) => {

    const className = classNames(
        styles['post'],
        main && styles['post--main']
    )

    return (
        <article className={className}>
            <div className={styles['post__frame']}>
                <Frame src={mainImageUrl} square={main} />
            </div>
            <div className={styles['post__content']}>
                <div className={styles['post__content__inner']}>
                    <div className={styles['post__content__row']}>
                        <Header><TextDecorator underline underlineColor='green' theme='blog'>{title}</TextDecorator></Header>
                        <div className={styles['post__info']}>
                            <p><Icon name='calendar' color='#D2D2D2' />{formatDate(publishedAt)}</p>
                            <p><Icon name='eye' color='#D2D2D2' />{views}</p>
                        </div>
                    </div>
                    <p>{snippet}</p>
                    <Link to={`blog/${slug}`}><Button border color={SETTINGS.orange} theme='blog'>Read Blog</Button></Link>
                </div>
            </div>
        </article>
    )
}

export default Post