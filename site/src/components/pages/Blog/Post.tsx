import React, { MutableRefObject } from 'react'
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
import { resolveImage, useSWRConfig } from 'src/lib/payload-fetcher'
import useSWR from 'swr'

interface PostProps {
    title: string,
    publishedDate: Date,
    views: number,
    snippet: string,
    slug: string,
    heroImage: any,
    featured?: boolean,
    ref?: MutableRefObject<HTMLDivElement>
}

const Post: React.FC<PostProps> = ({ 
    title,
    publishedDate,
    views,
    snippet,
    slug,
    heroImage,
    featured,
}) => {

    const MAX_SNIPPET_LENGTH = 100

    const className = classNames(
        styles['post'],
        featured && styles['post--featured']
    )

    const shortSnippet = snippet.length > MAX_SNIPPET_LENGTH ? snippet.slice(0, MAX_SNIPPET_LENGTH) + '...' : snippet

    return (
        <Stack tag="article" className={className}>
            <div className={styles['post__frame']}>
                { (heroImage) ? 
                    <Frame noHover src={heroImage?.url} square={featured}/> :  
                    <Frame noHover loading={true} square={featured}/>
                }
            </div>
            <div className={styles['post__content']}>
                <Stack gap="large" className={styles['post__content__inner']}>
                    <Stack className={styles['post__content__row']}>
                        <Text className={styles['post__title']} tag="h2" size="header"><Link to={`blog/${slug}`}>{title}</Link></Text>
                        <div className={styles['post__info']}>
                            <Text><Icon name='calendar' color={SETTINGS.green} />{formatDate(publishedDate)}</Text>
                            {/* <Text><Icon name='eye' color='#D2D2D2' />{views}</Text> */}
                        </div>
                    </Stack>
                    <Text>{shortSnippet}</Text>
                    <Button border theme="blog" color={SETTINGS.orange}>
                        <Link to={`blog/${slug}`}>
                            Read article
                        </Link>
                    </Button>
                </Stack>
            </div>
        </Stack>
    )
}

export default Post