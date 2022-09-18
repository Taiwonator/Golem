import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Mission'
import payloadFetch from 'src/lib/payload-fetcher'

export interface MissionProps {
  fieldReports: any[],
  goals: any[]
}

const Mission: NextPage<MissionProps> = (props) => {

  return (
    <BaseLayout 
      pageTitle='Golem | Our Mission'
      metaData={{
        description: 'Our mission is to accomplish the holistic emancipation of vulnerable people globally with a special focus on Nigeria through effective and sustainable address of physical, social, material, educational  and spiritual needs.',
        keywords: 'Field Reports, Goals , Golem, Volunteers, Missionary, Mission'
      }}
    >         
        <Main {...props} />
    </BaseLayout>
  )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('field-reports?sort=-publishedDate&limit=20')
  if(error) {
    console.error('mission.jsx - get static props error: ', error)
    return { notFound: true }
  }

  const [goalsData, goalsRes, goalsError] = await payloadFetch('goals?limit=50')
  if(error) {
    console.error('mission.jsx - get static props error: ', goalsError)
    return { notFound: true }
  }

  return {
    props: {
      fieldReports: data ? data.docs : [],
      goals: goalsData ? goalsData.docs : []
    },
  }
}

export default Mission