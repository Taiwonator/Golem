import React from 'react'
import Content from 'src/components/layouts/Content'
import Stack from 'src/components/layouts/Stack'
import LandingPage from './LandingPage'
import Statement from './Statement'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Mission: React.FC = props => {

    return (
        <>
            <LandingPage />
            <Content width="small">
                <Statement />
            </Content>
        </>
    )
}

export default Mission