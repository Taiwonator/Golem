
import React, { useRef, useMemo } from 'react'
import Section from 'src/components/layouts/Section'
import styles from './LandingPage.module.scss'

import Icon from 'src/components/primitives/Icon'
import Text from 'src/components/primitives/Text'
import Button from 'src/components/primitives/Button'
import SETTINGS from 'src/styles/settings'
import Stack from 'src/components/layouts/Stack'
import classNames from 'classnames'

interface LandingPageProps {
  onButtonClick: () => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onButtonClick }) => {
  return (
    <Section id='about-landing' otherClassNames={styles['landing-page']}>
        <div className={styles['landing-page__inner']}>
          <div className={styles['landing-page__image']}>
            <img
              src="/assets/mission-landing-shape.webp"
              alt="Woman cleaning clothes"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
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
            <Button border color={SETTINGS.orange} onClick={onButtonClick}>
              Continue Reading
            </Button>
            <Icon className={styles['landing-page--mobileOnly']} name="bars--s" width={100} />
          </Stack>
        </div>
    </Section>
  )
}

export default LandingPage