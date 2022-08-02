import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../../layouts/Section'
import styles from './Help.module.scss'

const Help: React.FC = props => {
    return (
        <Section id='help' otherClassNames={styles['help']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='green' underlineCenter>How to help</TextDecorator></Text>
                <Text>With hunger and natural disasters becoming more widespread across the world, the need for development and relief aid to accompany the work of evangelism and mission has never been more urgent.  If you are reading this and would like to support us in reaching more needy people with the gospel of love, consider making a donation to GOLEM by on our site, by cheque or direct to our account.</Text>
                <div className={styles['contact-details']}>
                    <Text bold>GOLEM MINISTRIES</Text>
                    <Text bold>Account No.: 83577238</Text>
                    <Text bold>Sort Code: 60-15-31</Text>
                </div>
                <Button color={SETTINGS.orange} border>Donate now</Button>
            </Stack>
        </Section>
    )
}

export default Help