import React from "react";
import Wrapper from "../../HOC/Wrapper";
import { motion } from "framer-motion";
import "./Aboute.scss";
import Bio from "./bio/Bio";
import { abilities } from "../../Asset/Abilities";
import Skill from "./Skill/Skill";
const AboutMe = () => {
  return (
    <Wrapper>
      <div className="abouteMe">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Bio />
        </motion.div>
        <motion.div className="skills" initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
          <h3 className="title">
            My Ability and Skills
            <i className="bx bxl-javascript"></i>
            <i className="bx bxl-react"></i>
            <i className="bx bxl-redux"></i>
          </h3>
          <div className="skill-box">
            {abilities.map((item, index) => (
              <Skill key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
