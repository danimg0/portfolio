interface ThemedCardProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemedCard: React.FC<ThemedCardProps> = ({ className, children }) => {
  return (
    <div className={`bg-primary rounded-lg flex flex-row ${className}`}>
      {children}
    </div>
  );
};

export default ThemedCard;
