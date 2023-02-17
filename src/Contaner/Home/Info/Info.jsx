import React from "react";
import Wrapper from "../../../HOC/Wrapper";
import { TypeAnimation } from "react-type-animation";

export default function Info() {
  return (
    <Wrapper>
      <div className="name">
        {" "}
        <TypeAnimation sequence={["Hi I'm Abolfazl 👋", 4500]} wrapper="h2" speed={90} cursor={false} repeat={0} />
      </div>
      <div className="decs">
        <TypeAnimation
          sequence={["Front-End Developer 💻", 2500, "React JS Developer ⚛", 2500, "Javascript Developer 😎", 1000, "Computer Engineering Student 👨‍💻", 2500, "Future Software Engineer ✌", 2500]}
          wrapper="h2"
          speed={45}
          cursor={true}
          repeat={Infinity}
        />
      </div>
    </Wrapper>
  );
}
