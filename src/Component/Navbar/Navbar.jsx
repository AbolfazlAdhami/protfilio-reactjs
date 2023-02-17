import React from "react";
import Wrapper from "../../HOC/Wrapper";

import "./navbar.scss";
import { NavLink, useParams } from "react-router-dom";
const Navbar = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <div className={`navi ${id == null ? "home" : id}`}>
        <NavLink to="/">
          <h3 className="logo">{`<A.ADHAMI/>`}</h3>
        </NavLink>
        <ul>
          <li>
            <h3>
              <NavLink to="home">
                Home
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
                Aboute Me
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
                contact me
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
};

export default Navbar;
