import React, { useRef, useState } from "react";
import "./ScrollableContent.css";
import ClickableText from "./ClickableText";
import arrowright from "./arrowright.svg";
import arrowleft from "./arrowleft.svg"

function ScrollableContent(props) {
  const contenRef = useRef(null);
  const [selectedText, setSelectedText] = useState(null);
  const scrollLeft = () => {
    contenRef.current.scrollLeft -= 100;
  };
  const scrollRight = () => {
    contenRef.current.scrollLeft += 100;
  };

  const headerList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const handleTextClick = (index) => {
    if (selectedText === index) {
      setSelectedText(null);
    } else {
      setSelectedText(index);
    }
  };

  return (
    <div className="scrollable-content header2" ref={contenRef}>
      {/* Scroll button(s) */}
      <button className="scroll-button scroll-button-left" onClick={scrollLeft}>
      <img src={arrowleft} />
      </button>

      {/* Content to be scrolled */}

      {headerList.map((value, index) => (
        <button className="button-activities" key={index}>
          <ClickableText
            text="StarWars"
            isUnderlined={selectedText === index}
            onClick={() => handleTextClick(index)}
          ></ClickableText>
        </button>
      ))}

      <button
        className="scroll-button scroll-button-right"
        onClick={scrollRight}
      >
        <img src={arrowright} />
        
      </button>
    </div>
  );
}

export default ScrollableContent;
