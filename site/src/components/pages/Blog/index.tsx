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

    const featuredPosts = posts.filter(post => post.featured)

    return (
        <React.Fragment>
            <Content width='small' center>
                <LandingPage />
            </Content>
            <Stack gap='huge'>
                {featuredPosts.map((featuredPost, i) => 
                    <Post key={`fpost_${i}`} views={0} heroImageId={featuredPost.image} {...featuredPost} /> 
                )}
                <Content width='medium' center>
                    <Stack gap="huge">
                        {posts.map((post, i) => {
                            if(!post.featured) {
                                return (
                                    <Post 
                                        key={`post_${i}`}
                                        views={0}
                                        heroImageId={post.image}
                                        {...post}
                                    />
                                )
                            }
                            return null
                        })}
                        <Stack gap="small">
                            <Text tag='p'><Text tag="span" bold>[count]</Text> (of [total])</Text>
                            <Button color={SETTINGS.green} border disabled={false}>More Posts +</Button>
                        </Stack>
                    </Stack>
                </Content>
            </Stack>
        </React.Fragment>
    )
}

export default Blog