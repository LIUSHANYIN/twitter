import React from "react";
import "./index.scss";
import classnamse from "classnames";
import { Link } from "react-router-dom";
export default function Dropdown({
  isActive,
  handleDropProfile,
  handleSetting,
}) {
  return (
    <div className={classnamse("dropdown-container", { active: isActive })}>
      <div className="dropdown">
        <h2 onClick={handleDropProfile}>Profile</h2>
        <h2 onClick={handleSetting}>Setting</h2>
        <Link to={"/login"}>
          <h2 className="logout">Log Out</h2>
        </Link>
      </div>
    </div>
  );
}
