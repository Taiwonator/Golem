import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'

const Blog: NextPage = (posts) => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main posts={posts['posts']} />
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


export default Blog