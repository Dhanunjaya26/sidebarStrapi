import React from "react";
import sublinks from "./data.jsx";
import { useGlobalContext } from "./Context.jsx";

const NavLinks = () => {
  const {setPageId} = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        const { pageId, page } = link;
        return (
          <button
            key={pageId}
            className="page-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
