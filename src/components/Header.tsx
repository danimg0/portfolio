import { useState, useEffect } from "react"; // Importa useEffect
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next"; // 1. Importa el hook

// 2. Define la estructura de datos para la navegación
const navItems = [
  { key: "home", sectionId: "section1" },
  { key: "about", sectionId: "section2" },
  { key: "projects", sectionId: "section3" },
  { key: "contact", sectionId: "section4" },
];

const Header = () => {
  const { t } = useTranslation(); // 3. Llama al hook
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  // NOTA: Es mejor usar useEffect para añadir y limpiar el event listener.
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    // Limpia el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div
      className={`fixed top-0 z-50 w-full ${
        color && "shadow-md"
      } bg-background`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-40">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 cursor-pointer"
          onClick={() => document.getElementById("section1")?.scrollIntoView()}
        />
        <button
          type="button"
          className="ml-4 text-text-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        {/* ====== Desktop navigation ====== */}
        <nav className="hidden md:flex gap-x-4 items-center">
          {navItems.map((item) => (
            <p
              key={item.key} // Usa una key única
              className="text-text-primary hover:text-accent cursor-pointer"
              onClick={() => {
                document.getElementById(item.sectionId)?.scrollIntoView();
              }}
            >
              {/* 4. Traduce usando la clave del objeto */}
              {t(`header.nav.${item.key}`)}
            </p>
          ))}
          {/* LanguageSwitcher se mueve fuera del nav para un mejor layout */}
        </nav>
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>

      {/* ====== Mobile dropdown ====== */}
      <div
        className={
          `absolute bg-background top-full w-full bg-surface overflow-hidden transition-all duration-300 ease-out ` +
          (isOpen ? "max-h-60" : "max-h-0")
        }
      >
        <div className="flex flex-col items-end px-8 py-2">
          {navItems.map((item, index) => (
            <p
              key={item.key}
              className="text-text-primary py-2 transform transition-all duration-300 ease-out"
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(-10px)",
              }}
              onClick={() => {
                setIsOpen(false);
                document.getElementById(item.sectionId)?.scrollIntoView();
              }}
            >
              {t(`header.nav.${item.key}`)}
            </p>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
