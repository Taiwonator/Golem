import React from 'react'
import Section from '../Section'
import Image from 'next/image'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import styles from './AboutUs.module.scss'
import Icon from 'src/components/primitives/Icon'

const AboutUs: React.FC = props => {
    return (
        <Section id='about-us' otherClassNames={styles['about-us']}>
            <div className={styles['about-us__content']}>
                <div className={styles['about-us__image-2']}>
                    <Image 
                        src="/assets/side-image-2.png"
                        width={967.06}
                        height={468.2}
                        alt="Image of a lady"
                    />
                </div>
                <Header large><TextDecorator underline underlineColor='orange'>About Us</TextDecorator><Icon name="bars--ne" /></Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id est iaculis, egestas nisl sit amet, convallis ante. Suspendisse eu elit a magna ultricies sodales nec a augue</p>
                <Icon name="bars--s" />
                <div className={styles['about-us__image-1']}>
                    <Image 
                        src="/assets/side-image-1.png"
                        width={963.91}
                        height={897.18}
                        alt="Image of a lady"
                    />
                </div>
            </div>
        </Section>
    )
}

export default AboutUs