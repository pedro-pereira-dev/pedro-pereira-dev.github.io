import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'

export default function Education() {
  return (
    <div id="education">
      <BlockBox>
        <BlockBoxHeader text="Education"></BlockBoxHeader>
        <Section
          left={
            <TextBox
              title="Faculty of Engineering of the University of Porto, Porto"
              content={['September 2013 - July 2018']}
            ></TextBox>
          }
          right={
            <TextBox
              title="Integrated Master’s (BsC + MsC) - Informatics and Computing Engineering (Specialization: Parallel Computing)"
              content={[
                'This course allowed me to study multiple fields of computer engineering such as computer architecture, web and mobile development, networks and security, project management, software engineering and artificial intelligence.',
                "My Master's thesis is titled Heterogeneous Computing Approach for High performance Video Resampling and Resizing. The goal of the developed project was to optimize the resampling phase of video post-production operations using NVidia's graphic processing units. The result of this thesis sped up the operation in 48% to 57% in comparison to the most popular free to use tool used to the same effect: FFmpeg.",
              ]}
            ></TextBox>
          }
        ></Section>
      </BlockBox>
    </div>
  )
}
