import type { ReactElement } from "react";
import ThemedText from "./ThemedText";
import React from "react";

interface Props {
  icon: ReactElement<{ className?: string }>;
  title: string;
  placeholder: string;
  inputType: React.HTMLInputTypeAttribute;
  big?: boolean;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name?: string;
}

const ThemedInput: React.FC<Props> = ({
  icon,
  placeholder,
  title,
  inputType,
  value,
  onChange,
  name,
  big,
}) => {
  const commonClasses =
    "flex-1 text-gray-50 bg-transparent outline-none resize-none";

  return (
    <div className="flex flex-col gap-y-1">
      <ThemedText primary>{title}</ThemedText>
      <div className="mt-1 flex flex-row items-baseline  gap-x-2 p-2  bg-background rounded-lg">
        {React.isValidElement(icon) &&
          React.cloneElement(icon, {
            className: "text-accent",
          })}
        {big ? (
          <textarea
            placeholder={placeholder}
            className={`${commonClasses} h-24`}
            value={value}
            onChange={onChange}
            name={name}
          />
        ) : (
          <input
            type={inputType}
            placeholder={placeholder}
            className={`${commonClasses}`}
            value={value}
            onChange={onChange}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

export default ThemedInput;
