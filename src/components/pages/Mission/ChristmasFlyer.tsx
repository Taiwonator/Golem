import React, { useState, useEffect } from 'react'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Stack from 'src/components/layouts/Stack'
import styles from './ChristmasFlyer.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SETTINGS from 'src/styles/settings'

const ChristmasFlyer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal()
            }
        }

        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isModalOpen])

    return (
        <>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <div className={styles['christmas-flyer']}>
                    <Stack gap="large">
                        <Text tag="h2" size="header--large" className={styles['christmas-flyer__title']}>
                            <TextDecorator underline underlineColor='orange' underlineCenter>
                                🎄 Christmas Love Gift Outreach 2025 🎄
                            </TextDecorator>
                        </Text>
                        <Text size="header--small" className={styles['christmas-flyer__subtitle']}>
                            <TextDecorator color={SETTINGS.darkgreen} bold>📅 December 20th Programme</TextDecorator>
                        </Text>
                        <button
                            className={styles['christmas-flyer__image-button']}
                            onClick={openModal}
                        >
                            <img
                                src="/assets/christmas_flyer.jpeg"
                                alt="Christmas Love Gift Outreach 2025 - December 20th Programme"
                                className={styles['christmas-flyer__image']}
                            />
                        </button>
                    </Stack>
                </div>
            </AnimationOnScroll>

            {isModalOpen && (
                <div className={styles['modal']} onClick={closeModal}>
                    <div className={styles['modal__content']} onClick={(e) => e.stopPropagation()}>
                        <button className={styles['modal__close']} onClick={closeModal}>
                            ×
                        </button>
                        <div className={styles['modal__image']}>
                            <img
                                src="/assets/christmas_flyer.jpeg"
                                alt="Christmas Love Gift Outreach 2025 - December 20th Programme"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ChristmasFlyer

