type TextType = "normal" | "h1" | "h2" | "h3" | "semibold" | "link";

interface Props {
  primary?: boolean;
  className?: string;
  type?: TextType;
  children?: React.ReactNode;
}

const ThemedText: React.FC<Props> = ({
  primary,
  className = "",
  type = "normal",
  children,
}) => {
  //todo: add font when avaible
  const textType = {
    normal: "",
    h1: "text-4xl",
    h2: "text-2xl",
    h3: "text-xl",
    semibold: "font-semibold",
    link: "text-blue-500 underline",
  };

  // Determinar color solo si className no incluye colores de texto
  const defaultTextColor = !className.includes("text-")
    ? primary
      ? "text-text-primary"
      : "text-text-secondary"
    : "";

  return (
    <p
      className={[defaultTextColor, textType[type], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
};

export default ThemedText;
