import ProjectCard from "./ProjectCard";
import ThemedText from "./ThemedText";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <ThemedText type="h2" primary>
        Proyectos realizados
      </ThemedText>
      <div className="mx-8 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        <ProjectCard
          title="TinyDetails"
          imageLocation="/llaveros.jpg"
          description="E-commerce de llaveros personalizados impresos en 3D. Incluye integración con la API de Spotify para seleccionar canciones, gestión de pedidos y pagos (simulados). Proyecto Full-Stack."
          tags={[
            "React",
            "TypeScript",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "Spotify API",
          ]}
          //   sourceLink="https://github.com/usuario/gestor-tareas"
          demoLink="https://tinydetails.vercel.app/"
        />
        <ProjectCard
          title="BarberApp - Gestión de citas"
          imageLocation="/barber.jpg"
          description="Aplicación móvil para reservar citas en barberías. Incluye panel de administración y de empleados. Los clientes pueden elegir barbero, seleccionar servicios y reservar citas, mostrando solo días y horas disponibles según la duración de los servicios. Disponible en web y Android"
          tags={["React Native", "NativeWind", "Expo", "PostgreSQL", "Next.js"]}
          // sourceLink="https://github.com/usuario/barberapp"
          demoLink="https://barber-app.expo.app/"
        />
        <ProjectCard
          title="Portfolio Personal"
          imageLocation="/coding-man.jpg"
          description="Portfolio personal desarrollado con React y TailwindCSS. Presenta mis proyectos, experiencia profesional y formas de contacto. Diseño esponsivo, adaptándose a cualquier dispositivo. El código está estructurado para facilitar la escalabilidad y el mantenimiento, empleando buenas prácticas de desarrollo frontend. Además, incorpora componentes reutilizables y una gestión eficiente del estado."
          tags={["React", "TailwindCSS", "Vite"]}
          sourceLink="https://github.com/usuario/portfolio"
          demoLink="https://portfolio-dani.vercel.app/"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
