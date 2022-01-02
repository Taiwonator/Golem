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
            name={post.name}
            mainImageUrl={post.mainImageUrl}
            views={post.views}
            snippet={post.snippet}
            dateCreated={post.dateCreated}
            slug={post.slug}
            main={(i === 0) && true}
        />
    ))

    return (
        <React.Fragment>
            <Content width='small'>
                <LandingPage />
            </Content>
            <Content width='wide'>
                {postComps[0]}
            </Content>
            <Content width='medium'>
                {postComps.slice(1)}
            </Content>
        </React.Fragment>
    )
}

export default Blog