import TextBox, { TextBoxType } from '../TextBox'

export interface SectionType {
  left?: TextBoxType
  right?: TextBoxType
}

export default function Section({ left, right }: SectionType) {
  return (
    <div className="w-full pt-5 pb-5 grid grid-cols-12 gap-4 border-b border-neutral-400 lg:border-0">
      <div className={`col-span-12 ${right ? 'lg:col-span-4' : ''}`}>
        <TextBox title={left?.title || ''} text={left?.text || []}></TextBox>
      </div>
      {right && (
        <div className="col-span-12 lg:col-span-8">
          <TextBox title={right.title} text={right.text}></TextBox>
        </div>
      )}
    </div>
  )
}
