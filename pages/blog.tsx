import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'

const Blog: NextPage = () => {
    return (
      <BaseLayout pageTitle='Golem | Blog'>
        This is the blog
      </BaseLayout>
    )
}

export default Blog