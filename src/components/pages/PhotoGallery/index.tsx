import React from 'react'
import LandingPage from './LandingPage'
import Content from '../../layouts/Content'
import Gallery, { GalleryProps } from './Gallery'


const Home: React.FC<GalleryProps> = props => {
    return (
        <React.Fragment>
        <Content width="medium">
            <LandingPage />
        </Content>

        <Content width="wide">
            <Gallery {...props} />
        </Content>
        </React.Fragment>
    )
}

export default Home