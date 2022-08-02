import React from 'react'
import Section from '../../layouts/Section'
import styles from './FAQs.module.scss'
import FAQsWidget from '../../widgets/FAQs'

const FAQs: React.FC = props => {
    return (
        <Section id='faqs' otherClassNames={styles['faqs']}>
            <FAQsWidget />
        </Section>
    )
}

export default FAQs