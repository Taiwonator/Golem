import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import PostLayout from 'src/components/pages/Blog/PostLayout'
import Content from 'src/components/layouts/Content'
import { useTina } from 'tinacms/dist/react'
import Script from 'next/script'
import client from '../../tina/__generated__/client'

const BlogPost: NextPage = (props: any) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const post = data.post

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0"
        strategy="lazyOnload"
        nonce="5bagHmw7"
      />
      <BaseLayout
        pageTitle={`Golem | Blog Post - ${post?.title}`}
        metaData={{
          description: post?.snippet,
          keywords: 'Blog, Post, Updates, Faith, Africa, Mission, Charity, Golem',
          og: {
            title: post?.title,
            imageUrl: post?.heroImage
          }
        }}
      >
        <Content width='wide'>
          <PostLayout
            views={0}
            siteUrl={process.env.NEXT_PUBLIC_GOLEM_URL_SITE}
            title={post?.title}
            snippet={post?.snippet}
            publishedDate={post?.publishedDate}
            heroImage={post?.heroImage}
            author={post?.author}
            body={post?.body}
          />
        </Content>
      </BaseLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  let data = {}
  let query = {}
  let variables = { relativePath: `${params.slug}.md` }
  try {
    const res = await client.queries.post(variables)
    query = res.query
    data = res.data
    variables = res.variables
  } catch {
    return { notFound: true }
  }

  return {
    props: {
      variables,
      data,
      query,
    },
  }
}

export async function getStaticPaths() {
  const postsListData = await client.queries.postConnection()

  return {
    paths: postsListData.data.postConnection.edges?.map((post) => ({
      params: { slug: post.node._sys.filename },
    })) || [],
    fallback: false,
  }
}

export default BlogPost