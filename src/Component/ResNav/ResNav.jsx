import React from "react";
import Wrapper from "../../HOC/Wrapper";
import { NavLink, useParams } from "react-router-dom";
import "./ResNav.scss";

function ResNav() {
  const { id } = useParams();

  return (
    <Wrapper>
      <div className={`fixed-nav ${id == null ? "home" : id}`}>
        <ul>
          <li>
            <h3>
              <NavLink to="home">
                <span>
                  {" "}
                  <i className="bx bxs-home-smile"></i>
                </span>
              </NavLink>
            </h3>
          </li>
          <li>
            <h3>
              <NavLink to="aboutme">
                <span>
                  {" "}
                  <i className="bx bxs-user-detail"></i>
                </span>
              </NavLink>
            </h3>
          </li>
          <li>
            <h3>
              <NavLink to="conatc">
                <span>
                  {" "}
                  <i className="bx bxs-envelope"></i>
                </span>
              </NavLink>
            </h3>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default ResNav;
