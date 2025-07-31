import { FaUniversity } from "react-icons/fa";
import ThemedText from "./ThemedText";
import { BiCalendar, BiMedal } from "react-icons/bi";
import { MdPlace } from "react-icons/md";

interface Props {
  iconoEstudios: React.ReactNode;
  title: string;
  years: string;
  location: string;
  placeOfStudy: string;
  grade?: string;
  highlightInfo?: string;
  learning: string[];
}

const EducationCard: React.FC<Props> = (props) => {
  return (
    <div className="bg-gray-800 h-full md:w-1/3 flex flex-col gap-y-3 ring-1 ring-gray-700 p-4 rounded-lg">
      {/* icono + titulo */}
      <div className="flex flex-row items-center gap-x-4">
        <div className="bg-teal-700 rounded-lg p-2">{props.iconoEstudios}</div>
        <ThemedText className="text-text-primary">{props.title}</ThemedText>
      </div>
      {/* lugar */}
      <TextIcon
        icon={<FaUniversity className="text-text-secondary" />}
        text={props.placeOfStudy}
      />

      {/* fecha + ubicacion */}
      <div className="flex flex-row gap-x-4">
        <TextIcon
          icon={<BiCalendar className="text-text-secondary" />}
          text={props.years}
        />
        <TextIcon
          icon={<MdPlace className="text-text-secondary" />}
          text={props.location}
        />
      </div>
      {/* nota */}
      {props.grade && (
        <TextIcon
          icon={<BiMedal className="text-text-secondary" />}
          text={props.grade}
        />
      )}
      {/* info destacada */}
      <div>
        <ThemedText className=" text-shadow-accent text-text-secondary">
          {props.highlightInfo}
        </ThemedText>
      </div>
      {/* info generla */}
      <div>
        <ul className="list-disc text-text-secondary pl-4">
          {props.learning.map((phrase) => (
            <li>
              <ThemedText>{phrase}</ThemedText>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;

interface TextIconProps {
  icon: React.ReactNode;
  text: string;
}

const TextIcon: React.FC<TextIconProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-row gap-x-1 items-center ">
      {icon}
      <ThemedText>{text}</ThemedText>
    </div>
  );
};
