import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import SETTINGS from "src/styles/settings";
import { Config } from ".";

const slideTexts: string[] = [
  'Pastoral Care for needy individuals and families in the UK and in Nigeria',
  'Friendship Evangelistic Programmes in the UK and Nigeria.',
  'Training of faith leaders, support workers and carers in mental health issues and early intervention.',
  'Fundraising for distribution to partner charities and other good causes.',
  'Food parcel and clothes distribution to the most needy and vulnerable rural dwellers in Nigeria, especially Orphans and Widows.',
  'Child educational sponsorship and educational material project in Nigeria',
  'Vocational and Apprenticeship Training Scheme in Nigeria',
  'Microfinance and sustainable development initiative for rural women',
  'Recruitment and Training of Overseas Volunteers',
  'Pastoral Care for needy individuals and families in the UK and in Nigeria',
  'Nigerian schools motivational speaking engagements and student mentoring'
]

export const projectsConfig: Config = {
  slides: slideTexts.map((text, i) => 
  <Text size="header--small" bold key={i}>
    <span className="text-double--desktop">{text}</span>
  </Text>
  ),
  slideOptions: {
    center: true,
    loop: true,
    hideThumbnails: true,
    sneakPeak: true
  }
}