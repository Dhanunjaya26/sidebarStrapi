import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data.jsx";
import { useGlobalContext } from "./Context.jsx";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar} = useGlobalContext();
  // console.log(isSidebarOpen);
  // console.log(sublinks);

  return (
    <aside className={`sidebar ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((link) => {
          const { pageId, page, links } = link;
          return (
            <article key={pageId} className="sidebar-links">
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((sublink) => {
                  const { id, label, icon, url } = sublink;
                  return (
                    <a key={id} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
