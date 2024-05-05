import { SectionType } from './Section'

export type DetailsType =
  | {
      name: string
      personalPhoto: string
      personalName: string
      socials: string[]
      birthday: string
      address: string
      emails: string[]
      roles: string[]
      education: string
    }
  | undefined

export type SectionTabType =
  | {
      anchor: string
      content: SectionType[]
    }
  | undefined

export type ConfigurationType =
  | {
      details: DetailsType
      tabs: SectionTabType[]
    }
  | undefined

export { default as BlockBoxHeader } from './BlockBoxHeader'
export { default as BlockBox } from './BlockBox'
export { default as TextBox } from './TextBox'
export { default as Section } from './Section'

export { default as Header } from './Header'
export { default as About } from './About'
export { default as Experience } from './Experience'
export { default as Education } from './Education'
export { default as Footer } from './Footer'
