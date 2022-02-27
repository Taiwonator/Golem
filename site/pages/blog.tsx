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
 
  const res = await fetch(`http://localhost:1337/api/posts`)
  const posts = (await res.json()).data.map(post => post.attributes)

  return {
    props: {
      posts,
    },
  }
}


export default Blog