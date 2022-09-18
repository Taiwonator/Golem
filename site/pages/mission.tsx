import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Mission'
import payloadFetch, { useSWRConfig } from 'src/lib/payload-fetcher'
import useSWR from 'swr'

const Mission: NextPage= () => {

  const { key: fieldReportsKey, fetcher } = useSWRConfig(`field-reports?sort=-publishedDate?limit=20&where[status][equals]=published`)
  const { data: fieldReportsData } = useSWR(fieldReportsKey, fetcher)

  const { key: goalsKey } = useSWRConfig(`goals?limit=50`)
  const { data: goalsData } = useSWR(goalsKey, fetcher)

  const mainProps = {
    fieldReports: fieldReportsData ? fieldReportsData.docs : [],
    goals: goalsData ? goalsData.docs : []
  }

  return (
    <BaseLayout 
      pageTitle='Golem | Our Mission'
      metaData={{
        description: 'Our mission is to accomplish the holistic emancipation of vulnerable people globally with a special focus on Nigeria through effective and sustainable address of physical, social, material, educational  and spiritual needs.',
        keywords: 'Field Reports, Goals , Golem, Volunteers, Missionary, Mission'
      }}
    >         
        <Main {...mainProps} />
    </BaseLayout>
  )
}

// export async function getStaticProps () {

//   const [data, res, error] = await payloadFetch('field-reports?sort=-publishedDate&limit=20')
//   if(error) {
//     console.error('mission.jsx - get static props error: ', error)
//     return { notFound: true }
//   }

//   const [goalsData, goalsRes, goalsError] = await payloadFetch('goals?limit=50')
//   if(error) {
//     console.error('mission.jsx - get static props error: ', goalsError)
//     return { notFound: true }
//   }

//   return {
//     props: {
//       fieldReports: data ? data.docs : [],
//       goals: goalsData ? goalsData.docs : []
//     },
//   }
// }

export default Mission