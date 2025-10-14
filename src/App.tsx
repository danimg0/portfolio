import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import ThemedButton from "./components/ThemedButton";
import ThemedCard from "./components/ThemedCard";
import ThemedText from "./components/ThemedText";
import AboutSection from "./components/About";
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function

function App() {
  const { t } = useTranslation();

  const [arrowOpacity, setArrowOpacity] = useState(1);

  const handleArrowOpacity = () => {
    const scrollY = window.scrollY;
    const maxScroll = 200;
    const opacity = 1 - scrollY / maxScroll;
    setArrowOpacity(Math.max(0, opacity));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleArrowOpacity);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleArrowOpacity);
    };
  }, []);

  return (
    <div className="w-full bg-background">
      <Header />
      {/* Sección de presentación - Altura completa de la pantalla */}

      <div className="h-fit py-10 mt-10 md:mt-0 md:min-h-screen flex flex-col  ">
        {/* Contenido principal que ocupa el resto del espacio */}
        <div
          id="section1"
          className="flex-1 flex flex-col items-center justify-center p-8 md:px-40"
        >
          {/* tarjeta */}
          <ThemedCard className="flex md:h-4/6 p-7 ">
            {/* intro */}
            <div className="md:w-1/2 flex justify-center flex-col gap-y-4 ">
              <ThemedText type="h1" className="font-bold" primary>
                {t("hero.greeting")} {/* Se usa t('key') para traducir */}
              </ThemedText>
              <ThemedText type="semibold" primary>
                {t("hero.role")}
              </ThemedText>
              <ThemedText>{t("hero.intro")}</ThemedText>
              <div className="flex flex-row gap-x-4 mt-5">
                <ThemedButton
                  onClick={() => {
                    document.getElementById("section4")?.scrollIntoView();
                  }}
                >
                  <ThemedText type="semibold" primary>
                    {t("hero.contactButton")}
                  </ThemedText>
                </ThemedButton>
                <ThemedButton
                  onClick={() => {
                    document.getElementById("section3")?.scrollIntoView();
                  }}
                  type="secondary"
                >
                  <ThemedText>{t("hero.projectsButton")}</ThemedText>
                </ThemedButton>
              </div>
            </div>
            {/* foto */}
            <div className="w-1/2 items-center justify-center hidden md:flex">
              <img src="/yo.jpg" className="rounded-full" />
            </div>
          </ThemedCard>
          <BsArrowDownCircle
            className="absolute bottom-5 text-accent mt-12 transition-all duration-500 animate-bounce pointer-events-none hidden md:block"
            style={{ opacity: arrowOpacity }}
            size={40}
          />
        </div>
      </div>

      {/* Segunda sección - About */}
      <div
        id="section2"
        className="min-h-screen flex  justify-center py-14 md:py-24  bg-primary "
      >
        <AboutSection />
      </div>

      {/* Tercera sección - Proyectos */}
      <div
        id="section3"
        className="min-h-screen flex justify-center py-14 md:py-24 bg-background"
      >
        <ProjectsSection />
      </div>

      {/* Cuarta sección - Contacto */}
      <div
        id="section4"
        className="flex justify-center py-14 md:py-24 bg-primary"
      >
        <ContactMeSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
