import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const titles = ["Home", "About", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  // chanve nav when scroliong
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

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
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-x-4 items-center">
          {titles.map((title, index) => (
            <p
              key={index}
              className="text-text-primary hover:text-accent cursor-pointer"
              onClick={() => {
                switch (index) {
                  case 0:
                    document.getElementById("section1")?.scrollIntoView();
                    break;
                  case 1:
                    document.getElementById("section2")?.scrollIntoView();
                    break;
                  case 2:
                    document.getElementById("section3")?.scrollIntoView();
                    break;
                  case 3:
                    document.getElementById("section4")?.scrollIntoView();
                    break;

                  default:
                    break;
                }
              }}
            >
              {title}
            </p>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown */}
      <div
        className={
          `absolute bg-background top-full w-full bg-surface overflow-hidden transition-all duration-300 ease-out ` +
          (isOpen ? "max-h-60" : "max-h-0")
        }
      >
        {titles.map((title, index) => (
          <p
            key={index}
            className="text-text-primary text-right py-2 px-8 transform transition-all duration-300 ease-out"
            style={{
              transitionDelay: `${index * 100}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            }}
            onClick={() => {
              setIsOpen(false);
              switch (index) {
                case 0:
                  document.getElementById("section1")?.scrollIntoView();
                  break;
                case 1:
                  document.getElementById("section2")?.scrollIntoView();
                  break;
                case 2:
                  document.getElementById("section3")?.scrollIntoView();
                  break;
                case 3:
                  document.getElementById("section4")?.scrollIntoView();
                  break;

                default:
                  break;
              }
            }}
          >
            {title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
