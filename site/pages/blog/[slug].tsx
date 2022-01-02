import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import PostLayout from 'src/components/pages/Blog/PostLayout'
import Content from 'src/components/layouts/Content'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Test: NextPage = (props) => {
  const post = props['post']

    return (  
      <BaseLayout pageTitle='Golem | Blog Post'>
          <Content width='wide'>
              <PostLayout 
                dateCreated={post.dateCreated}
                views={post.views}
                name={post.name}
                snippet={post.snippet}
                author={post.author}
                mainImageUrl={post.mainImageUrl}
                body={post.body}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps() {
    const post = []
  
    return {
      props: {
        post,
      },
    }
  }

  export async function getStaticPaths() {
    const slugs = []

    return {
      paths: slugs.map(slug => ({
        params: { slug }
      })),
      fallback: false
    };
  }

export default Test

// author, body, datePublished, mainImageUrl, name, views, snippet