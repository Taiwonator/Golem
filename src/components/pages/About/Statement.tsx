import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import SETTINGS from "src/styles/settings";
import styles from './Statement.module.scss'
import Stack from "src/components/layouts/Stack";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Header from "src/components/primitives/Header";

const Statement: React.FC = () => (
  <div className={styles['statement']} id="values">
    <AnimationOnScroll
        animateIn="animate__fadeIn"
        animateOnce
    >
      <Stack gap="large">
        <Text tag="h2" size="header--large">
          <TextDecorator underline underlineColor='orange' underlineCenter>
            At golem, we believe
          </TextDecorator>
        </Text>
        <Text className={styles['statement__large']} size="header--medium">
          …in rendering{' '}
          <TextDecorator color={SETTINGS.darkgreen} underline underlineColor="darkgreen" bold>
            selfless sacrificial services
          </TextDecorator>{' '}
            to mankind through the
            charitable services we provide to our targeted audience. This is in
            keeping with our{' '}
          <TextDecorator color={SETTINGS.green} underline underlineCenter underlineColor="green" bold>
            Christian ethos
          </TextDecorator>{' '}
          and aspiring to pattern our lives
          and conduct after our Lord Jesus Christ.
        </Text>
      </Stack>
    </AnimationOnScroll>
</div>
)

export default Statement