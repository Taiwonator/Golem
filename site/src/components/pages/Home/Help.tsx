import React from 'react'
import Stack from 'src/components/layouts/Stack'
import Text from 'src/components/primitives/Text'
import TextDecorator from 'src/components/primitives/TextDecorator'
import Section from '../../layouts/Section'
import styles from './Help.module.scss'

const Help: React.FC = () => {
    return (
        <Section id='help' otherClassNames={styles['help']}>
            <Stack gap="large">
                <Text tag="h2" size="header--large"><TextDecorator underline underlineColor='green' underlineCenter>How to help</TextDecorator></Text>
                <Text>With hunger and natural disasters becoming more widespread across the world, the need for development and relief aid to accompany the work of evangelism and mission has never been more urgent.  If you are reading this and would like to support us in reaching more needy people with the gospel of love, consider making a donation to GOLEM by on our site, by cheque or direct to our account.</Text>
                <div className={styles['help__cards']}>
                    <div className={styles['help__card']}>
                        <Text tag="h3" size="header--small" bold><TextDecorator underline underlineColor='green' underlineCenter>UK Donations</TextDecorator></Text>
                        <Text>God of Love Emancipation Ministry (GOLEM)</Text>
                        <div className={styles['help__card-details']}>
                            <Text bold>Bank: NATWEST</Text>
                            <Text bold>Account No: 83577238</Text>
                            <Text bold>Sort code: 60-15-31</Text>
                        </div>
                    </div>
                    <div className={styles['help__card']}>
                        <Text tag="h3" size="header--small" bold><TextDecorator underline underlineColor='green' underlineCenter>Nigeria Donations</TextDecorator></Text>
                        <Text>GOLEM Nigeria Outreach</Text>
                        <div className={styles['help__card-details']}>
                            <Text bold>Bank: United Bank of Africa</Text>
                            <Text bold>Account No: 1024194113</Text>
                        </div>
                    </div>
                    <div className={styles['help__card']}>
                        <Text tag="h3" size="header--small" bold><TextDecorator underline underlineColor='green' underlineCenter>PayPal</TextDecorator></Text>
                        <Text>Donate securely via PayPal</Text>
                        <form action="https://www.paypal.com/donate" method="post" target="_top" className={styles['help__paypal-form']}>
                            <input type="hidden" name="hosted_button_id" value="M5VG227XFP8X6" />
                            <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                </div>
            </Stack>
        </Section>
    )
}

export default Help