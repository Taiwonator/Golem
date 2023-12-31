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
import PageStack from 'src/components/primitives/PageStack'
import Videos from './Videos'

const Home: React.FC = () => {

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
                <Stats />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <PageStack>
                    <Help />
                    <BlogPosts />
                    <Videos />
                    <ContactUs />
                    <FAQs />
                </PageStack>
            </AnimationOnScroll>

        </Content>
    )
}

export default Home