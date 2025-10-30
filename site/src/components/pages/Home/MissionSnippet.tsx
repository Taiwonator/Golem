import React from 'react'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Button from 'src/components/primitives/Button'
import Stack from 'src/components/layouts/Stack'
import Link from 'src/components/primitives/Link'
import styles from './MissionSnippet.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SETTINGS from 'src/styles/settings'
import Section from 'src/components/layouts/Section'

const MissionSnippet: React.FC = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
            <Section id='mission-snippet' otherClassNames={styles['mission-snippet']}>
                <Stack gap="large">
                    <Text tag="h2" size="header--large" className={styles['mission-snippet__title']}>
                        <TextDecorator underline underlineColor='green' underlineCenter>
                            ✨ Mission 2025 Completed! ✨
                        </TextDecorator>
                    </Text>

                    <Text size="header--small" className={styles['mission-snippet__description']}>
                        Our mission programmes have successfully brought the gospel and love of Christ to communities through{' '}
                        <TextDecorator color={SETTINGS.orange} bold>Evangelism</TextDecorator>,{' '}
                        <TextDecorator color={SETTINGS.green} bold>Drama & Songs</TextDecorator>, and{' '}
                        <TextDecorator color={SETTINGS.darkgreen} bold>Community Empowerment</TextDecorator>.
                    </Text>

                    <div className={styles['mission-snippet__highlights']}>
                        <div className={styles['mission-snippet__highlight']}>
                            <Text size="standard--medium" bold>
                                <TextDecorator color={SETTINGS.darkgreen}>✅ 3 Chapters</TextDecorator>
                            </Text>
                            <Text size="standard--small">Ilaro • Owode • Lagos</Text>
                        </div>

                        <div className={styles['mission-snippet__highlight']}>
                            <Text size="standard--medium" bold>
                                <TextDecorator color={SETTINGS.orange}>✅ September 2025</TextDecorator>
                            </Text>
                            <Text size="standard--small">Successfully completed</Text>
                        </div>

                        <div className={styles['mission-snippet__highlight']}>
                            <Text size="standard--medium" bold>
                                <TextDecorator color={SETTINGS.green}>💚 Impact Made</TextDecorator>
                            </Text>
                            <Text size="standard--small">Widows & Children Blessed</Text>
                        </div>
                    </div>

                    <div className={styles['mission-snippet__cta']}>
                        <Button border color={SETTINGS.green} otherClassNames={styles['mission-snippet__button']}>
                            <Link to="/mission#field-reports">
                                View Field Reports
                            </Link>
                        </Button>
                        <Text size="standard--small" className={styles['mission-snippet__subtitle']}>
                            See photos, stories & testimonies from the mission
                        </Text>
                    </div>
                </Stack>
            </Section>
        </AnimationOnScroll>
    )
}

export default MissionSnippet
