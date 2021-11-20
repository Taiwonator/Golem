import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Credit from 'src/components/widgets/Credit'
import Frame from 'src/components/widgets/Frame'
import Content from '../Content'
import styles from './ArticleLayout.module.scss'

interface IArticleLayout {
    article: object
}

const ArticleLayout: React.FC<IArticleLayout> = ({ article }) => {


    return (
        <article className={styles['article-layout']}>
           <div className={styles['article-layout__header']}>
                <div className={styles['article-layout__info']}>
                    <p><Icon fa='calendar' />30/06/2021</p>
                    <p><Icon fa='calendar' />20 views</p>
                </div>
                <Header large><TextDecorator underline underlineCenter underlineColor='white' theme='blog'>The Problem with Communism</TextDecorator></Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Credit prefix='Written by'>
                    <TextDecorator underline underlineCenter underlineColor='white' theme='blog'>Jonathon Taiwo</TextDecorator>
                </Credit>
            </div>
            <div className={styles['article-layout__image']}>
                <div className={styles['article-layout__image__inner']}>
                    <Frame square/>
                </div>
            </div>
            <Content width='medium'>
                <div className={styles['article-layout__content']}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue. Maecenas in lorem non ligula pellentesque efficitur vitae et tellus. Mauris quis sodales orci. Nunc scelerisque, nunc et sollicitudin venenatis, orci lacus fermentum purus, et consectetur ante urna non justo. Donec molestie pretium nisl sit amet pharetra. Etiam finibus turpis et suscipit dignissim.</p>
                    <p>Suspendisse eu elit a magna ultricies sodales nec a augue. Maecenas in lorem non ligula pellentesque efficitur vitae et tellus. Mauris quis sodales orci</p>
                </div>
                <Button border otherClassNames={styles['article-layout__share-button']}>
                    <p><Icon fa='hello'/> Share on <span>facebook</span></p>
                </Button>
            </Content>
        </article>
    )
}

export default ArticleLayout