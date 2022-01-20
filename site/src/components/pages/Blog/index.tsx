import React from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'

interface BlogProps {
    posts: any[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {

    const postComps = posts.map((post, i) => (
        <Post 
            key={i}
            title={post.title}
            mainImageUrl={post.mainImage}
            views={post.views}
            snippet={post.snippet}
            publishedAt={post.publishedAt}
            slug={post.slug}
            main={(i === 0) && true}
        />
    ))

    return (
        <React.Fragment>
            <Content width='small'>
                <LandingPage />
            </Content>
            <Content width='medium'>
                {postComps[0]}
            </Content>
            <Content width='medium'>
                {postComps.slice(1)}
            </Content>
        </React.Fragment>
    )
}

export default Blog