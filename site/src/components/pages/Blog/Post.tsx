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
import Credit from 'src/components/widgets/Credit'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'

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

    const MAX_SNIPPET_LENGTH = 100

    const className = classNames(
        styles['post'],
        main && styles['post--main']
    )

    const shortSnippet = snippet.length > MAX_SNIPPET_LENGTH ? snippet.slice(0, MAX_SNIPPET_LENGTH) + '...' : snippet

    return (
        <Stack tag="article" className={className}>
            <div className={styles['post__frame']}>
                <Frame src={mainImageUrl} square={main} />
            </div>
            <div className={styles['post__content']}>
                <Stack gap="small" className={styles['post__content__inner']}>
                    <Stack className={styles['post__content__row']}>
                        <Text className={styles['post__title']} tag="h2" size="header"><Link to={`blog/${slug}`}><TextDecorator underline underlineColor='green' theme='blog'>{title}</TextDecorator></Link></Text>
                        <div className={styles['post__info']}>
                            <Text><Icon name='calendar' color='#D2D2D2' />{formatDate(publishedAt)}</Text>
                            <Text><Icon name='eye' color='#D2D2D2' />{views}</Text>
                        </div>
                    </Stack>
                    <Text>{shortSnippet}</Text>
                    <Credit prefix='Written by'>
                        <TextDecorator underline underlineCenter underlineColor='white' theme='blog'>{'author'}</TextDecorator> 😏
                    </Credit>
                </Stack>
            </div>
        </Stack>
    )
}

export default Post