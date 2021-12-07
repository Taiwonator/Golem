import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/pages/PhotoGallery'

const PhotoGallery: NextPage = () => {

  return (
    <BaseLayout pageTitle='Golem | Blog'>
      <Main />
    </BaseLayout>
  )
}

export default PhotoGallery