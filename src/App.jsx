import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { socials } from "./constants";
import { useEffect, useState } from "react";

const App = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 600;

      if (scrollY > triggerPoint) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {showElement && (
        <div className="fixed bottom-0 left-0 invisible md:visible">
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
              className="flex items-center justify-center border-l-4 border-[#64ffda]  cursor-pointer w-14 h-14"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="object-contain w-9/12 h-9/12"
              />
            </div>
          ))}
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
