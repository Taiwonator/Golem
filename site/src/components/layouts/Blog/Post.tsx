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

interface PostProps {
    name: string,
    datePublished: Date,
    views: number,
    snippet: string,
    slug: string,
    mainImageUrl: string
    main?: boolean,
}

const Post: React.FC<PostProps> = ({ 
    name,
    datePublished,
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
                        <Header><TextDecorator underline underlineColor='green' theme='blog'>{name}</TextDecorator></Header>
                        <div className={styles['post__info']}>
                            <p><Icon fa='calendar' />{datePublished}</p>
                            <p><Icon fa='calendar' />{views}</p>
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