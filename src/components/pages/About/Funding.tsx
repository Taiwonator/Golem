import Stack from 'src/components/layouts/Stack';
import Button from 'src/components/primitives/Button';
import Link from 'src/components/primitives/Link';
import Text from 'src/components/primitives/Text';
import TextDecorator from 'src/components/primitives/TextDecorator';
import Minus from 'src/components/widgets/FAQs/svgs/Minus';
import SETTINGS from 'src/styles/settings';
import { IContainer } from 'src/types/react-types';
import styles from './Funding.module.scss';

const Funding: React.FC = () => {
  return (
    <div className={styles['funding']}>
      <Stack gap="large">
        <Text tag="h2" size="header--large">
          <TextDecorator underline underlineColor='green' underlineCenter>
            Funding
          </TextDecorator>
        </Text>
        <ul>
          <FundingItem>Friends</FundingItem>
          <FundingItem>Supporting Families</FundingItem>
          <FundingItem>Churches</FundingItem>
          <FundingItem>Partners</FundingItem>
          <FundingItem>Corporate bodies and income realised from its trading</FundingItem>
          <FundingItem>Activities</FundingItem>
        </ul>
        <Button color={SETTINGS.orange} border>
          <Link to="https://www.paypal.com/donate/?hosted_button_id=JS8PX3UEZ4W5U" external>
            Donate Now
          </Link>
        </Button>
      </Stack>
    </div>
  )
}

const FundingItem: React.FC<IContainer> = ({ children }) => (
  <li className={styles['funding__item']}>
    <Minus color={SETTINGS.darkgreen}/>
    <Text tag="p" size="header--small" bold>{children}</Text>
  </li>
)

export default Funding