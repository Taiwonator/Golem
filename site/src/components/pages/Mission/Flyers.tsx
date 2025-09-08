import React, { useState, useEffect } from 'react'
import styles from './Flyers.module.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const flyerImages = [
    {
        src: '/assets/flyer-1.jpeg',
        alt: 'Flyer 1'
    },
    // {
    //     src: '/assets/flyer-2.jpeg',
    //     alt: 'Flyer 2'
    // },
    {
        src: '/assets/flyer-3.jpeg',
        alt: 'Flyer 3'
    },
    {
        src: '/assets/flyer-4.jpeg',
        alt: 'Flyer 4'
    },
    {
        src: '/assets/flyer-5.jpeg',
        alt: 'Flyer 5'
    }
]

const Flyers: React.FC = () => {
    const [selectedFlyer, setSelectedFlyer] = useState<{ src: string; alt: string } | null>(null)

    const openModal = (flyer: { src: string; alt: string }) => {
        setSelectedFlyer(flyer)
    }

    const closeModal = () => {
        setSelectedFlyer(null)
    }

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && selectedFlyer) {
                closeModal()
            }
        }

        if (selectedFlyer) {
            document.addEventListener('keydown', handleEscape)
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [selectedFlyer])

    return (
        <>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                <div className={styles['flyers']}>
                    <div className={styles['flyers__grid']}>
                        {flyerImages.map((flyer, index) => (
                            <button
                                key={index}
                                className={styles['flyers__item']}
                                onClick={() => openModal(flyer)}
                            >
                                <img
                                    src={flyer.src}
                                    alt={flyer.alt}
                                    style={{
                                        objectFit: 'cover',
                                        width: '400px',
                                        height: '600px'
                                    }}
                                    loading="lazy"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </AnimationOnScroll>

            {selectedFlyer && (
                <div className={styles['modal']} onClick={closeModal}>
                    <div className={styles['modal__content']} onClick={(e) => e.stopPropagation()}>
                        <button className={styles['modal__close']} onClick={closeModal}>
                            ×
                        </button>
                        <div className={styles['modal__image']}>
                            <img
                                src={selectedFlyer.src}
                                alt={selectedFlyer.alt}
                                style={{
                                    objectFit: 'contain',
                                    width: '800px',
                                    height: '1200px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Flyers
