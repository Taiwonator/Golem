import React, { useState } from 'react'
import Content from 'src/components/layouts/Content'
import Stack from 'src/components/layouts/Stack'
import LandingPage from './LandingPage'
import Statement from './Statement'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Slideshow from 'src/components/widgets/Slideshow/Slideshow'
import { makeFieldReportsConfig, makeMissionsConfig } from 'src/data/Slideshow'
import PageStack from 'src/components/primitives/PageStack'
import FieldReport from './FieldReport'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import { MissionProps } from 'pages/mission'


const Mission: React.FC<MissionProps> = ({ fieldReports, goals }) => {

    return (
        <>
            <LandingPage />
            <PageStack gap="large">
                <Content width="medium">
                    <Slideshow config={makeMissionsConfig(goals.map(goal => goal.text))} />
                </Content>
                <Content width="small">
                    <Statement />
                </Content>
                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                    <Content width="medium" center>
                        <Stack gap="large">
                            <Text tag="h2" size="header--large">
                                <TextDecorator underline underlineColor='green' underlineCenter>Field Reports</TextDecorator>
                            </Text>
                            <Slideshow config={makeFieldReportsConfig(fieldReports.map((f,i) => <FieldReport key={i} i={i} {...f} />))} />
                        </Stack>
                    </Content>
                </AnimationOnScroll>
            </PageStack>
        </>
    )
}

export default Mission