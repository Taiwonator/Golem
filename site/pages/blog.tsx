import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import payloadFetch from 'src/lib/payload-fetcher'

const Blog: NextPage = (props: any) => {
  const { postsData, featuredPosts } = props
  const { docs: posts, ...metaData } = postsData

    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main featuredPosts={featuredPosts} posts={posts} metaData={metaData} />
      </BaseLayout>
    )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('posts?sort=-publishedDate&where[status][equals]=published')
  if(error) {
    console.error('blog.jsx - get static props error: ', error)
    return { notFound: true }
  }

  const [fData, fRes, fError] = await payloadFetch('posts?sort=-publishedDate&where[status][equals]=published&where[featured][equals]=true')
  if(fError) {
    console.error('blog.jsx - get static props error: ', error)
    return { notFound: true }
  }

  return {
    props: {
      postsData: data ? data : {},
      featuredPosts: fData ? fData.docs : []
    },
  }
}

// Create fetch hook, return data, res, error


export default Blog