import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", sectionId: "section1" },
  { key: "about", sectionId: "section2" },
  { key: "projects", sectionId: "section3" },
  { key: "contact", sectionId: "section4" },
];

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 90);
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full ${
        color ? "shadow-md" : ""
      } bg-background transition-shadow duration-300`}
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-40">
        {/* ====== LOGO (Left Side) ====== */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 cursor-pointer"
          onClick={() => document.getElementById("section1")?.scrollIntoView()}
        />

        {/* ====== CONTROLS (Right Side) ====== */}
        <div className="flex items-center gap-x-4">
          {/* -- Desktop Navigation -- */}
          <nav className="hidden md:flex gap-x-4 items-center">
            {navItems.map((item) => (
              <p
                key={item.key}
                className="text-text-primary hover:text-accent cursor-pointer transition-colors"
                onClick={() => {
                  document.getElementById(item.sectionId)?.scrollIntoView();
                }}
              >
                {t(`header.nav.${item.key}`)}
              </p>
            ))}
          </nav>

          {/* -- Language Switcher (Visible on all screen sizes) -- */}
          <LanguageSwitcher />

          {/* -- Mobile Hamburger Button -- */}
          <button
            type="button"
            className="text-text-primary md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ====== MOBILE DROPDOWN (Navigation links only) ====== */}
      <div
        className={
          `absolute bg-background top-full w-full overflow-hidden transition-all duration-300 ease-out ` +
          (isOpen ? "max-h-60 border-t border-gray-700" : "max-h-0")
        }
      >
        <div className="flex flex-col items-end px-8 py-4">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
