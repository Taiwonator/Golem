import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'
import { getPosts } from './blog/lib/api'

const Blog: NextPage = (posts) => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main posts={posts['posts']} />
      </BaseLayout>
    )
}

export async function getStaticProps() {
 const posts = await getPosts([
   'mainImageUrl',
   'name',
   'dateCreated',
   'views',
   'snippet',
   'slug'
  ])

  return {
    props: {
      posts,
    },
  }
}


export default Blog

// image, name, datePublished, views, snippet, slug