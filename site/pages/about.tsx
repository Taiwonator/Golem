import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/About'
import payloadFetch from 'src/lib/payload-fetcher'

export interface AboutProps {
  projects: any[]
}

const About: NextPage<AboutProps> = (props) => {

  return (
    <BaseLayout pageTitle='Golem | About'>         
        <Main {...props} />
    </BaseLayout>
  )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('projects')
  if(error) {
    console.error('index.jsx - get static props error: ', error)
    return { notFound: true }
  }

  return {
    props: {
      projects: data ? data.docs : [],
    },
  }
}

export default About