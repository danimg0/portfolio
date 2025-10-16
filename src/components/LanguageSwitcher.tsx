import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ES, GB } from "country-flag-icons/react/3x2";

type Language = {
  abr: string;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Tipo más específico para los props de SVG
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [openLangMenu, setOpenLangMenu] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpenLangMenu(false);
  };

  const languages: Language[] = [
    {
      abr: "es",
      name: "ESP",
      //@ts-expect-error funciona
      Icon: ES,
    },
    {
      abr: "en",
      name: "ENG",
      //@ts-expect-error funciona
      Icon: GB,
    },
  ];

  const currentLang = languages.find((lan) => lan.abr === i18n.language);
  const FlagIcon = currentLang?.Icon;

  const LanSelect = ({ lan }: { lan: Language }) => (
    <div
      onClick={() => handleLanguageChange(lan.abr)}
      className="flex flex-row justify-center w-16 gap-x-2 cursor-pointer p-1 rounded-md hover:bg-background"
    >
      <div className="w-6 h-6">
        <lan.Icon />
      </div>
      <div
        className={`text-xs ${
          lan.abr === i18n.language
            ? "text-text-primary font-semibold"
            : "text-text-secondary"
        }`}
      >
        {lan.name}
      </div>
    </div>
  );

  return (
    <div className="bg-primary w-fit h-fit p-1 rounded-md relative">
      <div onClick={() => setOpenLangMenu(!openLangMenu)}>
        {FlagIcon && (
          <FlagIcon
            className="w-6 h-6 cursor-pointer"
            //@ts-expect-error funciona
            title={currentLang?.name}
          />
        )}
      </div>

      {/* CAMBIO 1: Eliminamos el renderizado condicional '&&' y aplicamos clases dinámicas */}
      <div
        className={`absolute h-fit mt-3 right-0.5 p-1 rounded-md bg-primary 
          transition-all duration-300 ease-in-out transform
          ${
            openLangMenu
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <div className="flex flex-col gap-1">
          {languages.map((lan) => (
            // CAMBIO 2: La key debe estar en el elemento que se itera, en este caso LanSelect
            <LanSelect key={lan.abr} lan={lan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
