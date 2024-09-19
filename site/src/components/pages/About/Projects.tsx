import Image from "next/image"
import Content from "src/components/layouts/Content"
import Stack from "src/components/layouts/Stack"
import Text from "src/components/primitives/Text"
import TextDecorator from "src/components/primitives/TextDecorator"
import Slideshow from "src/components/widgets/Slideshow/Slideshow"
import { makeProjectsConfig } from "src/data/Slideshow"
import SETTINGS from "src/styles/settings"
import styles from './Projects.module.scss' 
import { useSWRConfig } from 'src/lib/payload-fetcher'
import useSWR from 'swr'

const Projects: React.FC = () => {
  const { key, fetcher } = useSWRConfig(`projects?limit=100`)
  const { data, error } = useSWR(key, fetcher)

  const projects = data ? data.docs : []

  return (
    <Stack gap="huge" className={styles['projects']}>
      <Content width="small">
        <Stack gap="large">
          <Text tag="h2" size="header--large">
              <TextDecorator underline underlineColor='orange' underlineCenter>
                Our Projects
              </TextDecorator>
            </Text>
          <Text>
            Our projects are delivered locally and Overseas in collaboration with our 
            partners abroad. The Churches, Ministries and Schools GOLEM currently partners 
            with in Nigeria includes Christ Apostolic Church, Owode, Ogun State; Pure 
            Religion Ministries, Lagos State; Great Grace Mission, Ilaro, Ogun State; 
            Catch them Young Children Ministry, Ilaro, Ogun State; New Life Gospel 
            Church, Ilaro, Ogun State; Qs DaySTAR School, Lagos State; Vicona Private 
            School, Ogun State; MBA School, Ijegun Lagos State and Sammy K School 
            Lagos State. Our long term vision is to identify other viable NGO Partners 
            overseas and expand the scope of our operations to other needy developing communities.
          </Text>
          <Text>
            <TextDecorator bold color={SETTINGS.darkgreen}>Here are some ongoing and planned projects:</TextDecorator>
          </Text>
        </Stack>
      </Content>
      <Slideshow config={makeProjectsConfig(projects.map((project, i) => (
        <div key={`project_${i}`} className={styles['projects__project']}>
          <Text tag="div" size="header--small" key={i}>
            <Stack>
              <TextDecorator color={SETTINGS.orange}>
                <Text bold tag="p">{i+1}.</Text>
              </TextDecorator>{' '}
              {project.image && (
                <div className={styles['projects__project__image']}>
                  <Image src={project.image.url} alt={project.image.filename} layout="fill" objectFit="cover" />
                </div>
              )}
              <Text size="header--small" bold tag="p" className="text-double--desktop">
                <span className="text-double--desktop">{project.text}</span>
              </Text>
            </Stack>
          </Text>
        </div>
      )))} />
      <Content width="small">
        <Text className={styles['projects__email']} bold>
          <p>For more information about any of these projects or how to get involved please email</p>{' '}
          <a href="mailto:jonathan.golemministries@gmail.com">
            <TextDecorator color={SETTINGS.green}>
              jonathan.golemministries@gmail.com{' '}
            </TextDecorator>
          </a>
          <p>or write to us.</p>
        </Text>
      </Content>
    </Stack>
  )
}

export default Projects