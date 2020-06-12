import React, { useContext } from "react";
import "./index.css";
import UserContext from "../../../../context/index";
export default function Profiles() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="pro-top">
        <h2>My Profile</h2>
      </div>
      <div>
        {user && (
          <div className="pro-container">
            <div className="inf">
              <h2>My name</h2>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <div className="inf">
              <h2>My Phone Number</h2>
              <p>{user.phone}</p>
            </div>
            <div className="inf">
              <h2>My Home Address</h2>
        <p>{user.street} {user.city}</p>
            </div>
            <div className="inf">
              <h2>My Relationship</h2>
              <p>In a relationship</p>
            </div>
            <div className="inf">
              <h2>My Profile</h2>
              <img src={user.avatar} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
