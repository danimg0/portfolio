import ThemedButton from "./ThemedButton";
import ThemedText from "./ThemedText";

interface Props {
  imageLocation: string;
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  sourceLink?: string;
}

const ProjectCard = ({
  description,
  imageLocation,
  tags,
  title,
  demoLink,
  sourceLink,
}: Props) => {
  return (
    <div className="bg-primary flex flex-col rounded-lg overflow-hidden hover:shadow-md shadow-secondary transition-all duration-300 md:min-w-1/3">
      <div className="overflow-hidden">
        <img
          src={imageLocation}
          className="h-48 w-full object-cover overflow-hidden hover:scale-110 filter md:grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="p-4 flex gap-y-4 flex-col">
        <ThemedText
          primary
          type="h3"
          className="font-bold hover:text-secondary transition-all duration-300 text-text-primary"
        >
          {title}
        </ThemedText>
        <ThemedText>{description}</ThemedText>
        <div className="flex flex-row gap-2 flex-wrap">
          {tags.map((tag) => (
            <div key={tag} className=" bg-background rounded-full py-1 px-2">
              <ThemedText>{tag}</ThemedText>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto pb-4 flex flex-row items-center justify-center gap-x-4">
        {demoLink && (
          <ThemedButton
            type="secondary"
            onClick={() => {
              window.open(demoLink, "_blank");
            }}
          >
            <ThemedText>Ver demo</ThemedText>
          </ThemedButton>
        )}
        {sourceLink && (
          <ThemedButton
            type="secondary"
            onClick={() => {
              window.open(sourceLink, "_blank");
            }}
          >
            <ThemedText>Ver código fuente</ThemedText>
          </ThemedButton>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
