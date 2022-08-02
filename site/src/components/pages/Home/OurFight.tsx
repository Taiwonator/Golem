import classNames from 'classnames'
import React from 'react'
import Section from '../../layouts/Section'
import Image from 'next/image'
import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Button from 'src/components/primitives/Button'
import styles from './OurFight.module.scss'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'

const OurFight: React.FC = props => {

    return (
        <Section id='mission' otherClassNames={styles['our-fight']}>

            <Stack gap="large" className={styles['our-fight__content']}>
                <Text tag="h2" size="header--large">
                    <TextDecorator underline underlineColor='orange'>Who We are</TextDecorator>
                    <div className={styles['our-fight__mobile-icon']}>
                        <Icon name="logo" />
                    </div>
                </Text>
                <Text tag="p">GOLEM (God of Love Emancipation Ministries) is a charitable emancipation organisation incorporated in August 2012 to propagate the Christian gospel around the world and demonstrate the love of Christ to the needy and vulnerable in practical ways. Prior to August 2012, GOLEM founded in 1998 by a Christian couple Jonathan Taiwo and Alice Taiwo has been operating informally raising and distributing vital funds to many local and overseas based ministries. Some of these were Oxfam, World Vision, Tear Fund, Euro Vision, Power of Apostolic Church International (PAC) just to mention a few.</Text>
                <Button border>Read More</Button>
            </Stack>
            
            <div className={styles['our-fight__desktop-image']}>
                <Image 
                    src="/assets/cross.png"
                    width={520.99}
                    height={652.82}
                    alt="logo"
                />
            </div>

        </Section>
    )
}

export default OurFight