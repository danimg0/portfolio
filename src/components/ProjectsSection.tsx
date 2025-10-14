import ProjectCard from "./ProjectCard";
import ThemedText from "./ThemedText";
import { useTranslation } from "react-i18next";

// 1. Create a data structure for your projects.
// This separates the data from the component's logic.
const projectsData = [
  {
    key: "tinyDetails",
    imageLocation: "/llaveros.jpg",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Spotify API",
    ],
    demoLink: "https://tinydetails.vercel.app/",
  },
  {
    key: "barberApp",
    imageLocation: "/barber.jpg",
    tags: ["React Native", "NativeWind", "Expo", "PostgreSQL", "Next.js"],
    demoLink: "https://barber-app.expo.app/",
  },
  {
    key: "portfolio",
    imageLocation: "/coding-man.jpg",
    tags: ["React", "TailwindCSS", "Vite"],
    demoLink: "https://portfolio-dani.vercel.app/",
  },
];

const ProjectsSection = () => {
  // 2. Get the translation function.
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center w-full px-8 md:px-40">
      <ThemedText type="h2" primary>
        {t("projects.title")}
      </ThemedText>
      <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 3. Map over the data array to render each project card. */}
        {projectsData.map((project) => (
          <ProjectCard
            key={project.key}
            // Use the key to build the translation path dynamically.
            title={t(`projects.cards.${project.key}.title`)}
            description={t(`projects.cards.${project.key}.description`)}
            imageLocation={project.imageLocation}
            tags={project.tags}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
