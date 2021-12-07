import React from 'react'
import LandingPage from './LandingPage'
import Content from '../../layouts/Content'
import Gallery from './Gallery'
import { generateImageUrls } from './lib/generate-image-urls'


const Home: React.FC = props => {
    return (
        <React.Fragment>
        <Content width="medium">
            <LandingPage />
        </Content>

        <Content width="wide">
            <Gallery images={generateImageUrls(100)}/>
        </Content>
        </React.Fragment>
    )
}

export default Home