import React, { useRef } from 'react'
import LandingPage from './LandingPage'
import MissionSnippet from './MissionSnippet'
import OurFight from './OurFight'
import AboutUs from './AboutUs'
import Interview from './Interview'
import Stats from './Stats'
import Help from './Help'
import BlogPosts from './BlogPosts'
import ContactUs from './ContactUs'
import Content from '../../layouts/Content'
import FAQs from './FAQs'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { useScrollIntoView } from 'src/hooks/useScrollIntoView'
import PageStack from 'src/components/primitives/PageStack'
import Videos from './Videos'
import ChristmasAtGolem from './ChristmasAtGolem'

interface HomeProps {
    posts?: any[]
    fPost?: any
    postCount?: number
    faqs?: any[]
    videos?: string[]
}

const Home: React.FC<HomeProps> = ({ posts, fPost, postCount, faqs, videos }) => {

    const [scrollRef, triggerScrollIntoView] = useScrollIntoView()

    return (
        <Content width="medium">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <LandingPage onButtonClick={() => triggerScrollIntoView()} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <ChristmasAtGolem />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <MissionSnippet />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <OurFight ref={scrollRef} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <AboutUs />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <Stats postCount={postCount} />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <Interview />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <PageStack>
                    <Help />
                    <BlogPosts posts={posts} fPost={fPost} />
                    {videos && videos.length > 0 && <Videos videos={videos} />}
                    <ContactUs />
                </PageStack>
            </AnimationOnScroll>

            <FAQs faqs={faqs} />

        </Content>
    )
}

export default Home