import React, { useRef } from 'react'
import LandingPage from './LandingPage'
import OurFight from './OurFight'
import AboutUs from './AboutUs'
import Stats from './Stats'
import Help from './Help'
import BlogPosts from './BlogPosts'
import ContactUs from './ContactUs'
import Content from '../../layouts/Content'
import FAQs from './FAQs'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useScrollIntoView } from 'src/hooks/useScrollIntoView'
import { HomeProps } from 'pages'
import PageStack from 'src/components/primitives/PageStack'

const generateStatsData = (postCount) => ({
    families: {
        count: 30,
        text: "We are dedicated to serving families, especially widows and their children. We believe in equipping them in order that they may continue to help others and themselves."
    },
    posts: {
        count: postCount,
        text: "Check out our blogs coverring the current state of Africa, and topics ranging from faith, to life tips."
    },
    countries: {
        count: 2,
        text: "We are primarily based in Nigeria, however we have operations in process in _ and hopefully many more countries in the future!"
    },
}
)

const Home: React.FC<HomeProps> = ({ posts, postCount, fPost, faqs }) => {

const [scrollRef, triggerScrollIntoView] = useScrollIntoView()

    return (
        <Content width="medium">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <LandingPage onButtonClick={() => triggerScrollIntoView()} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <OurFight ref={scrollRef} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <AboutUs />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <Stats data={generateStatsData(postCount)} />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <PageStack>
                    <Help />
                    <BlogPosts fPost={fPost} posts={posts} />
                    <ContactUs />
                    <FAQs faqs={faqs} />
                </PageStack>
            </AnimationOnScroll>

        </Content>
    )
}

export default Home