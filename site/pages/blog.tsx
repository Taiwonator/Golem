import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/Blog'
import payloadFetch, { useSWRConfig } from 'src/lib/payload-fetcher'
import useSWR from 'swr'

const Blog: NextPage = () => {  

  const { key: postsKey, fetcher } = useSWRConfig(`posts?sort=-publishedDate&where[status][equals]=published`)
  const { data: postsData } = useSWR(postsKey, fetcher)

  const { key: featuredPostsKey } = useSWRConfig(`posts?sort=-publishedDate&where[status][equals]=published&where[featured][equals]=true`)
  const { data: featuredPostsData } = useSWR(featuredPostsKey, fetcher)

  const posts = postsData ? postsData.docs : []
  const featuredPosts = featuredPostsData ? featuredPostsData.docs : []

    return (
      <BaseLayout
        pageTitle='Golem | Blog'
        metaData={{
          description: 'Check out our collection of blog articles about everything Africa, Faith and Life.',
          keywords: 'Charity, Golem, God, Blog, Stories, Missionary, Ministry'
        }}
      >
          <Main featuredPosts={featuredPosts} posts={posts} metaData={postsData} />
      </BaseLayout>
    )
}

// export async function getStaticProps () {

//   const [data, res, error] = await payloadFetch('posts?sort=-publishedDate&where[status][equals]=published')
//   if(error) {
//     console.error('blog.jsx - get static props error: ', error)
//     return { notFound: true }
//   }

//   const [fData, fRes, fError] = await payloadFetch('posts?sort=-publishedDate&where[status][equals]=published&where[featured][equals]=true')
//   if(fError) {
//     console.error('blog.jsx - get static props error: ', error)
//     return { notFound: true }
//   }

//   return {
//     props: {
//       postsData: data ? data : {},
//       featuredPosts: fData ? fData.docs : []
//     },
//   }
// }

// Create fetch hook, return data, res, error


export default Blog