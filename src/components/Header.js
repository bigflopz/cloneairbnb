import React, { useState } from "react";
import "../components/Header.css";
import Button from "./Button";
import profileIcon from "../components/account-avatar-profile-user-3-svgrepo-com.svg";
import dropDownIcon from "../components/dropdown-menu-svgrepo-com.svg";
import searchIcon from "../components/search-circle-svgrepo-com.svg";
import "../components/fonts/fonts.css";
import ClickableText from "./ClickableText";
import { ImHome } from 'react-icons/im'

const customFont = {
  fontFamily: "Roboto",
};

const headerList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17];

const Header = (props) => {
  const [selectedText, setSelectedText] = useState(null);

  const handleTextClick = (index) => {
    if (selectedText === index) {
      setSelectedText(null);
    } else {
      setSelectedText(index);
    }
  };

  return (
    <div>
      <header className="header">
        <nav>
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt="Logo"
            />
          </div>
          <div className="button-container">
            <Button className="button " text="Anywhere" />
            <Button className="button " text="Any week" />
            <Button className="button button3" text="Add guests" />
            <img src={searchIcon} />
          </div>
          <div className="button-container1">
            <button className="button2 img">Airbnb your home</button>

            <button className="button button-container">
              <img src={dropDownIcon} />
              <img src={profileIcon} />
            </button>
          </div>
        </nav>
      </header>
      <body>
        <div className="header2">
          {headerList.map((value, index) => (
            <button className="button-activities"  key={index}>
              <ClickableText
                text="StarWars"
                isUnderlined={selectedText === index}
                onClick={() => handleTextClick(index) }></ClickableText>
            </button>
          ))}
        </div>
      </body>
    </div>
  );
};
export default Header;
