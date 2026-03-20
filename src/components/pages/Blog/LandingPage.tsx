import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Header from 'src/components/primitives/Header'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../../layouts/Section'
import styles from './LandingPage.module.scss'

const LandingPage: React.FC = props => {
    return (
        <Section id='blog-landing' otherClassNames={styles['landing-page']}>
            <Stack gap="large">
                <Text tag="h1" size="header--large">
                    <TextDecorator
                        underline
                        underlineCenter
                        underlineColor={'green'}
                        theme='blog'
                    >
                        The Blog
                    </TextDecorator>
                </Text>
                <Text>
                    Check out our collection of blog articles about everything{' '}
                    <TextDecorator bold>Africa</TextDecorator>
                    ,{' '}
                    <TextDecorator bold>Faith</TextDecorator>
                    {' '}and{' '}
                    <TextDecorator bold>Life</TextDecorator>
                    .
                </Text>
                <Icon name='bars--s--arrow' width={216}/>
            </Stack>
        </Section>
    )
}

export default LandingPage