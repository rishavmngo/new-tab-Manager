import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [webLink, setWebLink] = useState([
    {
      name: "Google",
      url: "https://www.google.com",
      icon: "fab fa-google",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      icon: "fab fa-youtube",
    },
    {
      name: "Github",
      url: "https://github.com",
      icon: "fab fa-github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "fab fa-twitter",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: "fab fa-facebook",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "fab fa-instagram",
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com",
      icon: "fab fa-pinterest",
    },
  ]);
  return (
    <DataContext.Provider value={"hwy this not works what i am gonna do"}>
      {props.children}
    </DataContext.Provider>
  );
};
