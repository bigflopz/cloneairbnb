import React, { useState } from "react";
import { ImHome } from 'react-icons/im'

const ClickableText = ({ text, isUnderlined, onClick }) => {

  const underlineStyle = {
    textDecoration: isUnderlined ? "underline" : "none",
    cursor: "pointer",
    fontWeight: isUnderlined ? "bold" : "normal",
    color: isUnderlined ? "black" : "grey",
  };
  const handleClick = () => {
    onClick(); 
  };

  return (
    <div onClick={handleClick} style={underlineStyle}>
    <ImHome size={16} className={isUnderlined ? 'bold-icon' : ''} />
    <p style={{ textDecoration: isUnderlined ? "underline" : "none" }}>
      {text}
    </p>
    
  </div>
  );
};
export default ClickableText;
