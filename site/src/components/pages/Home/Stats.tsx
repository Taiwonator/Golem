import React from 'react'
import Circle from 'src/components/widgets/Circle'
import Section from '../../layouts/Section'
import styles from './Stats.module.scss'
import SETTINGS from 'src/styles/settings'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'

const Stats: React.FC = props => {
    return (
        <Section id='impact' otherClassNames={styles['stats']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large">
                    <TextDecorator underline underlineColor='orange'>Our Impact</TextDecorator>
                    <Icon className={styles['stats__desktop-icon']} name="logo--green" width={70} />
                </Text>
                <Stack className={styles['stats__content']}>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.darkgreen} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">10</Text>
                        </Circle>
                        <Text tag="h2" size="header">Families</Text>
                        <Text tag="p">Lorem ipsum dolor sit amet, consecteturadipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. </Text>
                    </Stack>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.orange} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">22</Text>
                        </Circle>
                        <Text tag="h2" size="header">Blog Posts</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue</Text>
                    </Stack>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.green} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">2</Text>
                        </Circle>
                        <Text tag="h2" size="header">Countries</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Section>
    )
}

export default Stats