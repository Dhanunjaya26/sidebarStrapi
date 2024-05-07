import React from "react";

import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target);
    // console.log(e.target.classList);
    if (!e.target.classList.contains("page-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h2>strapi</h2>
        <button className="toggle-button" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
