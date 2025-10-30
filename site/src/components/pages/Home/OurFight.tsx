import React, { useState, useRef } from 'react'
import Section from '../../layouts/Section'

import TextDecorator from 'src/components/primitives/TextDecorator'
import Button from 'src/components/primitives/Button'
import styles from './OurFight.module.scss'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'
import Link from 'src/components/primitives/Link'

const OurFight = React.forwardRef<HTMLDivElement | null>((_props, ref) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlayClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <Section id='mission' otherClassNames={styles['our-fight']} ref={ref}>

            <Stack gap="large" className={styles['our-fight__content']}>
                <Text tag="h2" size="header--large">
                    <TextDecorator underline underlineColor='orange'>About</TextDecorator>
                    <Icon className={styles['our-fight__mobile-icon']} name="logo" width={100} />
                </Text>
                <Text tag="p">GOLEM (God of Love Emancipation Ministries) is a charitable emancipation organisation incorporated in August 2012 to propagate the Christian gospel around the world and demonstrate the love of Christ to the needy and vulnerable in practical ways. Prior to August 2012, GOLEM founded in 1998 by a Christian couple Jonathan Taiwo and Alice Taiwo has been operating informally raising and distributing vital funds to many local and overseas based ministries. Some of these were Oxfam, World Vision, Tear Fund, Euro Vision, just to mention a few.</Text>
                <Button border>
                    <Link to="/about">
                        Read More
                    </Link>
                </Button>
            </Stack>

            <div className={styles['our-fight__desktop-image']}>
                <div className={styles['our-fight__video-wrapper']} onClick={handlePlayClick}>
                    <video
                        ref={videoRef}
                        className={styles['our-fight__video']}
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="/assets/video/WhatsApp Video 2025-10-10 at 01.10.41.mp4" type="video/mp4" />
                    </video>
                    <button
                        className={styles['our-fight__play-button']}
                        onClick={handlePlayClick}
                        aria-label="Play video"
                    >
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="30" cy="30" r="30" fill="rgba(255, 255, 255, 0.9)" />
                            <path d="M23 18L42 30L23 42V18Z" fill="#333" />
                        </svg>
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles['our-fight__modal']} onClick={handleCloseModal}>
                    <div className={styles['our-fight__modal-content']} onClick={(e) => e.stopPropagation()}>
                        <button
                            className={styles['our-fight__close-button']}
                            onClick={handleCloseModal}
                            aria-label="Close video"
                        >
                            ×
                        </button>
                        <video
                            controls
                            autoPlay
                            className={styles['our-fight__modal-video']}
                        >
                            <source src="/assets/video/WhatsApp Video 2025-10-10 at 01.10.41.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}

        </Section>
    )
})

OurFight.displayName = "OurFight"

export default OurFight