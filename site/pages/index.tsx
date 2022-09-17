import React, { useEffect, useState, useRef } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Home'
import payloadFetch from 'src/lib/payload-fetcher'

export interface HomeProps {
  posts: any[],
  postCount: number,
  fPost: any,
  faqs: any[]
}

const Home: NextPage<HomeProps> = (props) => {

  return (
    <React.Fragment>

      <BaseLayout pageTitle='Golem | Home'>         
          <Main {...props} />
      </BaseLayout>

    </React.Fragment>
  )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('posts?where[status][equals]=published')
  if(error) {
    console.error('index.jsx - get static props error: ', error)
    return { notFound: true }
  }
  
  const [fData, fRes, fError] = await payloadFetch('posts?where[status][equals]=published&where[featured][equals]=true')
  if(fError) {
    console.error('index.jsx - get static props error: ', fError)
    return { notFound: true }
  }

  const [faqsData, faqsRes, faqsError] = await payloadFetch('faqs')
  if(faqsError) {
    console.error('index.jsx - get static props error: ', faqsError)
    return { notFound: true }
  }

  return {
    props: {
      posts: data ? data.docs : [],
      postCount: data ? data.totalDocs : 0,
      fPost: (fData && fData.docs.length) ? fData.docs[0] : null,
      faqs: faqsData ? faqsData.docs : []
    },
  }
}

export default Home