import React from 'react'
import Content from 'src/components/layouts/Content'
import Statement from './Statement'
import LandingPage from './LandingPage'
import Funding from './Funding'
import Slideshow from 'src/components/widgets/Slideshow/Slideshow'
import { aboutConfig, projectsConfig } from 'src/data/Slideshow'
import PageStack from 'src/components/primitives/PageStack'
import Projects from './Projects'
import styles from './index.module.scss'

const Mission: React.FC = props => {

    return (
        <PageStack gap="large">
            <Content width="medium">
                <LandingPage />
            </Content>
             <Content width="medium">
                <Slideshow config={aboutConfig} />
            </Content>
            <Content width="small" className={styles['about__content--no-margin-top']}>
                <PageStack>
                    <Statement />
                    <Funding />
                </PageStack>
            </Content>
            <Projects />
        </PageStack>
    )
}

export default Mission