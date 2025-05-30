import React from 'react'
import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from '../src/components/pages/Home'

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <BaseLayout 
        pageTitle='Golem | Home'
        metaData={{
          description: 'GOLEM (God of Love Emancipation Ministries) is a charitable emancipation organisation incorporated in August 2012 to propagate the Christian gospel around the world and demonstrate the love of Christ to the needy and vulnerable in practical ways. Prior to August 2012, GOLEM founded in 1998 by a Christian couple Jonathan Taiwo and Alice Taiwo has been operating informally raising and distributing vital funds to many local and overseas based ministries. Some of these were Oxfam, World Vision, Tear Fund, Euro Vision, just to mention a few.',
          keywords: 'Charity, Golem, God, Donate, Volunteers, Missionary, Ministry'
        }}
      >         
          <Main  />
      </BaseLayout>
    </React.Fragment>
  )
}

// export async function getStaticProps () {

//   const [data, res, error] = await payloadFetch('posts?where[status][equals]=published&sort=-publishedDate')
//   if(error) {
//     console.error('index.jsx - get static props error: ', error)
//     return { notFound: true }
//   }
  
//   const [fData, fRes, fError] = await payloadFetch('posts?where[status][equals]=published&where[featured][equals]=true&sort=-publishedDate')
//   if(fError) {
//     console.error('index.jsx - get static props error: ', fError)
//     return { notFound: true }
//   }

//   const [faqsData, faqsRes, faqsError] = await payloadFetch('faqs')
//   if(faqsError) {
//     console.error('index.jsx - get static props error: ', faqsError)
//     return { notFound: true }
//   }

//   return {
//     props: {
//       posts: data ? data.docs : [],
//       postCount: data ? data.totalDocs : 0,
//       fPost: (fData && fData.docs.length) ? fData.docs[0] : null,
//       faqs: faqsData ? faqsData.docs : []
//     },
//   }
// }

export default Home