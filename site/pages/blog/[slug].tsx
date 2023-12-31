import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import PostLayout from 'src/components/pages/Blog/PostLayout'
import Content from 'src/components/layouts/Content'
import payloadFetch, { useSWRConfig } from 'src/lib/payload-fetcher'
import { formatDate } from 'src/lib/date'
import useSWR from 'swr'
import Head from 'next/head'

const BlogPost: NextPage = (props: any) => {
  const { filter, siteUrl, staticPost } = props

  const { key, fetcher } = useSWRConfig(`posts?${filter}`)
  const { data, error } = useSWR(key, fetcher)

  const post = data ? data.docs[0] : {}

    return (  
      <BaseLayout
        pageTitle={`Golem | Blog Post - ${staticPost?.title}`}
        metaData={{
          description: staticPost?.snippet,
          keywords: 'Blog, Post, Updates, Faith, Africa, Mission, Charity, Golem',
          og: { 
            title: staticPost?.title,
            imageUrl: staticPost?.heroImage?.url 
          }
        }}
      >
        <Head>
          <div id="fb-root"></div>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0" nonce="5bagHmw7"></script>
        </Head>
          <Content width='wide'>
              <PostLayout 
                views={0}
                siteUrl={siteUrl}
                {...post}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps({ params }) {
  const filter = `where[slug][equals]=${params.slug}`
  const [data, res, error] = await payloadFetch(`posts?${filter}`)
  if(error) {
    console.error('[slug].jsx - get static props error')
    return { notFound: true }
  }
  
  return {
    props: {
      staticPost: data ? data.docs[0] : {},
      filter,
      siteUrl: process.env.GOLEM_URL_SITE
    },
  }
}

  export async function getStaticPaths() {
      const [data, res, error] = await payloadFetch(`posts?limit=10000`)
      if(error) {
        console.error('[slug].jsx - get static paths error')
        return { paths: [], fallback: false }
      }
  

    return {
      paths: data ? data.docs.map(post => post.slug).map(slug => ({
        params: { slug }
      })) : [],
      fallback: false,
    };
  }

export default BlogPost