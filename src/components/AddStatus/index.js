import React, { useContext, useState } from "react";
import UserContext from "../../context/index";

import "./index.css";

export default function AddStatus({ handleShareStatus }) {
  const { user } = useContext(UserContext);
  const userId = window.localStorage.getItem("userId");

  const mood =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1589411869/Icon_label_xehrcn.png";

  const [input, setInput] = useState("");
  const [feel, setFeel] = useState("");
  const [happyBt, setHappyBt] = useState(false);
  const [sadBt, setSadBt] = useState(false);
  const [happyColor, setHappyColor] = useState("grey");
  const [sadColor, setSadColor] = useState("grey");

  const handleShare = () => {
    handleShareStatus(input, feel, userId);
    setHappyBt(false);
    setSadBt(false);
    setHappyColor("grey");
    setSadColor("grey");
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInput(text);
  };
  const handleHappy = () => {
    setFeel("happy");
    setSadBt(true);
    setHappyColor("blue");
  };
  const handleSad = () => {
    setFeel("sad");
    setHappyBt(true);
    setSadColor("red");
  };

  return (
    <div>
      <div className="friendsStatus-container">
        <div className="Status-btn">
          <button
            onClick={handleHappy}
            disabled={happyBt}
            style={{ background: happyColor }}
          >
            Happy
          </button>
          <button
            onClick={handleSad}
            disabled={sadBt}
            style={{ background: sadColor }}
          >
            Sad
          </button>
        </div>
        <div className="user-status">
          <img src={user.avatar} alt="" className="head" />
          <input
            value={input}
            onChange={handleInputChange}
            type="text"
            placeholder={`what's on your mind, ${user.firstName}`}
          />
        </div>
        <hr />
        <div className="user-bottom">
          <img src={mood} alt="" />
          <button onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}
