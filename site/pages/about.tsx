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
    <BaseLayout
      pageTitle='Golem | About Us'
      metaData={{
        description: 'At Golem, we believe in rendering selfless sacrificial services to mankind through the charitable services we provide to our targeted audience. This is in keeping with our Christian ethos and aspiring to pattern our lives and conduct after our Lord Jesus Christ.',
        keywords: 'Values, About , Golem, Beliefs, Missionary, Mission'
      }}
    >         
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