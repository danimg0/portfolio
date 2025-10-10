import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  //Anio actual
  const currentYear = new Date().getFullYear();

  //Enlaces a redes sociales
  const social = [
    {
      name: "github",
      url: "https://github.com/danimg0",
      icon: FaGithub,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/daniel-martos-g%C3%B3mez-1a11381b6/",
      icon: FaLinkedin,
    },
  ];

  return (
    <div className="bg-background w-full h-fit p-10 flex justify-between ">
      <p className="text-text-secondary">
        &copy; {currentYear} - Daniel Martos - All rights reserved
      </p>
      <div className="flex justify-center space-x-6">
        {social.map((soc) => (
          <a
            className="text-text-secondary transition hover:scale-110 duration-300"
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={soc.name}
          >
            <soc.icon className="text-2xl" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
