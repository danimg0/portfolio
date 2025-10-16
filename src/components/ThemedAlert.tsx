import { useTranslation } from "react-i18next";
import ThemedButton from "./ThemedButton";
import ThemedText from "./ThemedText";
import { MdClose } from "react-icons/md";

type AlertProps = {
  title?: string;
  description?: string;
  onClose: () => void; // Función para cerrar el alert
  //   type?: "success" | "error" | "info"; // Para diferentes estilos de alerta
};

const ThemedAlert = ({
  title,
  description,
  onClose,
}: //   type = "info",
AlertProps) => {
  //   const alertStyles = {
  // success: "bg-green-600 hover:bg-green-700",
  // error: "bg-red-600 hover:bg-red-700",
  // info: "bg-primary hover:bg-blue-800",
  //   };

  const { t } = useTranslation();

  return (
    //Overlay para disfuminar
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Contenedor alert */}
      <div
        className={`transitio-all ease-in duration-300 border border-accent bg-primary relative max-w-sm w-full p-6 rounded-md shadow-2xl flex flex-col gap-2 `}
      >
        <ThemedText primary type="h3">
          {title}
        </ThemedText>
        <ThemedText primary type="normal">
          {description}
        </ThemedText>
        <div className="flex flex-row justify-end mt-4">
          <ThemedButton type="secondary" onClick={onClose}>
            <ThemedText primary>{t("alert.button")}</ThemedText>
          </ThemedButton>
        </div>
      </div>
    </div>
  );
};

export default ThemedAlert;
