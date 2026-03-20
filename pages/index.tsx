import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Home'
import client from '../tina/__generated__/client'

interface HomeProps {
  posts: any[]
  fPost: any
  postCount: number
  faqs: any[]
  videos: string[]
}

const Home: NextPage<HomeProps> = ({ posts, fPost, postCount, faqs, videos }) => {

  return (
    <React.Fragment>
      <BaseLayout
        pageTitle='Golem | Home'
        metaData={{
          description: 'GOLEM (God of Love Emancipation Ministries) is a charitable emancipation organisation incorporated in August 2012 to propagate the Christian gospel around the world and demonstrate the love of Christ to the needy and vulnerable in practical ways. Prior to August 2012, GOLEM founded in 1998 by a Christian couple Jonathan Taiwo and Alice Taiwo has been operating informally raising and distributing vital funds to many local and overseas based ministries. Some of these were Oxfam, World Vision, Tear Fund, Euro Vision, just to mention a few.',
          keywords: 'Charity, Golem, God, Donate, Volunteers, Missionary, Ministry'
        }}
      >
        <Main posts={posts} fPost={fPost} postCount={postCount} faqs={faqs} videos={videos} />
      </BaseLayout>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [postsRes, faqsRes, pageRes] = await Promise.all([
    client.queries.postConnection({
      sort: 'publishedDate',
      filter: { status: { eq: 'published' } }
    }),
    client.queries.faqConnection(),
    client.queries.page({ relativePath: 'home.json' }).catch(() => null),
  ])

  const postEdges = postsRes.data.postConnection.edges || []
  const allPosts = postEdges.map(e => e?.node).filter(Boolean).reverse()
  const fPost = allPosts.find((p: any) => p.featured) || null
  const postCount = postsRes.data.postConnection.totalCount

  const faqEdges = faqsRes.data.faqConnection.edges || []
  const faqs = faqEdges.map(e => e?.node).filter(Boolean)

  const blocks = pageRes?.data?.page?.blocks || []
  const videoCarouselBlock = blocks.find((b: any) => b?.__typename === 'PageBlocksVideoCarousel')
  const videos = (videoCarouselBlock?.videos || []).filter(Boolean)

  return {
    props: {
      posts: allPosts,
      fPost,
      postCount,
      faqs,
      videos,
    }
  }
}

export default Home