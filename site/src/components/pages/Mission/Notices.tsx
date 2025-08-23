import React from 'react'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Stack from 'src/components/layouts/Stack'
import styles from './Notices.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SETTINGS from 'src/styles/settings'

const Notices: React.FC = () => {
    return (
        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
            <div className={styles['notices']}>
                <Stack gap="large">
                    <Text tag="h2" size="header--large" className={styles['notices__title']}>
                        <TextDecorator underline underlineColor='orange' underlineCenter>
                            ✨MISSION PROGRAMMES 2025✨
                        </TextDecorator>
                    </Text>
                    
                    <Text size="header--small" className={styles['notices__description']}>
                        Join us as we take the gospel and love of Christ to the nations through{' '}
                        <TextDecorator color={SETTINGS.green} bold>Evangelism</TextDecorator>,{' '}
                        <TextDecorator color={SETTINGS.orange} bold>Drama & Songs Ministration</TextDecorator>,{' '}
                        <TextDecorator color={SETTINGS.darkgreen} bold>Widows Empowerment</TextDecorator>, and{' '}
                        <TextDecorator color={SETTINGS.green} bold>Educational Support for Children in Need</TextDecorator>.
                    </Text>

                    <div className={styles['notices__events']}>
                        <div className={styles['notices__event']}>
                            <Text size="header--medium" bold className={styles['notices__event-title']}>
                                <TextDecorator color={SETTINGS.darkgreen}>📍 Ilaro Chapter</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.orange} bold>📅 Sunday, 14th September 2025</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.green} bold>🕑 2pm prompt</TextDecorator>
                            </Text>
                        </div>

                        <div className={styles['notices__event']}>
                            <Text size="header--medium" bold className={styles['notices__event-title']}>
                                <TextDecorator color={SETTINGS.darkgreen}>📍 Owode Chapter</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.orange} bold>📅 Thursday – Saturday, 18th – 20th September 2025</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.green} bold>🕙 10am prompt</TextDecorator>
                            </Text>
                        </div>

                        <div className={styles['notices__event']}>
                            <Text size="header--medium" bold className={styles['notices__event-title']}>
                                <TextDecorator color={SETTINGS.darkgreen}>📍 Lagos Chapter</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.orange} bold>📅 Thursday – Saturday, 25th – 27th September 2025</TextDecorator>
                            </Text>
                            <Text size="standard--medium">
                                <TextDecorator color={SETTINGS.green} bold>🕙 10am prompt</TextDecorator>
                            </Text>
                        </div>
                    </div>
                </Stack>
            </div>
        </AnimationOnScroll>
    )
}

export default Notices
