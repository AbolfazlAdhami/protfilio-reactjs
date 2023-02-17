import React from "react";
import Wrapper from "../../HOC/Wrapper";
import "./Home.scss";
import image from "../../Asset/Image/Home.png";
import Link from "./Link/Link";
import Info from "./Info/Info";
import Image from "./Image/Image";
import { delay, motion } from "framer-motion";
import ResumeBtn from "./ResumeBTN/ResumeBtn";
const Home = () => {
  return (
    <Wrapper>
      <div className="Home">
        <div className="col-6 info">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1, ease: "linear", times: 0.3 }}>
            <Info />
            <Link />
            <ResumeBtn />
          </motion.div>
        </div>
        <div className="col-6 image">
          <motion.div initial={{ translateX: "50%", opacity: 0 }} whileInView={{ translateX: "0%", opacity: 1 }} transition={{ delay: 0.2, ease: "easeInOut", times: 0.3 }}>
            <Image image={image} />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
