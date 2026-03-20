import React from 'react'
import Footer from './Footer'
import styles from './BaseLayout.module.scss'
import Navigation from './Navigation'
import Head from 'next/head'
import { IContainer } from '../../types/react-types'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface IBaseLayout extends IContainer {
    pageTitle: string
    metaData?: {
        description?: string
        keywords?: string
        author?: string,
        og?: {
            title?: string
            description?: string
            imageUrl?: string
        } 
    }
}

const BaseLayout: React.FC<IBaseLayout> = ({ children, pageTitle, metaData={} }) => {
    const { description, keywords, author, og={} } = metaData 
    const { title: ogTitle, description: ogDescription, imageUrl: ogImageUrl } = og
  
    return (
        <React.Fragment>
            <Head>
                <title>{ pageTitle }</title>
                <meta property="og:title" content={pageTitle} />

                {description && (<meta name="description" content={description} />)}
                {keywords && (<meta name="keywords" content={keywords} />)}
                {author && (<meta name="author" content={author} />)}

                {ogDescription || description && (<meta property="og:description" content={ogDescription || description} />)}
                <meta property="og:image" content={ogImageUrl || '/assets/golem-heart--mobile.png'} />

                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#97e600" />
                <meta name="msapplication-TileColor" content="#ff6b00" />
                <meta name="theme-color" content="#ffffff" />
            </Head>        
            <div className={styles['base-layout']}>
                <Navigation />
                <main className={styles['base-layout__main']}>
                    { children }
                </main>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default BaseLayout