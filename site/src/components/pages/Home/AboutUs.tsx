import React from 'react'
import Section from '../../layouts/Section'
import Image from 'next/image'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import styles from './AboutUs.module.scss'
import Icon from 'src/components/primitives/Icon'
import Stack from 'src/components/layouts/Stack'
import Text from 'src/components/primitives/Text'

const AboutUs: React.FC = props => {
    return (
        <Section id='about-us' otherClassNames={styles['about-us']}>
            <Stack gap="large" className={styles['about-us__content']}>
                <div className={styles['about-us__image-2']}>
                    <Image 
                        src="/assets/side-image-2.png"
                        width={967.06}
                        height={468.2}
                        alt="Image of a lady"
                    />
                </div>
                <Header large><TextDecorator underline underlineColor='orange' underlineCenter>About Us</TextDecorator></Header>
                <Text tag="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue</Text>
                <Icon name="bars--s" />
                <div className={styles['about-us__image-1']}>
                    <Image 
                        src="/assets/side-image-1.png"
                        width={963.91}
                        height={897.18}
                        alt="Image of a lady"
                    />
                </div>
            </Stack>
        </Section>
    )
}

export default AboutUs