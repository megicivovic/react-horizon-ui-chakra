import React, { useState, useEffect } from "react";
import "./UnlockButton.css"

// Custom components
export default function UnlockButton(props) {
  function Circle() {
    const [clicked, setClicked] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("lightblue");
    const [text, setText] = useState("Unlock");

    const handleClick = () => {
      setBackgroundColor("lightblue");
      setClicked(true);
      setText("Authorizing...");

      setTimeout(() => {
        setBackgroundColor("green");
        setText("Unlocked");
      }, 2000);
    };

    return (
      <div className="parent">
        <div
          className="circle"
          style={{ backgroundColor }}
          onClick={handleClick}
        >
          <p style={{ fontSize: "32px", fontWeight: "bold" }}>{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Circle />
    </div>
  );
}
