import Image from 'next/image'
import {
  FaCaretRight,
  FaBirthdayCake,
  FaMapMarker,
  FaEnvelope,
  FaBriefcase,
  FaUniversity,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'

import { BlockBox, ConfigurationType, Section, SectionTabType } from '../'

import Configuration from '../../config.json'
const config: ConfigurationType = Configuration

const aboutConfig: SectionTabType = config.tabs.find(
  (tab) => tab?.anchor === 'About'
)

export default function About() {
  return (
    <div id={aboutConfig?.anchor || ''}>
      <BlockBox>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <Image
              src={config?.details?.personalPhoto || '#'}
              alt="Personal Photo"
              className="object-cover w-full h-full"
              height={1920}
              width={1080}
              unoptimized={true}
              priority
            />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="w-full pt-5 pb-5 grid grid-cols-12 gap-4 border-b border-neutral-400 lg:border-0">
              <div className="col-span-12 lg:col-span-4">
                <div className="w-full h-full">
                  <div className="mb-2 text-black text-lg">Details</div>
                  {[
                    <>
                      <div className="flex space-x-2">
                        <FaCaretRight></FaCaretRight>
                        <div>{config?.details?.personalName}</div>
                        {config?.details?.socials
                          .map((social) => social.split('||'))
                          .map(([socialIcon, socialURL]) => (
                            <a
                              className="hover:text-black"
                              href={socialURL}
                              target="_blank"
                              key={`social-${socialIcon}`}
                            >
                              {socialIcon === 'linkedin' && <FaLinkedinIn />}
                              {socialIcon === 'github' && <FaGithub />}
                            </a>
                          ))}
                      </div>
                      <div className="flex space-x-2">
                        <FaBirthdayCake></FaBirthdayCake>
                        <div>{config?.details?.birthday}</div>
                      </div>
                      <div className="flex space-x-2">
                        <FaMapMarker></FaMapMarker>
                        <div>{config?.details?.address}</div>
                      </div>
                    </>,
                    <>
                      {(config?.details?.emails || []).map((email, index) => (
                        <div className="flex space-x-2" key={`email-${index}`}>
                          <FaEnvelope></FaEnvelope>
                          <a
                            className="hover:text-black"
                            href={`mailto:${email}`}
                          >
                            {email}
                          </a>
                        </div>
                      ))}
                    </>,
                    <>
                      {(config?.details?.roles || []).map((role, index) => (
                        <div className="flex space-x-2" key={`role-${index}`}>
                          <FaBriefcase></FaBriefcase>
                          <div>{role}</div>
                        </div>
                      ))}
                    </>,
                    <div className="flex space-x-2" key="education">
                      <FaUniversity></FaUniversity>
                      <a
                        className="hover:text-black"
                        href={config?.details?.education.split('||')[1]}
                      >
                        {config?.details?.education.split('||')[0]}
                      </a>
                    </div>,
                  ].map((_text, key) => (
                    <div key={key} className="text-sm mb-2">
                      {_text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <Section left={aboutConfig?.content[0].left}></Section>
              </div>
            </div>
          </div>
        </div>
      </BlockBox>
    </div>
  )
}
