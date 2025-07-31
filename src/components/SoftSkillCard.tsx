import ThemedText from "./ThemedText";

interface Props {
  title: string;
  description: string;
}

const SoftSkillCard = ({ title, description }: Props) => {
  return (
    <div className="rounded-lg min-h-1/2 p-3 border-text-secondary bg-gray-900">
      <ThemedText type="semibold" className="text-gray-300 mb-2">
        {title}
      </ThemedText>
      <ThemedText className="line-clamp-2">{description}</ThemedText>
    </div>
  );
};

export default SoftSkillCard;
