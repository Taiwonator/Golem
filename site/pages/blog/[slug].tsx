import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'
import PostLayout from 'src/components/layouts/Blog/PostLayout'
import Content from 'src/components/layouts/Content'
import Link from 'src/components/primitives/Link'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Test: NextPage = ({ post }) => {
  console.log('post: ', post)

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

export async function getStaticProps({ params }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const { slug } = params
    const res = await fetch(`http://localhost:5001/blog-backend-67f71/us-central1/app/posts/?slug=${slug}`)
    const post = await res.json()
  
    return {
      props: {
        post,
      },
    }
  }

  export async function getStaticPaths() {
    const res = await fetch('http://localhost:5001/blog-backend-67f71/us-central1/app/posts')
    const posts = await res.json()

    return {
      paths: posts.map(post => ({
        params: { slug: post.slug }
      })),
      fallback: false
    };
  }

export default Test