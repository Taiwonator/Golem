import React, { useState, useEffect } from 'react'
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

    const [visibleFieldReports, setVisibleFieldReports] = useState(fieldReports)
    const [visibleGoals, setVisibleGoals] = useState(goals)

    useEffect(() => {
        const sortedFieldReports = fieldReports.sort((a, b) => Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate)));
        console.log(sortedFieldReports)
        setVisibleFieldReports(sortedFieldReports);
        // setVisibleFieldReports(fieldReports)
    }, [fieldReports])

    useEffect(() => {
        setVisibleGoals(goals)
    }, [goals])

    return (
        <>
            <LandingPage />
            <PageStack gap="large">
                <Content width="medium">
                    {visibleGoals.length ? (<Slideshow config={makeMissionsConfig(visibleGoals.map(goal => goal.text))} />) : null}
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
                            {visibleFieldReports.length ? (<Slideshow config={makeFieldReportsConfig(visibleFieldReports.map((f,i) => <FieldReport key={i} i={i} {...f} />))} />) : null}
                        </Stack>
                    </Content>
                </AnimationOnScroll>
            </PageStack>
        </>
    )
}

export default Mission