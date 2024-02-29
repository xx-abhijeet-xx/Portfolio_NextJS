"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Front-End Development:</strong>
          <ul>
            <li>Languages: HTML5, CSS3, JavaScript</li>
            <li>Libraries: Bootstrap, Tailwind CSS</li>
            <li>Frameworks: React.js/ Next.js</li>
            <li>Responsive Design: Ensuring cross-device compatibility</li>
          </ul>
        </li>
        <li>
          <strong>Back-End Development:</strong>
          <ul>
            <li>Languages: Node.js</li>
            <li>Frameworks: Express.js</li>
            <li>Database: MongoDB</li>
            <li>API Development: RESTful</li>
          </ul>
        </li>
        <li>
          <strong>Other:</strong>
          <ul>
            <li>| Github | Figma | Video Editing | ChatGPT/ BARD/ AI |</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Technology (B. Tech.) - Computer Science [AI&ML]</li>
        <br></br>From: Lakshmi Narain College of Technology & Science, Bhopal
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> FRONT-END Development (Sheryians Coding School)</li>
        <li>BACK-END Development (Sheryians Coding School) </li>
        <li>React/Next Developer (Sheryians Coding School)</li>
       
        
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a versatile Full Stack Web Developer proficient in Node.js,
            Express.js, React.js, Next.js, MongoDB, and Python. My expertise
            extends to frontend frameworks like Bootstrap and Tailwind, ensuring
            sleek and responsive designs. Leveraging tools like GitHub and
            Figma, I excel in collaborative coding and design. <br></br> Beyond
            technical skills, I possess a keen eye for design and proficiency in
            video editing. With a deep understanding of AI technologies,
            including ChatGPT and BARD, I integrate cutting-edge solutions into
            projects. My experience in project management, coupled with
            effective communication and leadership, ensures timely delivery and
            seamless collaboration within teams.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
