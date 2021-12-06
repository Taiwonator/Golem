import React from 'react'
import Button from 'src/components/primitives/Button'
import Content from '../Content'
import Post from './Post'
import PostLayout from './PostLayout'
import LandingPage from './LandingPage'
import { IPost } from '../../../../../shared/types/api/posts'
import faker from 'faker'

interface BlogProps {
    posts: any[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {

    const addPost = () => {
        let post: IPost = {
            name: faker.lorem.words(),
            slug: faker.lorem.slug(),
            author: faker.lorem.word(),
            snippet: faker.lorem.sentences(),
            body: faker.lorem.paragraphs(),
            views: faker.random.number(),
            mainImageUrl: faker.random.image(),
            datePublished: faker.date.past(),
            dateCreated: faker.date.past(),
            categories: 'one',
            tags: [],
            comments: []
        }

        fetch('http://localhost:5001/blog-backend-67f71/us-central1/app/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),})
            .then(res => res.json())
            .then(data => console.log("data: ", data))
    }

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
            
            <Button border onClick={addPost}>Add post</Button>
        </React.Fragment>
    )
}

export default Blog