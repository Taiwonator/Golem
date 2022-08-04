import Text from "src/components/primitives/Text";
import TextDecorator from "src/components/primitives/TextDecorator";
import Slideshow from "src/components/widgets/Slideshow/Slideshow";
import SETTINGS from "src/styles/settings";
import { Config } from ".";

const slideTexts: React.ReactNode[] = [
  <>
    <Text tag="p" bold size="standard--medium">
      <span className="text-larger--desktop">
        GOLEM, which now have many working partners locally and overseas was founded in 1998 
        by a Christian couple, Jonathan Taiwo and Alice Taiwo, UK Citizens.
      </span>
    </Text>
    <Text tag="p" size="standard--small">
      <span className="text-larger--desktop">
        Jonathan who is 
        currently the Director of Programmes is a Development Economist and Registered Mental 
        Health Practitioner. Jonathan is also a trained Minister of Christian Religion and 
        Pastoral Carer.  Alice is an Auditor and Financial  Accountant.
      </span>
    </Text>
  </>,
  <>
    <Text tag="p" size="standard--small">
      <span className="text-larger--desktop">
        Since commencement of operations in 1998, GOLEM has been providing locally based Pastoral 
        care to vulnerable and needy people within the community whilst supporting and raising 
        funds for other registered charitable organisations such as OXFAM, WORLD VISION, TEAR FUND, 
        EURO VISION, PAC INTERNATIONAL involved in Overseas poverty relief work in Africa and 
        around the world.
      </span>
    </Text>
  </>,
  <>
    <Text tag="p" size="standard--small">
      <span className="text-larger--desktop">
        FUND for the  GOLEM hardship Fund set up in 1998 and distributed to 
        other qualifying charities and ministry partners was secured when Jonathan and Alice 
        (Founders) decided to set aside a fixed proportion of their monthly income aside to 
        finance deserving charitable ventures across the globe. Their main focus and priority 
        was the propagation of the gospel of love of Jesus Christ balanced by a practical 
        demonstration of this love to the people it seeks to reach. To this end, needy 
        families in Africa and elsewhere in the world; especially orphans, widows and 
        children education was supported.
      </span>
    </Text>
  </>,
  <>
    <Text tag="p" size="standard--small">
      <span className="text-larger--desktop">
        14 years after the commencement of its operations, GOLEM scope of operations 
        and demands for direct involvement and funding has increased beyond what the 
        pre 2012 structure could accommodate. In order to rise to the challenge of 
        making available vital funds for needy charities and overseas poverty relief 
        works it carries out, it was considered a viable way forward to source funds 
        from other avenues including commercial enterprise.
      </span>
    </Text>
  </>,
  <>
    <Text tag="p" size="standard--small">
      <span className="text-larger--desktop">
        This requires the setting 
        up of a charitable company limited by guarantee, hence the incorporation of 
        GOLEM (God of Love Emancipation Ministries) in August 2012.  It is expected 
        that GOLEM will be able to generate funding for its charitable activities 
        through funds raised from friends, families around the world, churches, 
        corporate bodies and income realised from its trading activities. The trading 
        activities include mainly but not exclusive, income generated from consultancy 
        works, training of clients and sales of publications.
      </span>
    </Text>
</>
]

export const aboutConfig: Config = {
  title: "Who are we?",
  slides: slideTexts.map((text, i) => 
  <Text key={i}>
    {text}
    <p>
      <TextDecorator bold color={SETTINGS.darkgreen}>
        ({i+1} / {slideTexts.length}).
      </TextDecorator>{' '}
    </p>
  </Text>
  ),
  slideOptions: {
    center: true,
    sneakPeak: true
  }
}