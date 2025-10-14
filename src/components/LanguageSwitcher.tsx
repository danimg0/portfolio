import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ES, GB } from "country-flag-icons/react/3x2";

// 1. Define el tipo una sola vez
type Language = {
  abr: string;
  name: string;
  Icon: React.FC; // O React.ComponentType
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
      Icon: ES,
    },
    {
      abr: "en",
      name: "ENG",
      Icon: GB,
    },
  ];

  const currentLang = languages.find((lan) => lan.abr === i18n.language);
  const FlagIcon = currentLang?.Icon;

  const LanSelect = ({ lan }: { lan: Language }) => (
    <div className="flex flex-row justify-center w-16 gap-x-2 cursor-context-menu">
      <div className="w-6 h-6">
        <lan.Icon />
      </div>
      <div
        className={`text-xs ${
          lan.abr === i18n.language
            ? "text-text-primary"
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
            //@ts-expect-error funciona asi
            className="w-6 h-6 cursor-pointer"
            title={currentLang.name}
          />
        )}
      </div>
      {/* Menu despegable */}
      {openLangMenu && (
        <div className="absolute h-fit mt-3 right-0.5 p-1 pt-2.5  rounded-md bg-primary">
          {languages.map((lan) => (
            <div onClick={() => handleLanguageChange(lan.abr)}>
              <LanSelect key={lan.abr} lan={lan} />
            </div>
          ))}
        </div>
      )}
    </div>
    // <div className="flex text-white gap-x-2">
    //   <button
    //     onClick={() => handleLanguageChange("en")}
    //     disabled={i18n.language === "en"}
    //     className="disabled:opacity-50"
    //   >
    //     🇬🇧 EN
    //   </button>
    //   <button
    //     onClick={() => handleLanguageChange("es")}
    //     disabled={i18n.language === "es"}
    //     className="disabled:opacity-50"
    //   >
    //     🇪🇸 ES
    //   </button>
    // </div>
  );
}

export default LanguageSwitcher;
