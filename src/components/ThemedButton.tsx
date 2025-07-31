interface Props {
  className?: string;
  type?: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => void;
}

const ThemedButton: React.FC<Props> = ({
  children,
  onClick,
  className,
  type = "primary",
}) => {
  return (
    <div onClick={onClick}>
      <button
        className={`p-2 rounded-lg w-fit hover:opacity-85 hover:scale-110 shadow-sm hover:cursor-pointer transition-all duration-300 ${className}
      ${
        type === "primary"
          ? "bg-accent hover:shadow-background  "
          : "ring-1 ring-accent background hover:shadow-secondary "
      }`}
      >
        {children}
      </button>
    </div>
  );
};

export default ThemedButton;
