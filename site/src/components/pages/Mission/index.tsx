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
import { useSWRConfig } from 'src/lib/payload-fetcher'
import useSWR from 'swr'


const Mission: React.FC<any>  = ({ fieldReports, goals }) => {

    const { key: fieldReportsKey, fetcher } = useSWRConfig(`field-reports?sort=-publishedDate`)
    const { data: fieldReportsData } = useSWR(fieldReportsKey, fetcher)

    const { key: goalsKey } = useSWRConfig(`goals`)
    const { data: goalsData } = useSWR(goalsKey, fetcher)

    return (
        <>
            <LandingPage />
            <PageStack gap="large">
                <Content width="medium">
                    { goalsData ? (
                        <Slideshow config={makeMissionsConfig(goalsData.docs.map(goal => goal.text))} />
                    ) : goals ? (
                        <Slideshow config={makeMissionsConfig(goals.map(goal => goal.text))} />
                    ) : null}
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
                            {fieldReportsData ? (
                                (<Slideshow config={makeFieldReportsConfig(fieldReportsData.docs.map((f,i) => <FieldReport key={i} i={i} {...f} />))} />)
                            ) : fieldReports ? (
                                (<Slideshow config={makeFieldReportsConfig(fieldReports.map((f,i) => <FieldReport key={i} i={i} {...f} />))} />)
                            ) : null}
                        </Stack>
                    </Content>
                </AnimationOnScroll>
            </PageStack>
        </>
    )
}

export default Mission