import React, { useState, useRef } from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import SETTINGS from '../../../styles/settings'
import Text from 'src/components/primitives/Text'

interface BlogProps {
    posts: any[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const PAGESIZE = 5

    const [displayedPosts, setDisplayedPosts] = useState(posts.slice(0, PAGESIZE))
    const [isDisabled, setIsDisabled] = useState(false)
    const [pageIndex, setPageIndex] = useState(2)

    const loadMorePosts = async() => {
        console.log('pageIndex: ', pageIndex)
        setDisplayedPosts(posts.slice(0, PAGESIZE * pageIndex))
        window.scrollBy(0, 200)
        
        if((displayedPosts.length + (PAGESIZE)) >= posts.length) {
            setIsDisabled(true)
        }
        setPageIndex(pageIndex + 1)
    }

    const postComps = displayedPosts.map((post, i) => (
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
                    <Stack gap="small">
                        <Text tag='p'><Text tag="span" bold>{displayedPosts.length}</Text> (of {posts.length})</Text>
                        <Button onClick={() => loadMorePosts()} color={SETTINGS.green} border disabled={isDisabled}>More Posts +</Button>
                    </Stack>
                </Stack>
            </Content>
        </React.Fragment>
    )
}

export default Blog