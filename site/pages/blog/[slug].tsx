import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'
import PostLayout from 'src/components/layouts/Blog/PostLayout'
import Content from 'src/components/layouts/Content'
import Link from 'src/components/primitives/Link'
import useSwr from 'swr'
import { getPost, getSlugs } from './lib/api'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Test: NextPage = ({ post }) => {

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
    const { slug } = params
    const post = await getPost(slug, [
      'author',
      'body',
      'datePublished',
      'mainImageUrl',
      'name',
      'snippet',
      'views'
    ])
  
    return {
      props: {
        post,
      },
    }
  }

  export async function getStaticPaths() {
    const slugs = await getSlugs()

    return {
      paths: slugs.map(slug => ({
        params: { slug }
      })),
      fallback: false
    };
  }

export default Test

// author, body, datePublished, mainImageUrl, name, views, snippet