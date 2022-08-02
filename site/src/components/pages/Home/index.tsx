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

const Home: React.FC = props => {

    return (
        <Content width="medium">
            <LandingPage />
            <OurFight />
            <AboutUs />
            <Stats />
            <Help />
            <BlogPosts />
            <ContactUs />
            <FAQs />
        </Content>
    )
}

export default Home