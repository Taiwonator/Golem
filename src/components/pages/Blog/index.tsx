import React from 'react'
import Content from '../../layouts/Content'
import Post from './Post'
import LandingPage from './LandingPage'
import Stack from 'src/components/layouts/Stack'
import Text from 'src/components/primitives/Text'
import styles from './index.module.scss'


interface BlogProps {
    posts: any[],
    featuredPosts: any[]
}

const Blog: React.FC<BlogProps> = ({ posts, featuredPosts }) => {

    const featuredPostSlugs = featuredPosts.map(f => f.slug)
    const visiblePosts = posts.filter(post => !featuredPostSlugs.includes(post.slug))

    return (
        <Stack gap="large">
            <Content width='small' center>
                <LandingPage />
            </Content>
            {!posts.length && (<Text className={styles['blog__empty-text']} size="header--medium">We are working on some amazing posts ⭐</Text>)}
            <Stack gap='huge'>
                {featuredPosts.length ? (
                    <>
                        <Post key={`f_0`} {...featuredPosts[0]} displayAsFeatured />
                        <Content width='medium' center>
                            <Stack gap="huge">
                                {featuredPosts.slice(1).map((f, i) =>
                                    <Post key={`f_${i + 1}`} {...f} />
                                )}
                            </Stack>
                        </Content>

                    </>
                ) : null}

                <Content width='medium' center>
                    <Stack gap="huge">
                        {visiblePosts
                            .map((post, i) =>
                                <Post key={`post_${i}`} views={0} {...post} />
                            )
                        }
                    </Stack>
                </Content>
            </Stack>
        </Stack>
    )
}

export default Blog