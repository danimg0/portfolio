import { useState, type JSX, type ReactNode } from "react";
import ThemedButton from "./ThemedButton";
import ThemedText from "./ThemedText";
import TechCard from "./TechCard";
import { TbBrandReactNative } from "react-icons/tb";
import SoftSkillCard from "./SoftSkillCard";
import EducationCard from "./EducationCard";
import { GrTechnology } from "react-icons/gr";
import { BiBrain } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

// --- Componente Principal ---
const AboutSection = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);

  // Array para los botones de las pestañas
  const tabs = [
    { labelKey: "about.tabs.whoAmI", index: 0 },
    { labelKey: "about.tabs.skills", index: 1 },
    { labelKey: "about.tabs.education", index: 2 },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full mx-auto px-8 md:px-40">
      <ThemedText type="h2" primary>
        {t("about.title")}
      </ThemedText>
      {/* Botones de Pestañas Mapeados */}
      <div className="flex flex-row justify-center gap-x-6 mt-5">
        {tabs.map((tab) => (
          <ThemedButton
            key={tab.index}
            className={`min-w-24 ${
              activeSection === tab.index
                ? "text-text-primary ring-text-primary"
                : "text-text-secondary ring-text-secondary "
            } ring bg-transparent `}
            onClick={() => setActiveSection(tab.index)}
          >
            {t(tab.labelKey)}
          </ThemedButton>
        ))}
      </div>

      {/* Contenido de la Sección Activa */}
      <div className="w-full flex-1 ">
        {activeSection === 0 && <WhoIAm t={t} />}
        {activeSection === 1 && <Skills t={t} />}
        {activeSection === 2 && <Education t={t} />}
      </div>
    </div>
  );
};

export default AboutSection;

interface SubcomponentProps {
  t: TFunction;
}

// --- Subcomponente: Who I Am ---
type IconKey = "psychology" | "developer" | "learner";

const WhoIAm = ({ t }: SubcomponentProps) => {
  // 2. Usa el tipo para el array. Ahora TypeScript sabe que solo puede contener esas claves.
  const cardKeys: IconKey[] = ["psychology", "developer", "learner"];

  // 3. Usa `Record<KeyType, ValueType>` para tipar el objeto.
  // Esto le dice a TypeScript: "Este objeto tendrá las claves de IconKey y los valores serán JSX.Element".
  const icons: Record<IconKey, JSX.Element> = {
    psychology: <BiBrain className="text-4xl" />,
    developer: <GrTechnology className="text-4xl" />,
    learner: <TbBrandReactNative className="text-4xl" />,
  };

  return (
    <div className="rounded-lg h-full w-full flex flex-col md:flex-row gap-6 md:gap-8 mt-8">
      {cardKeys.map((key) => (
        <PresentationCard
          key={key}
          // Ahora TypeScript sabe que `key` es de tipo `IconKey`,
          // por lo que `icons[key]` es 100% seguro y el error desaparece.
          icon={icons[key]}
          title={t(`about.whoAmI.cards.${key}.title`)}
          description={t(`about.whoAmI.cards.${key}.description`)}
        />
      ))}
    </div>
  );
};

// --- Subcomponente: Skills ---
const Skills = ({ t }: SubcomponentProps) => {
  const softSkillKeys = [
    "problemSolving",
    "communication",
    "collaboration",
    "adaptability",
    "timeManagement",
    "criticalThinking",
  ];

  return (
    <div className="ring-1 ring-gray-700 rounded-lg h-full w-full mt-8 p-6 md:px-8">
      <div className="h-full">
        <ThemedText type="semibold" className="mb-3">
          {t("about.skills.technicalTitle")}
        </ThemedText>
        {/* Las Tech Cards no se traducen ya que son nombres propios */}
        <div className="flex flex-row flex-wrap justify-around md:justify-between md:gap-4 gap-y-4">
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
          {t("about.skills.softTitle")}
        </ThemedText>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {softSkillKeys.map((key) => (
            <SoftSkillCard
              key={key}
              title={t(`about.skills.softSkills.${key}.title`)}
              description={t(`about.skills.softSkills.${key}.description`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Subcomponente: Education ---
const Education = ({ t }: SubcomponentProps) => {
  // Datos de las tarjetas de educación
  const educationData = [
    {
      key: "multiplatform",
      icon: <GrTechnology className="text-accent" />,
      grade: "9.2",
      years: "2023 - 2025",
      location: "El Cuervo de Sevilla",
    },
    {
      key: "masters",
      icon: <BiBrain className="text-accent" />,
      grade: "8.8",
      years: "2020 - 2022",
      location: "Huelva",
    },
    {
      key: "bachelors",
      icon: <BiBrain className="text-accent" />,
      grade: "8.5",
      years: "2016-2020",
      location: "Huelva",
    },
  ];

  return (
    <div className="rounded-lg h-full w-full flex flex-col md:flex-row gap-x-8 gap-y-8 py-8">
      {educationData.map((edu) => (
        <EducationCard
          key={edu.key}
          title={t(`about.education.cards.${edu.key}.title`)}
          iconoEstudios={edu.icon}
          grade={edu.grade}
          years={edu.years}
          location={edu.location}
          placeOfStudy={t(`about.education.cards.${edu.key}.institution`)}
          highlightInfo={t(`about.education.cards.${edu.key}.highlight`)}
          // La 't' puede devolver arrays si se lo pides con 'returnObjects'
          learning={
            t(`about.education.cards.${edu.key}.learnings`, {
              returnObjects: true,
            }) as string[]
          }
        />
      ))}
    </div>
  );
};

// --- Componente de Presentación (sin cambios, solo recibe props) ---
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
