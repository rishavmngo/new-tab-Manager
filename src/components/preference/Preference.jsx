import React, { useContext, useState } from "react";
import "./preference.css";
import { LinksData } from "../../App.js";

export default function Preference() {
  const { linkData, setLinkData } = useContext(LinksData);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    url &&
      name &&
      setLinkData([
        ...linkData,
        {
          name: name,
          url: url,
          icon: `fab fa-${name.toLowerCase()}`,
          id: new Date().toString(),
        },
      ]);
    setUrl("");
    setName("");
  };

  return (
    <>
      <div className="main">
        {linkData.map((e) => {
          return (
            <div className="preferenceComp">
              <div className="preferenceLinkName">{e.name}</div>
            </div>
          );
        })}
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            placeholder="Google"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={url}
            placeholder="https://www.google.com"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn" type="submit">
            ADD
          </button>
        </form>
      </div>
    </>
  );
}
