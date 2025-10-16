import { PiPerson, PiVoicemail } from "react-icons/pi";
import ContactCard from "./ContactCard";
import ThemedInput from "./ThemedInput";
import ThemedText from "./ThemedText";
import { MdEmail, MdTitle } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import ThemedButton from "./ThemedButton";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState, type ChangeEvent } from "react";

const ContactMeSection = () => {
  const { t } = useTranslation();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  //Manejo de inputs
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const resetInputs = () => {
    setInputs({ name: "", email: "", title: "", message: "" });
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (!inputs.name || !inputs.email || !inputs.title || !inputs.message) {
      alert("Todos los campos deben estar completos");
      return;
    }

    const SERVICE_ID = "service_ffafnia";
    const TEMPLATE_ID = "template_jbkqchh";
    const USER_ID = "3eJ-dqL3-JrA4eGC9";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, inputs, USER_ID).then(
      () => {
        resetInputs();
        alert("Correo enviado");
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Error al enviar el correo");
      }
    );
  };

  return (
    <div className="flex flex-col items-center w-full px-8 md:px-40">
      <ThemedText type="h2" primary>
        {t("contact.title")}
      </ThemedText>
      <div className="flex mt-8 flex-col md:flex-row justify-center gap-8 w-full">
        {/* ====== Left Column: Contact Info ====== */}
        <div className="flex flex-col justify-between gap-6 md:w-1/2">
          <ContactCard>
            <div className="flex flex-col gap-4">
              <ThemedText type="h3" primary>
                {t("contact.info.title")}
              </ThemedText>
              <div className="flex items-center gap-4 rounded-lg p-2 bg-background w-fit">
                <div className="p-3 bg-teal-800 rounded-lg">
                  <MdEmail className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <ThemedText primary>
                    {t("contact.info.emailLabel")}
                  </ThemedText>
                  {/* The email address itself is not translated */}
                  <ThemedText>daniel.martos@hotmail.com</ThemedText>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <ThemedText primary type="semibold">
                {t("contact.info.socialLabel")}
              </ThemedText>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/daniel-martos-g%C3%B3mez-1a11381b6/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 bg-background rounded-lg">
                    <LiaLinkedin size={20} className="text-text-primary" />
                  </div>
                </a>
                <a
                  href="https://github.com/danimg0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="p-3 bg-background rounded-lg">
                    <GrGithub size={20} className="text-text-primary" />
                  </div>
                </a>
              </div>
            </div>
          </ContactCard>

          <ContactCard>
            <div className="flex flex-col gap-2">
              <ThemedText primary type="semibold">
                {t("contact.info.responseTime.title")}
              </ThemedText>
              <ThemedText>{t("contact.info.responseTime.text")}</ThemedText>
            </div>
          </ContactCard>
        </div>

        {/* ====== Right Column: Contact Form ====== */}
        <div className="md:w-2/3">
          <ContactCard>
            <form onSubmit={handelSubmit}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8">
                  <ThemedInput
                    icon={<PiPerson />}
                    inputType="text"
                    placeholder={t("contact.form.name.placeholder")}
                    title={t("contact.form.name.label")}
                    name="name"
                    onChange={handleInputChange}
                    value={inputs.name}
                  />
                  <ThemedInput
                    icon={<PiVoicemail />}
                    inputType="email"
                    placeholder={t("contact.form.email.placeholder")}
                    title={t("contact.form.email.label")}
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email}
                  />
                </div>
                <ThemedInput
                  icon={<MdTitle />}
                  inputType="text"
                  placeholder={t("contact.form.subject.placeholder")}
                  title={t("contact.form.subject.label")}
                  name="title"
                  onChange={handleInputChange}
                  value={inputs.title}
                />
                <ThemedInput
                  icon={<BiMessage />}
                  big
                  inputType="text"
                  placeholder={t("contact.form.message.placeholder")}
                  title={t("contact.form.message.label")}
                  name="message"
                  onChange={handleInputChange}
                  value={inputs.message}
                />
                <div className="flex justify-end mt-4">
                  <ThemedButton submit>
                    <ThemedText primary>
                      {t("contact.form.sendButton")}
                    </ThemedText>
                  </ThemedButton>
                </div>
              </div>
            </form>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
