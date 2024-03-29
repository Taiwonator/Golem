import React from 'react'
import Image from 'next/image'
import styles from './LandingPage.module.scss'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth'
import SETTINGS from 'src/styles/settings'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'
import { AnimationOnScroll } from 'react-animation-on-scroll'

interface LandingPageProps {
    onButtonClick?: () => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onButtonClick }) => {
    const device = useResponsiveWidth()
    const isMobile = device === 'mobile'

    const Decor = TextDecorator

    return (
        <section className={styles['landing-page']}>
            <Stack gap="large" className={styles['landing-page__content']}>
                <Header className={styles['landing-page__mini-header']} tag="h3" uppercase>God of Love Emancipation Ministries</Header>
                { isMobile ?
                    <>
                        <Image src="/assets/golem-heart--mobile.webp" alt="Picture of logo" width={525.51} height={207.41} />
                        <Header tag='h1'>
                            <span><Decor color={SETTINGS.grey}>is</Decor> emancipating</span>
                            <span><Decor color={SETTINGS.orange} underline>vulnerable</Decor> people</span>
                            <span><Decor color={SETTINGS.green} underline>globally</Decor></span>
                        </Header>
                    </> :
                    <>
                        <Header tag='h1'>
                            <p className={styles['landing-page__header__top-line']}>
                                <span className={styles['landing-page__desktop-golem']}>
                                    <Image src="/assets/golem.webp" alt="Picture of logo" width={312.37} height={114.8} loading="eager" />
                                </span>
                                <Decor color={SETTINGS.grey}>is</Decor>
                            </p>
                            <p>emancipating <Decor color={SETTINGS.orange} underline>vulnerable</Decor> people</p>
                            <p><Decor color={SETTINGS.green} underline>globally</Decor></p>
                        </Header>
                    </> 
                }
                <Button color={SETTINGS.orange} border onClick={onButtonClick}>Learn More</Button>
            </Stack>
            <div className={styles['landing-page__desktop-image']} >
                <Image
                    src="/assets/golem-heart.webp"
                    alt="Man on the field"
                    width={560.8}
                    height={711}
                />
            </div>
        </section>
    )
}

export default LandingPage