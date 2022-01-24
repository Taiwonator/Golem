import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Button from 'src/components/primitives/Button'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../../layouts/Section'
import styles from './ContactUs.module.scss'

const ContactUs: React.FC = props => {
    return (
        <Section id='contact-us' otherClassNames={styles['contact-us']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='orange' underlineCenter>Get in touch</TextDecorator></Text>
                <Text size="standard--large">Click the button to get in contact with us today 📩</Text>
                <Button color={SETTINGS.darkgreen} border>
                    <Text tag="h3"><TextDecorator color={SETTINGS.white}>jonathan.golemministries@gmail.com</TextDecorator></Text>
                </Button>
            </Stack>
        </Section>
    )
}

export default ContactUs