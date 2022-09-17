import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import payloadFetch from 'src/lib/payload-fetcher'

const Blog: NextPage = (props: any) => {
  const { posts } = props

    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main posts={posts} />
      </BaseLayout>
    )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('posts')
  if(error) {
    console.error('blog.jsx - get static props error: ', error)
    return { notFound: true }
  }

  return {
    props: {
      posts: data ? data.docs : [],
    },
  }
}

// Create fetch hook, return data, res, error


export default Blog