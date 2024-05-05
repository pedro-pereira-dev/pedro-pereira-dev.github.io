import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'

export default function Experience() {
  return (
    <div id="experience">
      <BlockBox>
        <BlockBoxHeader text="Experience"></BlockBoxHeader>
        <Section
          left={
            <TextBox
              title="OLR, Porto"
              content={['July 2019 - Present']}
            ></TextBox>
          }
          right={
            <TextBox
              title="Full Time - Lead Software Developer"
              content={[
                'I am leading an Ecommerce team and providing technical consulting to major international brands.',
                'My responsibilities are managing team members, designing technical solutions, provide technical support and develop in the whole scope of the programming stack - from low level environment scripting to front-end development.',
              ]}
            ></TextBox>
          }
        ></Section>
        <Section
          left={
            <TextBox
              title="MOG Technologies, Maia"
              content={['October 2017 - July 2019']}
            ></TextBox>
          }
          right={
            <TextBox
              title="Full Time - Software Developer"
              content={[
                'When I started working at MOG Technologies I had been part of several different projects from low level software development, to web development, and data science.',
                'The first project I was involved with was a low level software development project which allowed me to work with parallel computing and its goal was to implement performance optimization techniques to multiple video manipulation operations.',
                'I was also responsible for the development of a front-end application that linked to a service created by a team of developers to allow them to easily test their work and to have a fully operational demonstrational project.',
              ]}
            ></TextBox>
          }
        ></Section>
        <Section
          left={
            <TextBox
              title="CGI Porto., Porto"
              content={['February 2017 - June 2017']}
            ></TextBox>
          }
          right={
            <TextBox
              title="Project Member - DevOps and Full Stack Web Developer"
              content={[
                'This six person project consisted in a web management tool and a back-office implemented as a Service-Oriented Architecture (SOA). The tool compiles information from multiple sensors and other different entities to find correlation between data and find useful patterns to the final users in order to ease off their work.',
                'The sensors data is fetched and processed by multiple docker containers that make up individual modules of the system. After processing the information, it is provided through an API to a front-end application that displays it in a simpler visual format.',
                'The relevant technologies to this project were Python, R, NodeJS, ReactJS and Docker.',
              ]}
            ></TextBox>
          }
        ></Section>
        <Section
          left={
            <TextBox
              title="JScrambler, Porto"
              content={['February 2017 - June 2017']}
            ></TextBox>
          }
          right={
            <TextBox
              title="Project Member - Software Architect"
              content={[
                "The goal of this two person project was to develop a Software Requirements Specification document for a private back-office system resorting to several methods of requirements elicitation in order to obtain all of the system's features and main business logic.",
                'The relevant skills to this project were Unified Modeling Language (UML) and Goal Oriented Requirements Language (GRL).',
              ]}
            ></TextBox>
          }
        ></Section>
      </BlockBox>
    </div>
  )
}
