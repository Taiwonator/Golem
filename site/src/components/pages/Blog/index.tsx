import React, { useState, useRef } from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import SETTINGS from '../../../styles/settings'
import { FaWonSign } from 'react-icons/fa'

interface BlogProps {
    initialPosts: any[]
}

const Blog: React.FC<BlogProps> = ({ initialPosts }) => {
    const [pageIndex, setPageIndex] = useState(2)
    const [posts, setPosts] = useState(initialPosts)

    const loadMorePosts = async() => {
        const query = `pagination[page]=${pageIndex}&pagination[pageSize]=5`
        const res = await fetch(`http://localhost:1337/api/posts?${query}`)
        let newPosts = (await res.json()).data.map(post => post.attributes)
        setPosts(posts.concat(newPosts))
        setPageIndex(pageIndex + 1)
        window.scrollBy(0, 200)
    }

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
            <Content width='small' center>
                <LandingPage />
            </Content>
            <Content width='medium' center>
                <Stack gap="huge">
                    {postComps[0]}
                    {postComps.slice(1)}
                    <Button onClick={() => loadMorePosts()} color={SETTINGS.green} border>More Posts +</Button>
                </Stack>
            </Content>
        </React.Fragment>
    )
}

export default Blog