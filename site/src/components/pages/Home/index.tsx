import React from 'react'
import LandingPage from './LandingPage'
import OurFight from './OurFight'
import AboutUs from './AboutUs'
import Stats from './Stats'
import Help from './Help'
import BlogPosts from './BlogPosts'
import ContactUs from './ContactUs'
import Content from '../../layouts/Content'

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
        </Content>
    )
}

export default Home