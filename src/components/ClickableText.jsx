import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import "../components/ClickableText.css";

const ClickableText = ({ text, isUnderlined, onClick }) => {
  const underlineStyle = {
    cursor: "pointer",
    fontWeight: isUnderlined ? "bold" : "normal",
    color: isUnderlined ? "black" : "grey",
    textDecoration: isUnderlined ? "none" : "none",
  };

  const divBottom = {
    color: isUnderlined ? "black" : "grey",
    borderBottom: isUnderlined ? "solid" : "",
  };
  const handleClick = () => {
    onClick();
  };

  return (
    <div onClick={handleClick} style={divBottom} className="headerIcon">
      <ImHome size={20} style={underlineStyle} />
      <p className="bold-text">
        {text}
      </p>
    </div>
  );
};
export default ClickableText;
