import { useState, type ReactNode } from "react";
import ThemedButton from "./ThemedButton";
import ThemedText from "./ThemedText";
import TechCard from "./TechCard";
import { TbBrandReactNative } from "react-icons/tb";
import SoftSkillCard from "./SoftSkillCard";
import EducationCard from "./EducationCard";
import { GrTechnology } from "react-icons/gr";
import { BiBrain } from "react-icons/bi";

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="flex flex-col items-center h-full">
      <ThemedText type="h2" primary>
        About me
      </ThemedText>
      <div className="flex flex-row justify-center gap-x-6 mt-5">
        <ThemedButton
          className={`min-w-24 ${
            activeSection == 0
              ? "text-text-primary ring-text-primary"
              : "text-text-secondary ring-text-secondary "
          } ring  bg-transparent `}
          onClick={() => {
            setActiveSection(0);
          }}
        >
          Who I Am
        </ThemedButton>
        <ThemedButton
          className={`min-w-24 ${
            activeSection == 1
              ? "text-text-primary ring-text-primary"
              : "text-text-secondary ring-text-secondary "
          } ring  bg-transparent `}
          onClick={() => {
            setActiveSection(1);
          }}
        >
          Skills
        </ThemedButton>
        <ThemedButton
          className={`min-w-24 ${
            activeSection == 2
              ? "text-text-primary ring-text-primary"
              : "text-text-secondary ring-text-secondary "
          } ring  bg-transparent `}
          onClick={() => {
            setActiveSection(2);
          }}
        >
          Education
        </ThemedButton>
      </div>

      {/* div de seccion */}
      <div className="w-full flex-1 ">
        {activeSection == 0 ? (
          <WhoIAm />
        ) : activeSection == 1 ? (
          <Skills />
        ) : (
          <Education />
        )}
      </div>
    </div>
  );
};

export default AboutSection;

// Who I Am Section

const WhoIAm = () => {
  return (
    <div className=" rounded-lg h-full w-full flex flex-col md:flex-row gap-x-8 p-8 gap-y-8 md:px-40">
      <PresentationCard
        icon={<BiBrain className="text-4xl" />}
        title="Psychology Background"
        description="My background in psychology gives me unique insights into user behavior and experience design. I understand how people interact with technology and can create more intuitive interfaces."
      />
      <PresentationCard
        icon={<GrTechnology className="text-4xl" />}
        title="Full-Stack Developer"
        description="I specialize in modern web and mobile development using React, React Native, and TypeScript. I love building scalable applications with clean, maintainable code."
      />
      <PresentationCard
        icon={<TbBrandReactNative className="text-4xl" />}
        title="Continuous Learner"
        description="Technology evolves rapidly, and I'm passionate about staying current. I continuously learn new frameworks, tools, and best practices to deliver cutting-edge solutions."
      />
    </div>
  );
};

interface PresentationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PresentationCard = ({
  description,
  icon,
  title,
}: PresentationCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center space-y-4 ring-1 ring-gray-700 hover:shadow-lg transition-all duration-300">
      <div className="bg-teal-800 p-2 rounded-lg text-accent">{icon}</div>
      <ThemedText type="semibold" primary>
        {title}
      </ThemedText>
      <ThemedText className="text-text-secondary leading-relaxed text-wrap">
        {description}
      </ThemedText>
    </div>
  );
};

// Experience section
const Skills = () => {
  return (
    <div className="ring-1 ring-gray-700 rounded-lg h-full p-8 m-8">
      <div className="h-full">
        <ThemedText type="semibold" className="mb-3">
          Technical Skills
        </ThemedText>
        <div className="flex flex-row flex-wrap justify-between gap-4 ">
          <TechCard
            progress={70}
            icon={
              <img
                src="https://img.icons8.com/color/48/typescript.png"
                alt="typescript"
              />
            }
            text="TypeScript"
          />
          <TechCard
            progress={60}
            icon={
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/plasticine/50/react.png"
                alt="react"
              />
            }
            text="React"
          />
          <TechCard
            progress={70}
            icon={
              <img
                src="https://img.icons8.com/color/48/tailwindcss.png"
                alt="tailwindcss"
              />
            }
            text="Tailwind CSS"
          />
          <TechCard
            progress={60}
            icon={<TbBrandReactNative className="w-10 h-10" />}
            text="React Native"
          />
          <TechCard
            progress={70}
            icon={
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="javascript--v1"
              />
            }
            text="JavaScript"
          />
          <TechCard
            progress={70}
            icon={
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
                alt="java-coffee-cup-logo--v1"
              />
            }
            text="Java"
          />
          <TechCard
            progress={30}
            icon={
              <img
                src="https://img.icons8.com/color/48/c-sharp-logo.png"
                alt="c-sharp-logo"
              />
            }
            text="C#"
          />
          <TechCard
            progress={80}
            icon={
              <img
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5--v1"
              />
            }
            text="HTML"
          />
          <TechCard
            progress={80}
            icon={
              <img src="https://img.icons8.com/color/48/css3.png" alt="css3" />
            }
            text="CSS"
          />
        </div>
        {/* SOFT SKILLS */}
        <ThemedText type="semibold" className="mt-5 mb-3">
          Soft Skills
        </ThemedText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <SoftSkillCard
            title="Problem Solving"
            description="Analytical approach to complex technical challenges"
          />
          <SoftSkillCard
            title="Communication"
            description="Clear technical and non-technical communication"
          />
          <SoftSkillCard
            title="Team Collaboration"
            description="Effective work in cross-functional teams"
          />
          <SoftSkillCard
            title="Adaptability"
            description="Quick learning of new technologies and methodologies"
          />
          <SoftSkillCard
            title="Time Management"
            description="Efficient project delivery within deadlines"
          />
          <SoftSkillCard
            title="Critical Thinking"
            description="Analytical evaluation of solutions and approaches"
          />
        </div>
      </div>
    </div>
  );
};

// Education section
const Education = () => {
  return (
    <div className=" rounded-lg h-full w-full flex flex-col md:flex-row gap-x-8 gap-y-8 p-8 md:px-40">
      <EducationCard
        title="Multiplatform Application Development"
        iconoEstudios={<GrTechnology className="text-accent" />}
        grade="9.2"
        years={"2023 - 2025"}
        location={"El Cuervo de Sevilla"}
        placeOfStudy={"IES Laguna de Tollón"}
        highlightInfo="Full-Stack development with modern technologies and agile methodologies"
        learning={[
          "Java and object-oriented programming",
          "React and modern interface development",
          "React Native for mobile applications",
          "Relational and NoSQL databases",
          "REST APIs and web services",
          "Version control with Git",
          "Agile methodologies (Scrum)",
          "Testing and software quality",
        ]}
      />

      <EducationCard
        title="Master's in General Health Psychology"
        iconoEstudios={<BiBrain className="text-accent" />}
        grade="8.8"
        years={"2020 - 2022"}
        location={"Huelva"}
        placeOfStudy={"University of Huelva"}
        highlightInfo="Specialization in clinical intervention and psychological assessment"
        learning={[
          "Clinical assessment and diagnosis",
          "Psychological intervention techniques",
          "Psychopathology and mental disorders",
          "Professional ethics and deontology",
          "Health psychology",
          "Clinical interview techniques",
          "Intervention program design",
          "Applied clinical research",
        ]}
      />

      <EducationCard
        title="Bachelor's Degree in Psychology"
        iconoEstudios={<BiBrain className="text-accent" />}
        grade="8.5"
        years={"2016-2020"}
        location={"Huelva"}
        placeOfStudy={"University of Huelva"}
        highlightInfo="Understanding human behavior applied to UX/UI design"
        learning={[
          "Cognitive psychology and perception",
          "Research methodology",
          "Statistics and data analysis",
          "Social and occupational psychology",
          "Neuropsychology",
          "Psychological assessment",
          "Experimental design",
          "User behavior analysis",
        ]}
      />
    </div>
  );
};
