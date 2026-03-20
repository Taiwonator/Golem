import React from 'react'
import type { NextPage, GetStaticProps } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Mission'
import client from '../tina/__generated__/client'

interface MissionProps {
  fieldReports: any[]
  goals: any[]
}

const Mission: NextPage<MissionProps> = ({ fieldReports, goals }) => {

  return (
    <BaseLayout
      pageTitle='Golem | Our Mission'
      metaData={{
        description: 'Our mission is to accomplish the holistic emancipation of vulnerable people globally with a special focus on Nigeria through effective and sustainable address of physical, social, material, educational  and spiritual needs.',
        keywords: 'Field Reports, Goals , Golem, Volunteers, Missionary, Mission'
      }}
    >
      <Main fieldReports={fieldReports} goals={goals} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [frRes, goalsRes] = await Promise.all([
    client.queries.fieldReportConnection({
      sort: 'publishedDate',
      filter: { status: { eq: 'published' } }
    }),
    client.queries.goalConnection()
  ])

  const frEdges = frRes.data.fieldReportConnection.edges || []
  const fieldReports = frEdges.map(e => e?.node).filter(Boolean).reverse()
  const goalEdges = goalsRes.data.goalConnection.edges || []
  const goals = goalEdges.map(e => e?.node).filter(Boolean)

  return {
    props: {
      fieldReports,
      goals
    }
  }
}

export default Mission