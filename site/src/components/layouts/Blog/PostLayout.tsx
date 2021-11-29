import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Credit from 'src/components/widgets/Credit'
import Frame from 'src/components/widgets/Frame'
import Content from '../Content'
import styles from './PostLayout.module.scss'

interface PostLayoutProps {
    date: Date,
    views: number,
    name: string,
    snippet: string,
    author: string,
    mainImageUrl: string,
    body: string
}

const PostLayout: React.FC<PostLayoutProps> = ({ date, views, name, snippet, author, mainImageUrl, body }) => {


    return (
        <article className={styles['post-layout']}>
           <div className={styles['post-layout__header']}>
                <div className={styles['post-layout__info']}>
                    <p><Icon fa='calendar' />{date}</p>
                    <p><Icon fa='calendar' />{views} views</p>
                </div>
                <Header large><TextDecorator underline underlineCenter underlineColor='white' theme='blog'>{name}</TextDecorator></Header>
                <p>{snippet}</p>
                <Credit prefix='Written by'>
                    <TextDecorator underline underlineCenter underlineColor='white' theme='blog'>{author}</TextDecorator>
                </Credit>
            </div>
            <div className={styles['post-layout__image']}>
                <div className={styles['post-layout__image__inner']}>
                    <Frame src={mainImageUrl} square/>
                </div>
            </div>
            <Content width='medium'>
                <div className={styles['post-layout__content']}>
                   <p>{body}</p>
                </div>
                <Button border otherClassNames={styles['post-layout__share-button']}>
                    <p><Icon fa='hello'/> Share on <span>facebook</span></p>
                </Button>
            </Content>
        </article>
    )
}

export default PostLayout