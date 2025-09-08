import React from 'react'
import Section from '../../layouts/Section'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import styles from './AboutUs.module.scss'
import Icon from 'src/components/primitives/Icon'
import Stack from 'src/components/layouts/Stack'
import Text from 'src/components/primitives/Text'
import Button from 'src/components/primitives/Button'
import SETTINGS from 'src/styles/settings'


import Link from 'src/components/primitives/Link'

const AboutUs: React.FC = props => {
    return (
        <Section id='about-us' otherClassNames={styles['about-us']}>
            <Stack gap="large" className={styles['about-us__content']}>
                <div className={styles['about-us__image-2']}>
                    <img
                        src="/assets/side-image-2.webp"
                        alt="Image of a lady"
                        style={{
                            width: '967.06px',
                            height: '468.2px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <Header large><TextDecorator underline underlineColor='orange' underlineCenter>Our values</TextDecorator></Header>
                <Text tag="p">We value love, justice, liberty, inclusivity, transparency, honesty, accountability humility, selfless and exemplary leadership.</Text>
                <Button border color={SETTINGS.green}>
                    <Link to="/about#values">
                        Read More
                    </Link>
                </Button>
                <Icon name="bars--s" width={100} />
                <div className={styles['about-us__image-1']}>
                    <img
                        src="/assets/side-image-1.webp"
                        alt="Image of a lady"
                        style={{
                            width: '963.91px',
                            height: '897.18px',
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </Stack>
        </Section>
    )
}

export default AboutUs