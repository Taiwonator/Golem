import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'
import PostLayout from 'src/components/layouts/Blog/PostLayout'
import Content from 'src/components/layouts/Content'

const Test: NextPage = (posts) => {
    const post = posts.posts[0]
    console.log(posts)
    return (
      <BaseLayout pageTitle='Golem | Blog Post'>
          <Content width='wide'>
              <PostLayout 
                date={post.datePublished}
                views={post.views}
                name={post.name}
                snippet={post.snippet}
                author={post.author}
                mainImageUrl={post.mainImageUrl}
                body={post.body}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://us-central1-blog-backend-67f71.cloudfunctions.net/app/posts')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }

export default Test