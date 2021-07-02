import React, { useContext } from "react";
import "../App.css";
import "./component.css";
import br from "../Data";
import { DataContext } from "../DataContext";
import { LinksData } from "../App.js";

export default function Tab_Grid({ tabGrid }) {
  const { linkData, setLinkData } = useContext(LinksData);
  return (
    <>
      <div className={tabGrid.gridClass}>
        {linkData.map((link) => {
          return (
            <div
              key={link.id}
              className={tabGrid.linkClass}
              onClick={() => (window.location.href = `${link.url}`)}
            >
              <i className={`${tabGrid.iconClass} ${link.icon}`}></i>
              <p className={tabGrid.nameClass}>{link.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
