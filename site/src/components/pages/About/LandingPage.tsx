import Image from 'next/image'
import React, { useRef, useMemo } from 'react'
import Section from 'src/components/layouts/Section'
import styles from './LandingPage.module.scss'
import HeroImage from '../../../../public/assets/mission-landing-shape.png'
import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Button from 'src/components/primitives/Button'
import SETTINGS from 'src/styles/settings'
import Stack from 'src/components/layouts/Stack'
import classNames from 'classnames'

const LandingPage: React.FC = () => {
  return (
    <Section id='about-landing' otherClassNames={styles['landing-page']}>
        <div className={styles['landing-page__inner']}>
          <div className={styles['landing-page__image']}>
            <Image 
              src={HeroImage}
              alt="Woman cleaning clothes"
              width={1640}
              height={1307}
              loading="eager"
            />
          </div>
          <Stack className={styles['landing-page__content']} gap="medium">
            <Icon className={classNames(styles['landing-page--tabletOnly'], styles['landing-page__icon--tablet'])} name="bars--ne" width={100} />
            <Text tag="h1" size="header--large" uppercase>
              <span>So...</span>{' '}
              <span>Who Are We?</span>
            </Text>
            <Button border color={SETTINGS.orange}>Continue Reading</Button>
            <Icon className={styles['landing-page--mobileOnly']} name="bars--s" width={100} />
          </Stack>
        </div>
    </Section>
  )
}

export default LandingPage