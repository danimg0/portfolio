import { useState } from "react";

const titles = ["Home", "About", "Projects", "Contact"];

const Header = () => {
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
      }  px-40 pt-2 bg-background `}
    >
      <nav className=" flex justify-between items-center ">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        <ul className="flex gap-x-4 flex-row">
          {titles.map((title, index) => {
            return (
              <li key={index} className=" text-text-primary">
                {title}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
