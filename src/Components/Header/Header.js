import React from "react";
import headerData from "./headerData";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <h1>Произвольный текст</h1>
      </div>
      <div className="right">
        {headerData.map((item, index) => (
          <button key={index}>{item.name}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
