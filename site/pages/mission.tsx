import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Mission'
import payloadFetch from 'src/lib/payload-fetcher'

const Mission: NextPage = (props: any) => {

  const { fieldReports } = props

  return (
    <BaseLayout pageTitle='Golem | Mission'>         
        <Main fieldReports={fieldReports} />
    </BaseLayout>
  )
}

export async function getStaticProps () {

  const [data, res, error] = await payloadFetch('field-reports')
  if(error) {
    console.error('mission.jsx - get static props error: ', error)
    return { notFound: true }
  }

  return {
    props: {
      fieldReports: data ? data.docs : [],
    },
  }
}

export default Mission