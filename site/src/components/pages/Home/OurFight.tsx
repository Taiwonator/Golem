import classNames from 'classnames'
import React, { MutableRefObject } from 'react'
import Section from '../../layouts/Section'

import Header from 'src/components/primitives/Header'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Button from 'src/components/primitives/Button'
import styles from './OurFight.module.scss'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Stack from 'src/components/layouts/Stack'
import Link from 'src/components/primitives/Link'

const OurFight = React.forwardRef<HTMLDivElement | null>((props, ref) => {

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
                <img
                    src="/assets/cross.png"
                    alt="logo"
                    style={{
                        width: '520.99px',
                        height: '652.82px',
                        objectFit: 'cover'
                    }}
                />
            </div>

        </Section>
    )
})

OurFight.displayName = "OurFight"

export default OurFight