import React, { useContext, useState } from "react";
import Friend from "../Friends/components/Profiles";
import Profiles from "../Friends/components/Friend";
import Status from "../Friends/components/Status/index";
import UserContext from "../../context/index";
import "./index.css";
export default function Profile() {
  const { user } = useContext(UserContext);
  const [isFStatus, setFStatus] = useState(false);
  const [isFProfile, setFProfile] = useState(false);
  const [isFFriends, setFFriends] = useState(true);

  const [stcolor, setStcolor] = useState("black");
  const [procolor, setProcolor] = useState("black");
  const [fricolor, setFricolor] = useState("blue");

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
