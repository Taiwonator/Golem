import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'

const Blog: NextPage = () => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
          <Main />
      </BaseLayout>
    )
}

export default Blog