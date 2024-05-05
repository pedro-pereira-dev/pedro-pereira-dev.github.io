import Image from 'next/image'

import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'
import config from '../../config.json'

const projectsConfig = config.tabs.find(
  (tab) => tab.name.toLowerCase() === 'projects'
)

export default function Projects() {
  return (
    <div id="projects">
      <BlockBox>
        <BlockBoxHeader text="Projects"></BlockBoxHeader>
        {projectsConfig.content.map((project, index) => (
          <Section
            left={
              <TextBox
                title={project.name}
                content={[
                  <Image
                    key={`${project.name}-${index}-img`}
                    src={project.image}
                    alt={project.image}
                    className="object-cover w-full h-auto lg:pr-10"
                    height={1920}
                    width={1080}
                    unoptimized={true}
                    priority
                  />,
                ]}
              />
            }
            right={
              <TextBox title={project.area} content={project.description} />
            }
            key={`project-${index}`}
          />
        ))}
      </BlockBox>
    </div>
  )
}
