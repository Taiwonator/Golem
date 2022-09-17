import React from 'react'
import Content from 'src/components/layouts/Content'
import Statement from './Statement'
import LandingPage from './LandingPage'
import Funding from './Funding'
import Slideshow from 'src/components/widgets/Slideshow/Slideshow'
import { aboutConfig } from 'src/data/Slideshow'
import PageStack from 'src/components/primitives/PageStack'
import Projects from './Projects'
import styles from './index.module.scss'
import { useScrollIntoView } from 'src/hooks/useScrollIntoView'
import { AboutProps } from 'pages/about'

const About: React.FC<AboutProps> = ({ projects }) => {
    const [scrollRef, triggerScrollIntoView] = useScrollIntoView()

    return (
        <PageStack gap="large">
            <Content width="medium">
                <LandingPage onButtonClick={() => triggerScrollIntoView()} />
            </Content>
             <Content width="medium" ref={scrollRef}>
            <Slideshow config={aboutConfig} />
            </Content>
            <Content width="small" className={styles['about__content--no-margin-top']}>
                <PageStack>
                    <Statement />
                    <Funding />
                </PageStack>
            </Content>
            <Projects projects={projects} />
        </PageStack>
    )
}

export default About