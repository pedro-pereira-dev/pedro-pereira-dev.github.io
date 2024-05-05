import Image from 'next/image'

import { BlockBox, BlockBoxHeader, Section, TextBox } from '../'

export default function Projects() {
  return (
    <div id="projects">
      <BlockBox>
        <BlockBoxHeader text="Projects"></BlockBoxHeader>
        <Section
          left={
            <TextBox
              title="Aerial Scene Recognition"
              content={[
                <Image
                  key="aerial-img"
                  src="/aerial.png"
                  alt="Aerial"
                  className="object-cover w-full h-auto lg:pr-10"
                  height={1920}
                  width={1080}
                  unoptimized={true}
                  priority
                />,
              ]}
            ></TextBox>
          }
          right={
            <TextBox
              title="Machine Learning"
              content={[
                'The main goal of this project was to develop a system that can recognize types of buildings, structures or natural areas in images taken from an aerial perspective. Some approaches used to create such a system included: a feature detector and descriptor resorting to SIFT, color histograms, and other complementary techniques; a dictionary-based representation of features such as a bag of visual words; and a convolutional neural network as a classifier of the scenes.',
                'Used technologies: Python, C++, OpenCV and TensorFlow.',
              ]}
            ></TextBox>
          }
        ></Section>
        <Section
          left={
            <TextBox
              title="Taxi Dispatch Central Simulator"
              content={[
                <Image
                  key="taxis-img"
                  src="/taxis.png"
                  alt="Taxis Dispatcher"
                  className="object-cover w-full h-auto lg:pr-10"
                  height={1920}
                  width={1080}
                  unoptimized={true}
                  priority
                />,
              ]}
            ></TextBox>
          }
          right={
            <TextBox
              title="Multi-Agent System (Artificial Intelligence)"
              content={[
                'The goal of this project was to create a real world simulation of taxis, passengers and a dispatch central. Each of the entities were implemented as an intelligent agent with their own set of rules, goals and behaviours. These entities interacted autonomously with each other in order to reduce their own respective travelling costs. A dispatch central agent (red square in the figure) was created to coordinate the taxi services with the passengers requests. In this simulation, the passengers (blue circles in the figure) spawn in some random location of the map and instantly send a taxi service request to the dispatch central. The latter calculates the cheapest travelling cost for both taxis and passengers. The taxi (yellow circles in the figure) reduces its travelling costs by servicing multiple passengers at the same time from the queue of requests, but only if the new service does not imply a worse travelling itinerary for the currrent passenger.',
                'Used technologies: JADE, Repast + SAJaS, Java and Swing.',
              ]}
            ></TextBox>
          }
        ></Section>
        <Section
          left={
            <TextBox
              title="Loan Approval Tool"
              content={[
                <Image
                  key="banking-img"
                  src="/banking.png"
                  alt="Banking Loan Approval Tool"
                  className="object-cover w-full h-auto lg:pr-10"
                  height={1920}
                  width={1080}
                  unoptimized={true}
                  priority
                />,
              ]}
            ></TextBox>
          }
          right={
            <TextBox
              title="Data Mining / Machine Learning"
              content={[
                "This project's objective was to learn more about data mining and machine learning applied to decision making software. This tool was developed to help bank systems decide if a client has the right conditions to be approved for a loan resorting to the latter's finance history. The developed tool uses the information (such as demographic details, past transactions, account types, etc) of old clients to predict if new loan requestors have an high probability to completely repay the loan.",
                'Used technologies: R, Rapidminer, Bash and statistics (not a technology but the field of study).',
                '(The image does not illustrate the Rapidminer process of this project)',
              ]}
            ></TextBox>
          }
        ></Section>
      </BlockBox>
    </div>
  )
}
