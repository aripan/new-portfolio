import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImg from "../assets/profile-black.jpg";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-row justify-around px-4 mt-4 ">
        <div className="grid w-7/12 grid-flow-row text-secondary gap-y-1 max-sm:w-full">
          <div>
            <p>
              My programming journey began during my M.Sc. in Computational
              Mechanics, where I was introduced to the basics of data
              structures, development and analysis of algorithms, implementation
              and coding of algorithms for differential problems etc. Later, my
              student jobs and my master's thesis work shaped my information
              architecture.
            </p>
          </div>

          <div>
            {" "}
            <p>
              I feel more connected to JavaScript, even though I have worked
              with other languages such as Python and C++(basic). The aspect of
              programming that I enjoy the most is problem-solving. The feeling
              of finally finding a solution to a problem is something I love. My
              core stack is MERN and apart from that i am also using ruby, ruby
              on rails, nest.js and next.js.
            </p>
          </div>

          <div>
            <p>
              When i am not coding, i enjoy watching movies, playing games and
              of course spending more time with my partner. I also enjoy
              learning new things. For me, in order to grow professionally and
              personally, it is crucial to learn every day.
            </p>
          </div>
        </div>
        <div className="w-3/12 max-sm:w-0">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
