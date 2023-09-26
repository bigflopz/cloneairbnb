import React from "react";
import "./Button.css";
import"./fonts/fonts.css"

const customFont = {
  fontFamily: 'Roboto',
  fontSize: "18px"
}

const Button = ({ text, className }) => {
  return (
    
      <button className={className} style={{fontFamily:customFont.fontFamily}}>{text}</button>
    
  );
};
export default Button;
