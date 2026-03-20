import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import SETTINGS from "src/styles/settings";
import { Config } from ".";

const slideTexts: string[] = [
  'Providing friendship evangelism and pastoral care to the needy and vulnerable people we reach out to locally and globally.',
  'Formation of effective support network and strategic alliance with faith based organisations locally and abroad, whose aims and objectives are in agreement with ours.',
  'Influencing local and overseas governments, faith communities and policy makers through lobbying and publication of relevant literatures on spiritual, social and economic empowerment for society’s vulnerable.',
  'Support and organise the mobilisation of individuals and community groups for individual and community affirmative action that enable financial self sufficiency and sustainable development.',
  'Distribution of clothes, food parcels and other basic amenities to most vulnerable rural dwellers, especially orphans and widows who are often the victims of socio-economic injustice and exploitation.',
  'Supporting and organising campaigns for public probity, transparency and accountability.',
  'Preaching and promoting the gospel of love, peace and reconciliation as well as activities that makes for community cohesion and peaceful co-existence amongst diverse religious and ethnic groups.',
  'Training local and overseas religious leaders / community leaders in order to develop their capacity to reach their own community.',
  'Organising trainings, workshops and events to raise physical and mental wellbeing awareness.',
  'Providing donations, grants , skilled volunteers and free consultancies to other charities and good causes wherever and whenever GOLEM cannot be directly involved in these project ventures.',
  'Mobilise Black Africans in Diaspora for selfless volunteering  service for their local community development and becoming positive change agents in their country of origin.',
  'Children educational sponsorship , school visits and youth mentoring in order to cultivate good morals, sense of responsibility and strong leadership.',
]

export const makeMissionsConfig = (goals: string[]): Config => ({
  title: "How we achieve our goals",
  slides: goals.map((text, i) => 
  <Text size="header--medium" bold key={i}>
    <TextDecorator color={SETTINGS.green}>
      {i+1}.
    </TextDecorator>{' '}
    {text}
  </Text>
  ),
  slideOptions: {
    center: true
  }
})