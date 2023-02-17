import React from "react";
import Wrapper from "../../../HOC/Wrapper";
import "../Home.scss";
export default function ResumeBtn() {
  return (
    <button className="resume-BTN">
      {" "}
      <a href="https://jobinja.ir/user/AB-9265929# " download="https://jobinja.ir/user/AB-9265929#" target="_blank">
        See my Resume{" "}
        <span>
          <i className="bx bx-chevrons-right"></i>
        </span>
      </a>
    </button>
  );
}
