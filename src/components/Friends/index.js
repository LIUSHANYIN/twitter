import React, { useState, useContext } from "react";
import UserContext from "../../context/index";
import "./index.css";
import Friend from "./components/Profiles/index";
import Profiles from "./components/Friend/index";
import Status from "./components/Status/index";

export default function Friends() {
  const { user } = useContext(UserContext);
  const [isFStatus, setFStatus] = useState(false);
  const [isFProfile, setFProfile] = useState(true);
  const [isFFriends, setFFriends] = useState(false);
  const [stcolor, setStcolor] = useState("black");
  const [procolor, setProcolor] = useState("blue");
  const [fricolor, setFricolor] = useState("black");

  const handleFriendsProfile = () => {
    setFStatus(false);
    setFFriends(false);
    setFProfile(true);
    setStcolor("black");
    setFricolor("black");
    setProcolor("blue");
  };
  const handleFriendsStatus = () => {
    setFStatus(true);
    setFFriends(false);
    setFProfile(false);
    setStcolor("blue");
    setFricolor("black");
    setProcolor("black");
  };
  const handleFriendsFriends = () => {
    setFStatus(false);
    setFFriends(true);
    setFProfile(false);
    setStcolor("black");
    setFricolor("blue");
    setProcolor("black");
  };

  return (
    <div className="Friend-container">
      <div className="top-container">
        <img src={user.avatar} alt="" />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
      </div>
      <div className="mid-btn">
        <button style={{ color: stcolor }} onClick={handleFriendsStatus}>
          Status
        </button>
        <button style={{ color: procolor }} onClick={handleFriendsProfile}>
          Friends
        </button>
        <button style={{ color: fricolor }} onClick={handleFriendsFriends}>
          Profile
        </button>
      </div>

      <div className="detail">
        {isFStatus && <Status />}
        {isFProfile && <Profiles />}
        {isFFriends && <Friend />}
      </div>
    </div>
  );
}
