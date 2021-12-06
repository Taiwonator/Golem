import React from 'react'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../Section'
import styles from './LandingPage.module.scss'

const LandingPage: React.FC = props => {
    return (
        <Section id='blog-landing' otherClassNames={styles['landing-page']}>
            <Header tag="h1" large>
                <TextDecorator
                    underline
                    underlineCenter
                    underlineColor={'green'}
                    theme='blog'
                >
                    The Blog
                </TextDecorator>
            </Header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis.</p>
            <Icon name='bars--s--arrow' width={216}/>
        </Section>
    )
}

export default LandingPage