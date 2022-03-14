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
                publishedAt={post.publishedAt}
                views={post.views}
                title={post.title}
                snippet={post.snippet}
                author={post.author}
                mainImageUrl={post.mainImageUrl}
                body={post.body}
            />
          </Content>
      </BaseLayout>
    )
}

export async function getStaticProps({ params }) {
  const query = `filters[slug][$eq]=${params.slug}`
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?${query}`)
  const data = (await res.json()).data
  
    return {
      props: {
        post: data ? data[0].attributes : {},
      },
    }
  }

  export async function getStaticPaths() {
    // const slugs = []
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
    const data = (await res.json()).data


    return {
      paths: data ? data.map(post => post.attributes.slug).map(slug => ({
        params: { slug }
      })) : [],
      fallback: false
    };
  }

export default Test

// author, body, datePublished, mainImage, title, views, snippet