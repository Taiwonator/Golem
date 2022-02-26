import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import Button from 'src/components/primitives/Button'
import faker from 'faker'


const Blog: NextPage = (props) => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main initialPosts={props['posts']} />
      </BaseLayout>
    )
}

export async function getStaticProps() {
 
  const query = 'pagination[page]=1&pagination[pageSize]=10'
  const res = await fetch(`http://localhost:1337/api/posts?${query}`)
 
  const posts = (await res.json()).data.map(post => post.attributes)

  return {
    props: {
      posts,
    },
  }
}


export default Blog