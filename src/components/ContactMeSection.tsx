import { PiPerson, PiVoicemail } from "react-icons/pi";
import ContactCard from "./ContactCard";
import ThemedInput from "./ThemedInput";
import ThemedText from "./ThemedText";
import { MdEmail, MdTitle } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import ThemedButton from "./ThemedButton";
import { GrGithub } from "react-icons/gr";
import { LiaLinkedin } from "react-icons/lia";

const ContactMeSection = () => {
  return (
    <div className="flex flex-col  items-center px-4 md:px-0">
      <ThemedText type="h2" primary>
        Contact Me
      </ThemedText>
      <div className="flex mt-8 flex-col md:flex-row justify-center gap-8 w-full max-w-6xl">
        {/* ====== Left Column: Contact Info ====== */}
        <div className="flex flex-col justify-between gap-6 md:w-1/2">
          <ContactCard>
            <div className="flex flex-col gap-4">
              <ThemedText type="h3" primary>
                Contact Information
              </ThemedText>
              <div className="flex items-center gap-4 rounded-lg p-2 bg-background w-fit">
                <div className="p-3 bg-teal-800 rounded-lg">
                  <MdEmail className="text-accent" />
                </div>
                <div className="flex flex-col">
                  <ThemedText primary>Email</ThemedText>
                  <ThemedText>daniel.martos@hotmail.com</ThemedText>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <ThemedText primary type="semibold">
                Social Media
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
                Response time
              </ThemedText>
              <ThemedText>
                I typically reply within 24 hours on business days.
              </ThemedText>
            </div>
          </ContactCard>
        </div>

        {/* ====== Right Column: Contact Form ====== */}
        <div className="md:w-2/3">
          <ContactCard>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-8">
                <ThemedInput
                  icon={<PiPerson />}
                  inputType="text"
                  placeholder="Mike"
                  title="Your name"
                  name="name"
                />
                <ThemedInput
                  icon={<PiVoicemail />}
                  inputType="email"
                  placeholder="example@gmail.com"
                  title="Your email"
                  name="email"
                />
              </div>
              <ThemedInput
                icon={<MdTitle />}
                inputType="text"
                placeholder="Job opportunity / Collaboration..."
                title="Subject"
                name="subject"
              />
              <ThemedInput
                icon={<BiMessage />}
                big
                inputType="text"
                placeholder="Tell me about your project and what you're looking to achieve..."
                title="Message"
                name="message"
              />
              <div className="flex justify-end mt-4">
                <ThemedButton onClick={() => {}}>
                  <ThemedText primary>Send Message</ThemedText>
                </ThemedButton>
              </div>
            </div>
          </ContactCard>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
