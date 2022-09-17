import Image from 'next/image'
import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import Link from 'src/components/primitives/Link'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import styles from './BlogPosts.module.scss'
import cx from 'classnames'
import Icon from 'src/components/primitives/Icon'

interface BlogPosts {
    posts: any[],
    fPost?: any
}

interface BlogPost {
    title: string
    heroImage: {
        url: string
        alt?: string
    }
    snippet: string
    slug: string
    odd: boolean
}


const BlogPosts: React.FC<BlogPosts> = ({ posts, fPost }) => {

    return (
        <Stack gap="large" className={styles['blog-posts']}>
            <div className={styles['blog-posts__title']}>
                <Icon className={cx(styles['blog-posts--tabletOnly'], styles['blog-posts__icon--tablet'])} name="bars--nw" width={100} />
                <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='darkgreen' underlineCenter>Blog Posts</TextDecorator></Text>
                <Icon className={cx(styles['blog-posts--tabletOnly'], styles['blog-posts__icon--tablet'])} name="bars--ne" width={100} />
            </div>
            {posts.length > 3 ? (
                <>
                    { fPost && (<div><FeaturedBlogPost {...fPost} /></div> )}
                    <div className={styles['blog-posts__list']}>
                        {posts.map( (post, i) => {
                            if(post.slug != fPost.slug) return <BlogPost odd={i % 2 != 0} key={i} {...post} />
                            return undefined
                        }).filter(x => x != undefined).slice(0, 3)}
                    </div>
                </>
            ) : (
                <>
                    <div className={styles['blog-posts__list']}>
                        {posts.map( (post, i) => <BlogPost odd={i % 2 != 0} key={i} {...post} />)}
                    </div>
                </>
            )}

            {posts.length === 0 && (<Text size="header--medium">We are working on some amazing posts ⭐</Text>) }
        </Stack>
    )
}

const BlogPost: React.FC<BlogPost> = ({ odd, title, heroImage, snippet, slug }) => {
    const MAX_SNIPPET_LENGTH = 100
    const shortSnippet = snippet.length > MAX_SNIPPET_LENGTH ? snippet.slice(0, MAX_SNIPPET_LENGTH) + '...' : snippet

    return (
        <Link to={`blog/${slug}#top`}>
            <Stack className={styles['blog-post']}>
                <div className={styles['blog-post__image']}>
                    <Image src={heroImage.url} alt={heroImage?.alt} layout="fill" objectFit='cover' />
                </div>
                <Text tag="h3" size="header--small">{title}</Text>
                <Text tag="p" size="standard--medium">{shortSnippet}</Text>
                <Button>
                    <TextDecorator bold color={SETTINGS.darkgreen}>READ BLOG</TextDecorator>
                </Button>
            </Stack>
        </Link>
    )
}

const FeaturedBlogPost: React.FC<BlogPost> = ({ title, heroImage, snippet, slug }) => {
    const MAX_SNIPPET_LENGTH = 100
    const shortSnippet = snippet.length > MAX_SNIPPET_LENGTH ? snippet.slice(0, MAX_SNIPPET_LENGTH) + '...' : snippet
    
    return (
        <Link to={`blog/${slug}#top`}>
            <div className={styles['featured-blog-post']}>
                <div className={styles['featured-blog-post__image']}>
                    <Image src={heroImage.url} alt={heroImage?.alt} layout="fill" objectFit='cover' />
                </div>
                <Stack className={styles['featured-blog-post__content']}>
                    <Text tag="h3" size="header--small">{title}</Text>
                    <Text tag="p" size="standard--medium">{shortSnippet}</Text>
                    <Button>
                        <TextDecorator bold color={SETTINGS.orange}>READ BLOG</TextDecorator>
                    </Button>
                </Stack>
            </div>
        </Link>
    )
}

export default BlogPosts