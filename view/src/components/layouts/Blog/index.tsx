import React from 'react'
import Content from '../Content'
import Article from './Article'
import ArticleLayout from './ArticleLayout'
import LandingPage from './LandingPage'

const Blog: React.FC = props => {
    return (
        <React.Fragment>
            {/* <Content width='wide'>
                <ArticleLayout article={{}} />
            </Content>
             */}
            <Content width='small'>
                <LandingPage />
            </Content>
            <Content width='wide'>
                <Article main />
            </Content>
            <Content width='medium'>
                <Article />
                <Article />
                <Article />
                <Article />
            </Content>
        </React.Fragment>
    )
}

export default Blog