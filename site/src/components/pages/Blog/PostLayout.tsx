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
import { useSWRConfig } from 'src/lib/payload-fetcher'
import Content from '../../layouts/Content'
import styles from './PostLayout.module.scss'
import useSWR from 'swr'
import Image from 'next/image'
import SETTINGS from 'src/styles/settings'
import SlateSerialiser from 'src/components/primitives/SlateSerialiser/SlateSerialiser'

interface PostLayoutProps {
    publishedDate: Date,
    views: number,
    title: string,
    snippet: string,
    author: any,
    heroImage: any,
    content: string
}

const PostLayout: React.FC<PostLayoutProps> = ({ publishedDate, views, title, snippet, author, heroImage, content }) => {  

    const { key: avatarKey, fetcher } = useSWRConfig(`media/${author.avatar}`)
    const { data: avatarImage } = useSWR(avatarKey, fetcher)
    console.log('fetch: ', avatarImage)
        
    return (
        <article className={styles['post-layout']}>
           <div className={styles['post-layout__header']}>
               <Content>
                   <Stack>
                        <div className={styles['post-layout__info']}>
                            <Text><Icon name='calendar' width={20} height={20} color={SETTINGS.green} />
                                {formatDate(publishedDate)}
                            </Text>
                            <Text><Icon name='eye' width={20} height={20} color={SETTINGS.green} />
                                {views}<span> views</span>
                            </Text>
                        </div>
                        <Text className={styles['post-layout__title']} tag="h1" size="header--large"><TextDecorator theme='blog'>{title}</TextDecorator></Text>
                        <Text className={styles['post-layout__snippet']}>{snippet}</Text>
                        <Credit className={styles['post-layout__credit']} prefix='Written by'>
                                <Text className={styles['post-layout__author']}>{author.name}</Text>
                                <div className={styles['post-layout__avatar']}>
                                {avatarImage && (
                                    <Image 
                                        src={avatarImage.url}
                                        width={40}
                                        height={40}
                                        layout="responsive"
                                        alt={author.name}
                                    />
                                )}
                            </div>
                        </Credit>
                    </Stack>
                </Content>
            </div>
            <div className={styles['post-layout__image']}>
                <div className={styles['post-layout__image__inner']}>
                    { (heroImage) ? 
                        <Frame noHover src={heroImage?.url} square/> :  
                        <Frame noHover loading={true} square/>
                    }
                </div>
            </div>
            <Content width='small'>
                <div className={styles['post-layout__content']}>
                   <SlateSerialiser data={content} />
                </div>
                <Button border otherClassNames={styles['post-layout__share-button']}>
                    <p><Icon fa='hello'/> Share on <span>facebook</span></p>
                </Button>
            </Content>
        </article>
    )
}

export default PostLayout