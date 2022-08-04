import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import SETTINGS from "src/styles/settings";
import styles from './Statement.module.scss'
import Education from '../../../../public/assets/education.jpg'
import Image from "next/image";
import Stack from "src/components/layouts/Stack";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PageStack from "src/components/primitives/PageStack";

const Statement: React.FC = () => (
  <PageStack className={styles['statement']}>
    <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
    >
      <Text className={styles['statement__large']} size="header--medium">
        At GOLEM, we are{' '}
        <TextDecorator color={SETTINGS.orange} bold>
          passionate
        </TextDecorator>{' '}
        about the need to provide{' '}
        <TextDecorator color={SETTINGS.green} bold>
          education
        </TextDecorator>{' '}
        to the underprivileged and believe that it can 
        play a crucial part in the breaking of vicious circle of 
        poverty that is endemic in many{' '}
        <TextDecorator color={SETTINGS.darkgreen} bold>
          developing world communities
        </TextDecorator>.
      </Text>
    </AnimationOnScroll>

    <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce
    >
    <Stack gap="large" className={styles['statement__content']}>
      {/* <div className={styles['statement__content__image']}>
        <Image
          src={Education}
          alt="education"
          placeholder="blur"
          width={4000}
          height={2670}
          layout="responsive"
        />
      </div> */}
      <Text className={styles['statement']} size="header--small">
        Through giving of an educational life line 
        to one person in a community, the financial security of 
        a family and at best an entire community may be 
        secured.
      </Text>
    </Stack>
  </AnimationOnScroll>
</PageStack>
)

export default Statement