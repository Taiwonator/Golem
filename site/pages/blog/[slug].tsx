import type { NextPage } from 'next'
import BaseLayout from 'src/components/layouts/BaseLayout'
import PostLayout from 'src/components/pages/Blog/PostLayout'
import Content from 'src/components/layouts/Content'
import payloadFetch from 'src/lib/payload-fetcher'

const BlogPost: NextPage = (props: any) => {
  const { post } = props

    return (  
      <BaseLayout pageTitle='Golem | Blog Post'>
          <Content width='wide'>
              <PostLayout 
                views={0}
                {...post}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps({ params }) {
  const filter = `where[slug][equals]=${params.slug}`
  const [data, res, error] = await payloadFetch(`posts?${filter}`)
  if(error) {
    console.error('[slug].jsx - get static props error')
    return { notFound: true }
  }
  
  return {
    props: {
      post: data ? data.docs[0] : {},
    },
  }
}

  export async function getStaticPaths() {
      const [data, res, error] = await payloadFetch(`posts?limit=20`)
      if(error) {
        console.error('[slug].jsx - get static paths error')
        return { paths: [], fallback: false }
      }
  

    return {
      paths: data ? data.docs.map(post => post.slug).map(slug => ({
        params: { slug }
      })) : [],
      fallback: false
    };
  }

export default BlogPost