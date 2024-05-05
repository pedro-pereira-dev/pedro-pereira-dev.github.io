import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'
import config from '../../config.json'

const educationConfig = config.tabs.find(
  (tab) => tab.name.toLowerCase() === 'education'
)

export default function Education() {
  return (
    <div id="education">
      <BlockBox>
        <BlockBoxHeader text="Education"></BlockBoxHeader>
        {educationConfig.content?.map((education, index) => (
          <Section
            left={
              <TextBox
                title={education.school}
                content={education.details}
              ></TextBox>
            }
            right={
              <TextBox
                title={education.name}
                content={education.description}
              ></TextBox>
            }
            key={`education-${index}`}
          />
        ))}
      </BlockBox>
    </div>
  )
}
