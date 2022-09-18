import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import FieldReportLayout from 'src/components/pages/Mission/FieldReportLayout'
import Content from 'src/components/layouts/Content'
import payloadFetch from 'src/lib/payload-fetcher'
import { formatDate } from 'src/lib/date'

const FieldReport: NextPage = (props: any) => {
  const { fieldReport, siteUrl } = props

    return (  
      <BaseLayout 
        pageTitle={`Golem | Field Report - ${fieldReport.title}`}
        metaData={{
          description: `Golem | Field Report - ${fieldReport.title} (${formatDate(fieldReport.publishedDate)})`,
          keywords: 'Field Report, Updates, Mission, Charity',
          og: {
            title: fieldReport.title,
            imageUrl: fieldReport.heroImage?.url 
          }
        }}
      >
          <Content width='wide'>
              <FieldReportLayout 
                siteUrl={siteUrl}
                {...fieldReport}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps({ params }) {
  const filter = `where[slug][equals]=${params.slug}`
  const [data, res, error] = await payloadFetch(`field-reports?${filter}`)
  if(error) {
    console.error('[field-reports: slug].jsx - get static props error')
    return { notFound: true }
  }
  
  return {
    props: {
      fieldReport: data ? data.docs[0] : {},
      siteUrl: process.env.GOLEM_URL_SITE
    },
  }
}

  export async function getStaticPaths() {
      const [data, res, error] = await payloadFetch(`field-reports`)
      if(error) {
        console.error('[field-reports: slug].jsx - get static paths error')
        return { paths: [], fallback: false }
      }
  

    return {
      paths: data ? data.docs.map(fieldReport => fieldReport.slug).map(slug => ({
        params: { slug }
      })) : [],
      fallback: false
    };
  }

export default FieldReport