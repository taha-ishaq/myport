"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN STACK APPLICATION</li>
        <li>BACKEND DEVELOPER</li>
        <li>FIREBASE</li>
        <li>VERCEL</li>
        <li>CI/CD GITHUB</li>
        <li>Performance Optimization: Memory Management, Efficient Rendering</li>
        <li>SECURE APKS</li>
        <li>Version Control: Git, GitHub</li>
        <li>
          MATERIAL UI 
        </li>
        <li>
          GRAPHQL 
        </li>
        <li>
          MongoDB 
        </li>
        <li>
          NEXT.JS 
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Software Engineering from NFC-IET Multan</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
       <li>Full Stack Development Certified from PNY tranings</li>
       <Link href="/cert1.jpg" className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"> <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Full Stack Certificate
              </span> </Link>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>MERN Stack Developer At Exycan (2024 january - Present)</li>
        <p>Managing the Working Flow of Architechure and Design, Development in MERN stack Along with Django-Rest-API and Django-Graphene</p>

        <li>BackEnd Developer At Leads Software Solution(2023-2024)</li>
        <p>Developed Secure APIs, Worked With Complex Database (MongoDB)Queries, Developed Effiecient Scalable Web APIs with Best Structures following clean Architectures of Repository and Controllers,Provided Excellent Results and Finished the task at hand</p>
        
        <li>Freelancing Fiver And UPwork (2022-present)</li>
        <p>Working With Clients from all over the world, Providing best communication and working enviroment, Worked With many clients and always did the work better than what was expected in clean friendly ways</p>
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
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a Skilled MERN stack developer based in Multan with a robust background in full-stack web and mobile application development. I specialize in building scalable, secure, and high-performance applications with modern technologies like **MongoDB**, **Express**, **React**, and **Node.js**. Proficient in backend development, API integration, and **Firebase** for real-time databases and cloud functions, I excel in deploying applications efficiently on platforms like **Vercel**. 

Experienced in **CI/CD workflows** using GitHub, I ensure seamless version control and deployment processes. I focus on **performance optimization**, emphasizing memory management and efficient rendering. With expertise in **GraphQL**, **Material UI**, and secure app development practices, I prioritize cybersecurity in backend systems, including delivering secure APKs. My workflow incorporates agile methodologies and tools like **Git**, enabling robust collaboration and continuous improvement in projects.
          </p>
          <div className="flex overflow-x-auto mt-8 space-x-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certificates
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              Experience
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
