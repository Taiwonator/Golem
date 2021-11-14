import React from 'react'
import LandingPage from './LandingPage'
import OurFight from './OurFight'
import AboutUs from './AboutUs'
import Stats from './Stats'
import Help from './Help'
import BlogPosts from './BlogPosts'
import ContactUs from './ContactUs'

const Home: React.FC = props => {

    return (
        <React.Fragment>
            <LandingPage />
            <OurFight />
            <AboutUs />
            <Stats />
            <Help />
            <BlogPosts />
            <ContactUs />
        </React.Fragment>
    )
}

export default Home