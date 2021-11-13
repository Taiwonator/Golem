import React from 'react'
import Image from 'next/image'
import styles from './LandingPage.module.scss'
import Button from 'src/components/primitives/Button'
import Header from 'src/components/primitives/Header'
import { useResponsiveWidth } from 'src/hooks/useResponsiveWidth'
import SETTINGS from 'src/styles/settings'
import TextDecorator from 'src/components/primitives/TextDecorator'

const LandingPage: React.FC = props => {
    const device = useResponsiveWidth()
    const isMobile = device === 'mobile'

    const Decor = TextDecorator

    return (
        <div className={styles['landing-page']}>
            <div className={styles['landing-page__content']}>
                <Header tag="h3" uppercase>God of Love Emancipation Ministries</Header>
                { isMobile ?
                    <>
                        <Image src="/assets/golem--mobile.png" alt="Picture of logo" width={525.51} height={207.41} />
                        <Header>
                            <p><Decor color={SETTINGS.grey}>Is</Decor> emancipating</p>
                            <p><Decor color={SETTINGS.orange} underline>vulnerable</Decor> people</p>
                            <p><Decor color={SETTINGS.green} underline>globally</Decor></p>
                        </Header>
                    </> :
                    <>
                        <Header>
                            <p>
                                <div className={styles['landing-page__desktop-golem']}>
                                    <Image src="/assets/golem.png" alt="Picture of logo" width={312.37} height={114.8} />
                                </div>
                                <Decor color={SETTINGS.grey}>Is</Decor> emancipating
                            </p>
                            <p><Decor color={SETTINGS.orange} underline>vulnerable</Decor> people</p>
                            <p><Decor color={SETTINGS.green} underline>globally</Decor></p>
                        </Header>
                    </> 
                }
                <Button color={SETTINGS.orange} border>Learn More</Button>
            </div>
            <div className={styles['landing-page__desktop-image']} >
                <Image
                    src="/assets/landing-image.png"
                    alt="Picture of a young boy"
                    width={560.8}
                    height={711}
                />
            </div>
        </div>
    )
}

export default LandingPage