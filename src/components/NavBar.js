import React from "react"
import { NavLink } from "react-router-dom";
import '../NavBar.css'

const linkStyles = {
  display: "inline-block",
  width: "180px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "rgb(149, 38, 38)",
  textDecoration: "none",
  color: "white",
  transition: "box-shadow 0.3s ease-in-out",
};



function NavBar() {
   
  return (
    <div id="navbar">
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = "0 0 100px rgba(0, 255, 0, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Home
        </NavLink>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Software Engineering Portfolio
        </NavLink>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Instructional Design Portfolio
        </NavLink>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Blogs
        </NavLink>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Contact Me
        </NavLink>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Testimonials
        </NavLink>
    </div>
    
  );
}

export default NavBar;