import React, { useEffect, useRef } from "react";

function ContextMenu({ options, cordinates, ContextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (event.target.id !== "context-opener") {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(event.target)
        ) {
          setContextMenu(false);
        }
      }
    };
    document.addEventListener("click",handleOutSideClick);
    return()=>{
      document.removeEventListener("click",handleOutSideClick)
    }
  },[]);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    setContextMenu(false);
    callback();
  };
  console.log(cordinates.x, cordinates.y);
  return (
    <div
      className="bg-dropdown-background fixed py-2 z-[100] shadow-xl"
      ref={contextMenuRef}
      style={{
        top: cordinates.y,
        left: cordinates.x,
      }}
    >
      <ul>
        {options.map(({ name, callback }) => (
          <li key={name} onClick={(e) => handleClick(e, callback)} className="px-3 py-1 cursor-pointer hover:bg-background-default-hover">
            <span className="text-white ">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
