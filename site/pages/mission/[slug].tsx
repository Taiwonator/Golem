import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import FieldReportLayout from 'src/components/pages/Mission/FieldReportLayout'
import Content from 'src/components/layouts/Content'
import { formatDate } from 'src/lib/date'
import client from '../../tina/__generated__/client'
import { useTina } from 'tinacms/dist/react'

const FieldReport: NextPage = (props: any) => {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const fieldReport = data.fieldReport

  return (
    <BaseLayout
      pageTitle={`Golem | Field Report - ${fieldReport?.title}`}
      metaData={{
        description: `Golem | Field Report - ${fieldReport?.title} (${formatDate(fieldReport?.publishedDate)})`,
        keywords: 'Field Report, Updates, Mission, Charity',
        og: {
          title: fieldReport?.title,
          imageUrl: fieldReport?.heroImage
        }
      }}
    >
      <Content width='wide'>
        <FieldReportLayout
          siteUrl={props.siteUrl}
          title={fieldReport.title}
          publishedDate={fieldReport.publishedDate}
          body={fieldReport.body}
        />
      </Content>
    </BaseLayout>
  )
}

export async function getStaticProps({ params }) {
  const slug = params.slug as string
  // Find the file that matches this slug
  const allReports = await client.queries.fieldReportConnection()
  const edges = allReports.data.fieldReportConnection.edges || []
  const match = edges.find(e => e.node.slug === slug)

  if (!match) {
    return { notFound: true }
  }

  const relativePath = match.node._sys.relativePath
  const tinaData = await client.queries.fieldReport({ relativePath })

  return {
    props: {
      data: tinaData.data,
      query: tinaData.query,
      variables: tinaData.variables,
      siteUrl: process.env.GOLEM_URL_SITE || ''
    },
  }
}

export async function getStaticPaths() {
  const result = await client.queries.fieldReportConnection()
  const edges = result.data.fieldReportConnection.edges || []

  return {
    paths: edges.map(edge => ({
      params: { slug: edge.node.slug }
    })),
    fallback: false
  }
}

export default FieldReport