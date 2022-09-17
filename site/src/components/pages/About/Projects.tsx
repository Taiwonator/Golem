import Image from "next/image"
import Content from "src/components/layouts/Content"
import Stack from "src/components/layouts/Stack"
import Text from "src/components/primitives/Text"
import TextDecorator from "src/components/primitives/TextDecorator"
import Slideshow from "src/components/widgets/Slideshow/Slideshow"
import { makeProjectsConfig } from "src/data/Slideshow"
import SETTINGS from "src/styles/settings"
import styles from './Projects.module.scss' 

interface ProjectsProps {
  projects: any[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
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
            partners abroad. Power of Apostolic Church International (PAC), a faith 
            based organisation based in the rural communities of Western part of Nigeria 
            is our key ministry partner. Whilst most of our current overseas is based 
            in Nigeria in keeping with the adage: ” charity begins at home”, our long 
            term vision is to identify other viable NGO Partners overseas and expand 
            the scope of our operations to other needy developing communities.
          </Text>
          <Text>
            <TextDecorator bold color={SETTINGS.darkgreen}>Here are some ongoing and planned projects:</TextDecorator>
          </Text>
        </Stack>
      </Content>
      <Slideshow config={makeProjectsConfig(projects.map((project, i) => (
        <div className={styles['projects__project']}>
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
          <a href="mailto:info@golemministries.org">
            <TextDecorator color={SETTINGS.green}>
                 info@golemministries.org{' '}
            </TextDecorator>
          </a>
          <p>or write to us.</p>
        </Text>
      </Content>
    </Stack>
  )
}

export default Projects