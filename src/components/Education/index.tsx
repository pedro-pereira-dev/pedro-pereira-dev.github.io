import {
  BlockBox,
  BlockBoxHeader,
  ConfigurationType,
  Section,
  SectionTabType,
} from '../'

import Configuration from '../../config.json'
const config: ConfigurationType = Configuration

const educationConfig: SectionTabType = config.tabs.find(
  (tab) => tab?.anchor === 'Education'
)

export default function Education() {
  return (
    <div id={educationConfig?.anchor || ''}>
      <BlockBox>
        <BlockBoxHeader text={educationConfig?.anchor || ''}></BlockBoxHeader>
        {educationConfig?.content?.map(({ left, right }, index) => (
          <Section left={left} right={right} key={`education-${index}`} />
        ))}
      </BlockBox>
    </div>
  )
}
