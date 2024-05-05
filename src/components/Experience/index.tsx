import {
  BlockBox,
  BlockBoxHeader,
  ConfigurationType,
  Section,
  SectionTabType,
} from '../'

import Configuration from '../../config.json'
const config: ConfigurationType = Configuration

const experienceConfig: SectionTabType = config.tabs.find(
  (tab) => tab?.anchor === 'Experience'
)

export default function Experience() {
  return (
    <div id={experienceConfig?.anchor || ''}>
      <BlockBox>
        <BlockBoxHeader text={experienceConfig?.anchor || ''}></BlockBoxHeader>
        {experienceConfig?.content?.map(({ left, right }, index) => (
          <Section left={left} right={right} key={`experience-${index}`} />
        ))}
      </BlockBox>
    </div>
  )
}
