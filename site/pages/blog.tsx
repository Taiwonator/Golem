import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import client from '../tina/__generated__/client'

interface BlogProps {
  posts: any[]
  featuredPosts: any[]
}

const Blog: NextPage<BlogProps> = ({ posts, featuredPosts }) => {

  return (
    <BaseLayout
      pageTitle='Golem | Blog'
      metaData={{
        description: 'Check out our collection of blog articles about everything Africa, Faith and Life.',
        keywords: 'Charity, Golem, God, Blog, Stories, Missionary, Ministry'
      }}
    >
      <Main featuredPosts={featuredPosts} posts={posts} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.queries.postConnection({
    sort: 'publishedDate',
    filter: { status: { eq: 'published' } }
  })
  const edges = res.data.postConnection.edges || []
  const allPosts = edges.map(e => e?.node).filter(Boolean).reverse()
  const featuredPosts = allPosts.filter((p: any) => p.featured)

  return {
    props: {
      posts: allPosts,
      featuredPosts
    }
  }
}

export default Blog