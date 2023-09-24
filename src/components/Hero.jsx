import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { socials } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#64ffda]" />
          <div className="w-1 h-40 sm:h-80 bg-gradient-to-b from-[#64ffda] to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#64ffda]">Asaduzzaman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a full-stack developer with 2 years of hands on experience. I
            enjoy building user interfaces & web applications.
          </p>
          <a
            href="#about"
            className="rounded-lg flex items-center justify-center w-48 mt-8 border-2 cursor-pointer h-14 text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:text-black"
          >
            More about me
          </a>

          <div className="flex flex-row items-center justify-center mt-36 gap-x-8">
            {socials.map((social) => (
              <div
                key={social.url}
                onClick={() =>
                  window.open(
                    social.name === "email address"
                      ? `mailto:${social.url}?subject=Contact`
                      : social.url,
                    "_blank"
                  )
                }
                className="flex items-center justify-center w-20 h-20 cursor-pointer"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="object-contain w-9/12 h-9/12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
