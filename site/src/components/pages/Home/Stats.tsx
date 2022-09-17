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

const statData = {
    families: {
        count: 30,
        text: "We are dedicated to serving families, especially widows and their children. We believe in equipping them in order that they may continue to help others and themselves."
    },
    posts: {
        count: 0,
        text: "Check out our blogs coverring the current state of Africa, and topics ranging from faith, to life tips."
    },
    countries: {
        count: 2,
        text: "We are primarily based in Nigeria, however we have operations in process in _ and hopefully many more countries in the future!"
    },
}

interface Stat {
    count: number
    text: string
}

interface StatsInterface {
    data: {
        families: Stat
        posts: Stat
        countries: Stat
    }
}

const Stats: React.FC<StatsInterface> = ({ data=statData }) => {
    const {families, posts, countries } = data
    
    return (
        <Section id='impact' otherClassNames={styles['stats']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large">
                    <TextDecorator underline underlineColor='orange'>Our Impact</TextDecorator>
                    <Icon className={styles['stats__desktop-icon']} name="logo--green" width={70} />
                </Text>
                <div className={styles['stats__content']}>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.darkgreen} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">{families.count}</Text>
                        </Circle>
                        <Text tag="h2" size="header">Families</Text>
                        <Text tag="p">{families.text}</Text>
                    </Stack>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.orange} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">{posts.count}</Text>
                        </Circle>
                        <Text tag="h2" size="header">Blog Posts</Text>
                        <Text>{posts.text}</Text>
                    </Stack>
                    <Stack className={styles['stats__column']}>
                        <Circle color={SETTINGS.green} otherClassNames={styles['stats__circle']}>
                            <Text tag="h2" size="header--large">{countries.count}</Text>
                        </Circle>
                        <Text tag="h2" size="header">Countries</Text>
                        <Text>{countries.text}</Text>
                    </Stack>
                </div>
            </Stack>
        </Section>
    )
}

export default Stats