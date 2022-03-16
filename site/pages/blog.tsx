import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import Button from 'src/components/primitives/Button'
import faker from 'faker'

const Blog: NextPage = (props: any) => {
  const { posts } = props

    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main posts={posts} />
      </BaseLayout>
    )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?sort=publishedAt:DESC`)
  if(res.status > 300) {
    console.error('blog.jsx - get static props error')
    return { notFound: true }
  }
  const data = (await res.json()).data

  return {
    props: {
      posts: data ? data.map(post => post.attributes) : [],
    },
  }
}


export default Blog