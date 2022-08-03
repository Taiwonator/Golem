import React from 'react'
import Content from 'src/components/layouts/Content'
import Statement from './Statement'
import LandingPage from './LandingPage'
import Funding from './Funding'

const Mission: React.FC = props => {

    return (
        <>
            <Content width="medium">
                <LandingPage />
            </Content>
            <Content width="small">
                <Statement />
                <Funding />
            </Content>
        </>
    )
}

export default Mission