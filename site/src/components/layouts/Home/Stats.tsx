import React from 'react'
import Circle from 'src/components/widgets/Circle'
import Section from '../Section'
import styles from './Stats.module.scss'
import SETTINGS from 'src/styles/settings'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Icon from 'src/components/primitives/Icon'

const Stats: React.FC = props => {
    return (
        <Section id='impact' otherClassNames={styles['stats']}>
            <Header large>
                <TextDecorator underline underlineColor='orange'>Our Impact</TextDecorator>
                <div className={styles['stats__desktop-icon']}>
                    <Icon name="logo--green" />
                </div>
            </Header>
            <div className={styles['stats__content']}>
                <div className={styles['stats__column']}>
                    <Circle color={SETTINGS.darkgreen} otherClassNames={styles['stats__circle']}>
                        <Header large>10</Header>
                    </Circle>
                    <Header>Families</Header>
                    <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. </p>
                </div>
                <div className={styles['stats__column']}>
                    <Circle color={SETTINGS.orange} otherClassNames={styles['stats__circle']}>
                        <Header large>22</Header>
                    </Circle>
                    <Header>Blog Posts</Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue</p>
                </div>
                <div className={styles['stats__column']}>
                    <Circle color={SETTINGS.green} otherClassNames={styles['stats__circle']}>
                        <Header large>2</Header>
                    </Circle>
                    <Header>Countries</Header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet</p>
                </div>
            </div>
        </Section>
    )
}

export default Stats