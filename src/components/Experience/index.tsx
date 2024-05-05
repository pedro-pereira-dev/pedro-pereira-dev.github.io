import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'
import config from '../../config.json'

const experienceConfig = config.tabs.find(
  (tab) => tab.name.toLowerCase() === 'experience'
)

export default function Experience() {
  return (
    <div id="experience">
      <BlockBox>
        <BlockBoxHeader text="Experience"></BlockBoxHeader>
        {experienceConfig.content.map((experience, index) => (
          <Section
            left={
              <TextBox
                title={experience.name}
                content={experience.details}
              ></TextBox>
            }
            right={
              <TextBox
                title={experience.role}
                content={experience.description}
              ></TextBox>
            }
            key={`experience-${index}`}
          />
        ))}
      </BlockBox>
    </div>
  )
}
