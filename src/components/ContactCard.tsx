import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ContactCard: React.FC<Props> = ({ children }) => {
  return (
    <div className="ring-1 h-full rounded-lg bg-gray-800 ring-accent p-8">
      {children}
    </div>
  );
};

export default ContactCard;
