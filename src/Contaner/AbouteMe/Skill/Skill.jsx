import React, { useState, useEffect } from "react";

import "../Aboute.scss";
import styled from "styled-components";

export default function Skill({ item }) {
  return (
    <div className="item">
      <h3 className="name">{item.name}</h3>
      <span className="count">{item.range}/5</span>
      <span className="star">
        {Array(Math.trunc(item.range))
          .fill(" ")
          .map((item, index) => (
            <i key={index} className="bx bxs-star"></i>
          ))}
        {item.range > Math.trunc(item.range) ? <i className="bx bxs-star-half"></i> : null}
      </span>
    </div>
  );
}
