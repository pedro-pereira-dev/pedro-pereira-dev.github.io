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

import { BlockBox, Section, TextBox } from '../'
import config from '../../config.json'

const aboutConfig = config.tabs.find(
  (tab) => tab.name.toLowerCase() === 'about'
)

export default function About() {
  return (
    <div id="about">
      <BlockBox>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <Image
              src={aboutConfig?.personalPhoto || '#'}
              alt="Personal Photo"
              className="object-cover w-full h-full"
              height={1920}
              width={1080}
              unoptimized={true}
              priority
            />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <Section
              left={
                <TextBox
                  title="Details"
                  content={[
                    <>
                      <div className="flex space-x-2">
                        <FaCaretRight></FaCaretRight>
                        <div>{aboutConfig?.personalName}</div>
                        {Object.keys(aboutConfig?.socials || {}).map(
                          (social) => (
                            <a
                              className="hover:text-black"
                              href={
                                (aboutConfig?.socials || {})[
                                  social as
                                    | keyof { linkedin: string; github: string }
                                ]
                              }
                              target="_blank"
                              key={`social-${social}`}
                            >
                              {social === 'linkedin' && <FaLinkedinIn />}
                              {social === 'github' && <FaGithub />}
                            </a>
                          )
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <FaBirthdayCake></FaBirthdayCake>
                        <div>{aboutConfig?.birthday}</div>
                      </div>
                      <div className="flex space-x-2">
                        <FaMapMarker></FaMapMarker>
                        <div>{aboutConfig?.address}</div>
                      </div>
                    </>,
                    <>
                      {(aboutConfig?.emails || []).map((email, index) => (
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
                      {(aboutConfig?.roles || []).map((role, index) => (
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
                        href={aboutConfig?.education?.link}
                      >
                        {aboutConfig?.education?.name}
                      </a>
                    </div>,
                  ]}
                ></TextBox>
              }
              right={
                <TextBox
                  title="About Me"
                  content={[<>{aboutConfig?.content}</>]}
                ></TextBox>
              }
            ></Section>
          </div>
        </div>
      </BlockBox>
    </div>
  )
}
