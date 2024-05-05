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

export default function About() {
  return (
    <div id="about">
      <BlockBox>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <Image
              src="/photo.jpg"
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
                        <div>Pedro Pereira</div>
                        <a
                          className="hover:text-black"
                          href="https://www.linkedin.com/in/pedro-pereira-965702107"
                          target="_blank"
                        >
                          <FaLinkedinIn></FaLinkedinIn>
                        </a>
                        <a
                          className="hover:text-black"
                          href="https://github.com/PedroJoaoPereira"
                          target="_blank"
                        >
                          <FaGithub></FaGithub>
                        </a>
                      </div>
                      <div className="flex space-x-2">
                        <FaBirthdayCake></FaBirthdayCake>
                        <div>July 20th, 1995</div>
                      </div>
                      <div className="flex space-x-2">
                        <FaMapMarker></FaMapMarker>
                        <div>Lousada - Porto, Portugal</div>
                      </div>
                    </>,
                    <>
                      <div className="flex space-x-2">
                        <FaEnvelope></FaEnvelope>
                        <a
                          className="hover:text-black"
                          href="mailto:pedro.pereira.95@hotmail.com"
                        >
                          pedro.pereira.95@hotmail.com
                        </a>
                      </div>
                      <div className="flex space-x-2">
                        <FaEnvelope></FaEnvelope>
                        <a
                          className="hover:text-black"
                          href="mailto:1995pedropereira@gmail.com"
                        >
                          1995pedropereira@gmail.com
                        </a>
                      </div>
                    </>,
                    <>
                      <div className="flex space-x-2">
                        <FaBriefcase></FaBriefcase>
                        <div>Lead Software Developer - 2018</div>
                      </div>
                      <div className="flex space-x-2">
                        <FaBriefcase></FaBriefcase>
                        <div>Solutions Architect - 2021</div>
                      </div>
                    </>,
                    <div className="flex space-x-2" key="education">
                      <FaUniversity></FaUniversity>
                      <a
                        className="hover:text-black"
                        href="https://sigarra.up.pt/feup/en/cur_geral.cur_view?pv_curso_id=742"
                      >
                        MSc Computer Science
                      </a>{' '}
                      <a
                        className="hover:text-black"
                        href="https://sigarra.up.pt/feup/pt/web_page.inicial"
                      >
                        @FEUP
                      </a>
                    </div>,
                  ]}
                ></TextBox>
              }
              right={
                <TextBox
                  title="About Me"
                  content={[
                    `
                You can call me Pedro and I am a computer scientist. I am
              passionate about technology and from a young age I always wanted
              to pursue a career that allowed me to fully understand computers.
              So, here I am now with a Master's degree and a whole lot of
              eagerness to be part of new projects! Fortunately, I was offered
              excellent opportunities which shows the confidence people around
              me have been trusting me with.`,
                    `I am currently working as a lead
              developer in Ecommerce of a software team and getting some
              experience as a solution architect for multiple projects. Since I
              love to solve complex problems in the most efficient ways, my
              favorite areas to work in the field of computer science
              areparallel computingandmachine learning. This website was created
              to show you my academic and professional achievements, as well as
              what I am looking to accomplish in my future.`,
                  ]}
                ></TextBox>
              }
            ></Section>
          </div>
        </div>
      </BlockBox>
    </div>
  )
}
