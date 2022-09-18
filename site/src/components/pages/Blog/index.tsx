import React, { useState, useEffect } from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import SETTINGS from '../../../styles/settings'
import Text from 'src/components/primitives/Text'
import styles from './index.module.scss'
import useSWR from 'swr'
import payloadFetch, { useSWRConfig } from 'src/lib/payload-fetcher'


interface BlogProps {
    posts: any[],
    metaData: any,
    featuredPosts: any[]
}

const Blog: React.FC<BlogProps> = ({ posts, metaData, featuredPosts }) => {

    const [allPosts, setAllPosts] = useState<any[]>(posts)
    const [currentMetaData, setCurrentMetaData] = useState<any>(metaData)

    const totalPosts = metaData ? metaData.totalDocs : 0;

    useEffect(() => {
        setAllPosts(posts)
    }, [posts])

    useEffect(() => {
        setCurrentMetaData(metaData)
    }, [metaData])

    const loadMore = async() => {
        if(currentMetaData.hasNextPage) {
            const [data, res, error] = await payloadFetch(`posts?sort=-publishedDate&where[status][equals]=published&page=${currentMetaData.nextPage}`)
            if(error) { return null }
            const { docs: loadedPosts, ...m } = data
            setAllPosts([...allPosts, ...loadedPosts])
            setCurrentMetaData(m)
        }
    }

    const featuredPostSlugs = featuredPosts.map(f => f.slug)
    const visiblePosts = allPosts.filter(post => !featuredPostSlugs.includes(post.slug))
    const totalPostsVisible = visiblePosts.length + featuredPosts.length

    return (
        <Stack gap="large">
            <Content width='small' center>
                <LandingPage />
            </Content>
            {!allPosts.length && (<Text className={styles['blog__empty-text']} size="header--medium">We are working on some amazing posts ⭐</Text>)}
            <Stack gap='huge'>
                {featuredPosts.length && featuredPosts.map((f, i) => 
                    <Post key={`f_${i}`} {...f} />
                )}
                
                <Content width='medium' center>
                    <Stack gap="huge">
                        {visiblePosts
                            .map((post, i) => 
                                <Post key={`post_${i}`} views={0} {...post} /> 
                            )
                        }
                        <Stack gap="small">
                            <Text tag='p'><Text tag="span" bold>{totalPostsVisible}</Text> (of {totalPosts})</Text>
                            <Button 
                                disabled={!currentMetaData?.hasNextPage}
                                onClick={() => loadMore()}
                                color={SETTINGS.green}
                                border
                            >
                                More Posts +
                            </Button>
                        </Stack>
                    </Stack>
                </Content>
            </Stack>
        </Stack>
    )
}

export default Blog