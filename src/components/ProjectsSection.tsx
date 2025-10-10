import ProjectCard from "./ProjectCard";
import ThemedText from "./ThemedText";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 md:px-40">
      <ThemedText type="h2" primary>
        Projects
      </ThemedText>
      <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="TinyDetails"
          imageLocation="/llaveros.jpg"
          description="E-commerce for personalized 3D printed keychains. Includes integration with the Spotify API to select songs, order and payment management (simulated). Full-Stack project."
          tags={[
            "React",
            "TypeScript",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Spotify API",
          ]}
          //  sourceLink="https://github.com/user/task-manager"
          demoLink="https://tinydetails.vercel.app/"
        />
        <ProjectCard
          title="BarberApp - Appointment Management"
          imageLocation="/barber.jpg"
          description="Mobile application for booking appointments at barbershops. Includes an administration and employee panel. Clients can choose a barber, select services, and book appointments, showing only available days and times based on the duration of the services. Available on web and Android."
          tags={["React Native", "NativeWind", "Expo", "PostgreSQL", "Next.js"]}
          // sourceLink="https://github.com/user/barberapp"
          demoLink="https://barber-app.expo.app/"
        />
        <ProjectCard
          title="Personal Portfolio"
          imageLocation="/coding-man.jpg"
          description="Personal portfolio developed with React and TailwindCSS. It presents my projects, professional experience, and contact information. Responsive design, adapting to any device. The code is structured to facilitate scalability and maintenance, using good frontend development practices. In addition, it incorporates reusable components and efficient state management."
          tags={["React", "TailwindCSS", "Vite"]}
          // sourceLink="https://github.com/user/portfolio"
          demoLink="https://portfolio-dani.vercel.app/"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
