import React from 'react'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import SETTINGS from 'src/styles/settings'
import Section from '../Section'
import styles from './ContactUs.module.scss'

const ContactUs: React.FC = props => {
    return (
        <Section otherClassNames={styles['contact-us']}>
            <Header large><TextDecorator underline underlineColor='orange' underlineCenter>Get in touch</TextDecorator></Header>
            <p>Click the button to get in contact with us today 📩</p>
            <Button color={SETTINGS.darkgreen} border>
                <Header tag="h3"><TextDecorator color={SETTINGS.white}>jonathan.golemministries@gmail.com</TextDecorator></Header>
            </Button>
        </Section>
    )
}

export default ContactUs