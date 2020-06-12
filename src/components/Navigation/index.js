import React, { useContext, useState } from "react";
import UserContext from "../../context/index";
import "./index.css";
import classnames from "classnames";
import Dropdown from "../Dropdown/index";

export default function Navigation({
  handleHome,
  handleFriend,
  handleProfile,
  isHome,
  isFriend,
  isProfile,
  handleDropProfile,
  handleSetting,
}) {
  const { user } = useContext(UserContext);
  const [isActive, setActive] = useState(false);

  const handleDropDown = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="navigation">
        <div className="nav-left">
          <img
            src="https://res.cloudinary.com/dlapk94rx/image/upload/v1588976633/Oval_bbgeoa.png"
            alt=""
          />

          <div className="menu">
            <h2 onClick={handleHome}>Home</h2>
            <hr className={classnames("hr", { active: isHome })} />
          </div>

          <div>
            <h2 onClick={handleFriend}>Friend</h2>
            <hr className={classnames("hr", { active: isFriend })} />
          </div>

          <div>
            <h2 onClick={handleProfile}>Profile</h2>
            <hr className={classnames("hr", { active: isProfile })} />
          </div>
        </div>

        <div>
          {user.firstName && (
            <div className="user">
              <img src={user.avatar} alt="" />
              <h1 onClick={handleDropDown}>{user.firstName}</h1>
            </div>
          )}
          <div>
            <Dropdown
              handleSetting={handleSetting}
              handleDropProfile={handleDropProfile}
              className="drop"
              isActive={isActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
