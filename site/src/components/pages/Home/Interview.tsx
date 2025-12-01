import React, { useRef, useEffect } from 'react'
import Section from '../../layouts/Section'
import styles from './Interview.module.scss'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'

const Interview: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const video = videoRef.current
                if (video) {
                    if (entry.isIntersecting) {
                        // Don't autoplay - let user control
                    } else {
                        video.pause()
                    }
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3,
            }
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [])

    return (
        <Section id='interview' otherClassNames={styles['interview']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large" className={styles['interview__title']}>
                    <TextDecorator underline underlineColor='green' underlineCenter>
                        Who you're helping
                    </TextDecorator>
                </Text>
                <Text tag="p" className={styles['interview__description']}>
                    Hear from those who GOLEM are commited to helping.
                </Text>
                <div className={styles['interview__video-container']}>
                    <video
                        ref={videoRef}
                        className={styles['interview__video']}
                        controls
                        preload="metadata"
                        poster="/assets/golem-heart.webp"
                    >
                        <source src="/assets/video/long_interview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Stack>
        </Section>
    )
}

export default Interview

