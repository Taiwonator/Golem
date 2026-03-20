import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/About'
import client from '../tina/__generated__/client'

interface AboutProps {
  projects: any[]
}

const About: NextPage<AboutProps> = ({ projects }) => {

  return (
    <BaseLayout
      pageTitle='Golem | About Us'
      metaData={{
        description: 'At Golem, we believe in rendering selfless sacrificial services to mankind through the charitable services we provide to our targeted audience. This is in keeping with our Christian ethos and aspiring to pattern our lives and conduct after our Lord Jesus Christ.',
        keywords: 'Values, About , Golem, Beliefs, Missionary, Mission'
      }}
    >
      <Main projects={projects} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.queries.projectConnection()
  const edges = res.data.projectConnection.edges || []
  const projects = edges.map(e => e?.node).filter(Boolean)

  return {
    props: {
      projects
    }
  }
}

export default About