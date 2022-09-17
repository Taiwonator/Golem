import React from 'react'
import Section from '../../layouts/Section'
import styles from './FAQs.module.scss'
import FAQsWidget, { FAQsProps } from '../../widgets/FAQs'

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
    return (
        <Section id='faqs' otherClassNames={styles['faqs']}>
            <FAQsWidget faqs={faqs} />
        </Section>
    )
}

export default FAQs