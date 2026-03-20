import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Credit from 'src/components/widgets/Credit'
import Frame from 'src/components/widgets/Frame'
import { formatDate } from 'src/lib/date'
import Content from '../../layouts/Content'
import styles from './PostLayout.module.scss'

import SETTINGS from 'src/styles/settings'
import Link from 'src/components/primitives/Link'
import { useRouter } from 'next/router'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

interface PostLayoutProps {
    publishedDate: Date,
    views: number,
    title: string,
    snippet: string,
    author: any,
    heroImage: any,
    body: any,
    siteUrl?: string
}

const PostLayout: React.FC<PostLayoutProps> = ({ publishedDate, views, title, snippet, author, heroImage, body, siteUrl }) => {

    const router = useRouter()

    return (
        <article className={styles['post-layout']}>
            <div className={styles['post-layout__header']}>
                <Content>
                    <Stack>
                        <div className={styles['post-layout__info']}>
                            <Text><Icon name='calendar' width={20} height={20} color={SETTINGS.green} />
                                {formatDate(publishedDate)}
                            </Text>
                            {/* <Text><Icon name='eye' width={20} height={20} color={SETTINGS.green} />
                                {views}<span> views</span>
                            </Text> */}
                        </div>
                        <Text className={styles['post-layout__title']} tag="h1" size="header--large"><TextDecorator theme='blog'>{title}</TextDecorator></Text>
                        <Text className={styles['post-layout__snippet']}>{snippet}</Text>
                        {author && (
                            <Credit className={styles['post-layout__credit']} prefix='Written by'>
                                <span className={styles['post-layout__author']}>{author.name}</span>
                                <span className={styles['post-layout__avatar']}>
                                    {author.avatar && (
                                        <img
                                            src={author.avatar}
                                            alt={author.name}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    )}
                                </span>
                            </Credit>
                        )}
                    </Stack>
                </Content>
            </div>
            <div className={styles['post-layout__image']}>
                <div className={styles['post-layout__image__inner']}>
                    {(heroImage) ?
                        <Frame noHover src={heroImage} square /> :
                        <Frame noHover loading={true} square />
                    }
                </div>
            </div>
            <Content width='small'>
                <div className={styles['post-layout__content']}>
                    <TinaMarkdown content={body} />
                </div>
                <div className="fb-share-button"
                    data-href="https://www.your-domain.com/your-page.html"
                    data-layout="button_count"
                >
                </div>
            </Content>
        </article>
    )
}

export default PostLayout