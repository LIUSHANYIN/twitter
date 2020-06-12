import React, { useState } from "react";
import UserBlock from "../../components/UserBlock/index";
import Navigation from "../../components/Navigation";
import Friends from "../../components/Friends/index";
import Profile from "../../components/Profile/index";
import Setting from "../../components/Setting/index";
import "./index.css";
export default function HomePage() {
  const [isHome, setHome] = useState(true);
  const [isFriend, setFriend] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [isSetting, setSetting] = useState(false);

  const handleSetting = () => {
    setSetting(true);
    setFriend(false);
    setHome(false);
    setProfile(false);
  };
  const handleHome = () => {
    setFriend(false);

    setProfile(false);
    setSetting(false);

    setHome(true);
  };
  const handleFriend = () => {
    setFriend(true);

    setProfile(false);
    setSetting(false);
    setHome(false);
  };

  const handleProfile = () => {
    setFriend(false);

    setProfile(true);
    setSetting(false);
    setHome(false);
  };
  const handleDropProfile = () => {
    setFriend(false);
    setHome(false);
    setProfile(true);
  };
  return (
    <div className="homepage">
      <Navigation
        handleDropProfile={handleDropProfile}
        handleHome={handleHome}
        handleFriend={handleFriend}
        handleProfile={handleProfile}
        isHome={isHome}
        isFriend={isFriend}
        isProfile={isProfile}
        handleSetting={handleSetting}
      />
      {isSetting ? (
        <Setting />
      ) : isHome ? (
        <UserBlock />
      ) : isFriend ? (
        <Friends />
      ) : (
        <Profile />
      )}
      
    </div>
  );
}
