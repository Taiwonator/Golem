import type { NextPage } from 'next'
import Head from 'next/head'
import BaseLayout from 'src/components/layouts/BaseLayout'
import Main from 'src/components/layouts/Blog'
import ArticleLayout from 'src/components/layouts/Blog/ArticleLayout'
import Content from 'src/components/layouts/Content'

const Test: NextPage = () => {
    return (
      <BaseLayout pageTitle='Golem | Blog Post'>
          <Content width='wide'>
              <ArticleLayout article={{}} />
          </Content>
      </BaseLayout>
    )
}

export default Test