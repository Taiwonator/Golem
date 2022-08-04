import React from 'react'
import Content from 'src/components/layouts/Content'
import Stack from 'src/components/layouts/Stack'
import LandingPage from './LandingPage'
import Statement from './Statement'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Slideshow from 'src/components/widgets/Slideshow/Slideshow'
import { missionsConfig } from 'src/data/Slideshow'
import PageStack from 'src/components/primitives/PageStack'

const Mission: React.FC = props => {

    return (
        <>
            <LandingPage />
            <PageStack gap="large">
                <Content width="medium">
                    <Slideshow config={missionsConfig} />
                </Content>
                <Content width="small">
                    <Statement />
                </Content>
            </PageStack>
        </>
    )
}

export default Mission