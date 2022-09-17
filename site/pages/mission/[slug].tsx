import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import FieldReportLayout from 'src/components/pages/Mission/FieldReportLayout'
import Content from 'src/components/layouts/Content'
import payloadFetch from 'src/lib/payload-fetcher'

const FieldReport: NextPage = (props: any) => {
  const { fieldReport } = props

    return (  
      <BaseLayout pageTitle='Golem | Field Report'>
          <Content width='wide'>
              <FieldReportLayout 
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