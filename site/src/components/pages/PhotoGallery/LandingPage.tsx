import React from 'react'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Section from '../../layouts/Section'
import styles from './LandingPage.module.scss'

const LandingPage: React.FC = props => {
    return (
        <Section id='photo-gallery-landing' otherClassNames={styles['landing-page']}>
            <Header tag="h1" large>
                <TextDecorator
                    underline
                    underlineCenter
                    underlineColor={'green'}
                >
                    Photo Gallery
                </TextDecorator>
            </Header>
            <p>A quick look at the change we are making.</p>
            <Icon name='bars--s--arrow' width={216}/>
        </Section>
    )
}

export default LandingPage