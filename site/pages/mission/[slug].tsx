import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import FieldReportLayout from 'src/components/pages/Mission/FieldReportLayout'
import Content from 'src/components/layouts/Content'
import payloadFetch, { useSWRConfig } from 'src/lib/payload-fetcher'
import { formatDate } from 'src/lib/date'
import useSWR from 'swr'

const FieldReport: NextPage = (props: any) => {
  const { filter, siteUrl, staticFieldReport } = props

  const { key, fetcher } = useSWRConfig(`field-reports?${filter}`)
  const { data, error } = useSWR(key, fetcher)

  const fieldReport = data ? data.docs[0] : {}

    return (  
      <BaseLayout 
        pageTitle={`Golem | Field Report - ${staticFieldReport?.title}`}
        metaData={{
          description: `Golem | Field Report - ${staticFieldReport?.title} (${formatDate(staticFieldReport?.publishedDate)})`,
          keywords: 'Field Report, Updates, Mission, Charity',
          og: {
            title: staticFieldReport?.title,
            imageUrl: staticFieldReport?.heroImage?.url 
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
      filter,
      staticFieldReport: data ? data.docs[0] : {},
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