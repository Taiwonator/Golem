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
  const res = await fetch(`http://localhost:1337/api/posts?${query}`)
  const post = (await res.json()).data[0].attributes
  
    return {
      props: {
        post,
      },
    }
  }

  export async function getStaticPaths() {
    // const slugs = []
    const res = await fetch('http://localhost:1337/api/posts')
    const slugs = (await res.json()).data.map(post => post.attributes.slug)


    return {
      paths: slugs.map(slug => ({
        params: { slug }
      })),
      fallback: false
    };
  }

export default Test

// author, body, datePublished, mainImage, title, views, snippet