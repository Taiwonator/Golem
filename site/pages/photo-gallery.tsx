import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/PhotoGallery'

const PhotoGallery: NextPage = () => {

  return (
    <BaseLayout 
      pageTitle='Golem | Photo Gallery'
      metaData={{
        description: 'A quick look at the change we are making.',
        keywords: 'Photos, Golem, Pictures, Gallery, Volunteers, Missionary, Ministry'
      }}
    >
      <Main />
    </BaseLayout>
  )
}

export default PhotoGallery