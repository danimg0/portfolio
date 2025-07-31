import type { ReactNode } from "react";
import ThemedText from "./ThemedText";

interface Props {
  icon: ReactNode;
  text: string;
  progress: number;
  iconColor?: string;
}

const TechCard = ({
  icon,
  text,
  progress,
  iconColor: iconClassName = "text-accent",
}: Props) => {
  return (
    <div className="border-2 rounded-lg w-28 h-28 p-3 border-text-secondary bg-gray-800 flex flex-col items-center justify-between hover:scale-110 hover:shadow-md shadow-accent transition-all duration-200 cursor-default">
      {/* Icono */}
      <div
        className={`text-2xl flex items-center justify-center h-8 ${iconClassName}`}
      >
        {icon}
      </div>
      {/* Texto con altura fija */}
      <div className="h-8 flex items-center justify-center">
        <ThemedText className="text-xs text-center text-text-secondary px-1">
          {text}
        </ThemedText>
      </div>
      {/* <progress value={progress} className="w-full min-h-2 rounded" /> */}
      <div className="w-full h-1.5 bg-gray-500 rounded-xl ">
        <div
          className={`bg-secondary h-full rounded-xl `}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default TechCard;
