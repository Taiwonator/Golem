import React from 'react'
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

const Home: React.FC = props => {

    return (
        <Content width="medium">
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <LandingPage />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <OurFight />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <AboutUs />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <Stats />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
                <Help />
                <BlogPosts />
                <ContactUs />
                <FAQs />
            </AnimationOnScroll>

        </Content>
    )
}

export default Home