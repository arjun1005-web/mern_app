import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        backgroundColor: "black",
        padding: "10px",
        width : "100%",
      }}
    >
      <div>
        <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
         Home
        </Link>
      </div>
      <div>
        <Link to="/gridview" style={{ color: "white", textDecoration: "none" }}>
          Grid Application
        </Link>
      </div>
      <div>
        <Link to="/profilecard" style={{ color: "white", textDecoration: "none" }}>
        Profile Card
        </Link>
      </div>
        <div>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          About
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
