import React from "react";
import Wrapper from "../../../HOC/Wrapper";

function Image({ image }) {
  return (
    <Wrapper>
      {" "}
      <div className="img-box">
        <img src={image} alt="" />
      </div>
    </Wrapper>
  );
}

export default Image;
