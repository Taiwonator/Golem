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
    <BaseLayout pageTitle='Golem | Mission'>         
        <Main {...props} />
    </BaseLayout>
  )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('field-reports?sort=-publishedDate')
  if(error) {
    console.error('mission.jsx - get static props error: ', error)
    return { notFound: true }
  }

  const [goalsData, goalsRes, goalsError] = await payloadFetch('goals')
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