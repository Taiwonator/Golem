import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'

const Blog: NextPage = (posts) => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main posts={posts['posts']} />
      </BaseLayout>
    )
}

export async function getStaticProps() {
 const posts = []

  return {
    props: {
      posts,
    },
  }
}


export default Blog