import React, { useRef } from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const SubMenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const submenuContainer = useRef(null);
  // console.log(currentPage);
  const handleMouseLeave = (event) => {
    // setPageId(null);
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    console.log(clientX, clientY);
    console.log(result);

    if (
      (
        clientX < result.left ||
        clientX > result.right ||
        clientY > result.bottom
      )
    ) {
      setPageId(null);
    }
  };

  return (
    <div
      className={`submenu ${pageId ? "show-submenu" : ""}`}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
