import "./App.css";
import React, { createContext, useState } from "react";
import TabGrid from "./components/TabGrid";
import Preference from "./components/preference/Preference";
import Data from "./Data";

export const LinksData = createContext();

function App() {
  const [preferenceToggle, setPreferenceToggle] = useState(false);
  const [linkData, setLinkData] = useState(Data);
  const [view, setView] = useState(true);
  const [tabGrid, setTabGrid] = useState({
    gridClass: "tabGrid",
    linkClass: "linkGrid",
    nameClass: "nameGrid",
    iconClass: "iconGrid",
  });
  return (
    <div className="App">
      <i
        className="setting fas fa-cog"
        onClick={() => !setPreferenceToggle(!preferenceToggle)}
      ></i>
      {!view && (
        <i
          className="view fas fa-th-large"
          onClick={() => {
            setView(true);
            setTabGrid({
              gridClass: "tabGrid",
              linkClass: "linkGrid",
              nameClass: "nameGrid",
              iconClass: "iconGrid",
            });
          }}
        ></i>
      )}
      {view && (
        <i
          className="view fas fa-th-list"
          onClick={() => {
            setView(false);
            setTabGrid({
              gridClass: "tabList",
              linkClass: "linkList",
              nameClass: "nameList",
              iconClass: "iconList",
            });
          }}
        ></i>
      )}
      <LinksData.Provider value={{ linkData, setLinkData }}>
        <TabGrid tabGrid={tabGrid} />
        {preferenceToggle && <Preference />}
      </LinksData.Provider>
    </div>
  );
}

export default App;
