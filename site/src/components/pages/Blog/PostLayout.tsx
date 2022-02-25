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

interface PostLayoutProps {
    publishedAt: Date,
    views: number,
    title: string,
    snippet: string,
    author: string,
    mainImageUrl: string,
    body: string
}

const PostLayout: React.FC<PostLayoutProps> = ({ publishedAt, views, title, snippet, author, mainImageUrl, body }) => {


    return (
        <article className={styles['post-layout']}>
           <div className={styles['post-layout__header']}>
               <Content>
                   <Stack>
                        <div className={styles['post-layout__info']}>
                            <Text><Icon name='calendar' width={20} height={20} />{formatDate(publishedAt)}</Text>
                            <Text><Icon name='eye' width={20} height={20} />{views} views</Text>
                        </div>
                        <Text className={styles['post-layout__title']} tag="h1" size="header--large"><TextDecorator theme='blog'>{title}</TextDecorator></Text>
                        <Text className={styles['post-layout__snippet']}>{snippet}</Text>
                        <Credit prefix='Written by'>
                            <TextDecorator underline underlineCenter underlineColor='white' theme='blog'>{author}</TextDecorator> 😏
                        </Credit>
                    </Stack>
                </Content>
            </div>
            <div className={styles['post-layout__image']}>
                <div className={styles['post-layout__image__inner']}>
                    <Frame src={mainImageUrl} square/>
                </div>
            </div>
            <Content width='medium'>
                <div className={styles['post-layout__content']}>
                   <Text>{body}</Text>
                </div>
                <Button border otherClassNames={styles['post-layout__share-button']}>
                    <p><Icon fa='hello'/> Share on <span>facebook</span></p>
                </Button>
            </Content>
        </article>
    )
}

export default PostLayout