import React from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'
import Stack from 'src/components/layouts/Stack'

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
            main={true}
        />
    ))

    return (
        <React.Fragment>
            <Content width='small'>
                <LandingPage />
            </Content>
            <Content width='medium'>
                <Stack gap="huge">
                    {postComps[0]}
                    {postComps.slice(1)}
                </Stack>
            </Content>
        </React.Fragment>
    )
}

export default Blog