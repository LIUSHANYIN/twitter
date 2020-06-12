import React, { useContext, useState } from "react";
import "./index.css";
import UserContext from "../../context/index";
import UserService from "../../service/user";
export default function Setting() {
  const { user } = useContext(UserContext);
  const userId = window.localStorage.getItem("userId");

  const [name, setName] = useState("");
  const [field, setField] = useState("");

  const handleInputPhone = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChangeSetting = async () => {
    setName(name);
    setField("phone");
    await UserService.handleProfileUpdate(userId, field, name);
  };

  return (
    <div className="setting-container">
      <div className="pro-top">
        <h2>My Profile Setting</h2>
      </div>
      <div>
        {user && (
          <div className="pro-container">
            <div className="inf">
              <h2>My name</h2>
              <div className="change">
                <input
                  placeholder={`${user.firstName} ${user.lastName}`}
                ></input>
                <button>Change</button>
              </div>
            </div>
            <div className="inf">
              <h2>My Phone Number</h2>
              <div className="change">
                <input
                  value={name}
                  onChange={handleInputPhone}
                  type="number"
                  placeholder={user.phone}
                ></input>
                <button onClick={handlePhoneChangeSetting}>Change</button>
              </div>
            </div>
            <div className="inf">
              <h2>My Home Address</h2>
              <div className="change">
                <input
                  type="text"
                  placeholder={`${user.street} ${user.city}`}
                ></input>
                <button>Change</button>
              </div>
            </div>
            <div className="inf">
              <h2>My Email</h2>
              <div className="change">
                <input placeholder={user.email}></input>
                <button>Change</button>
              </div>
            </div>
            <div className="inf">
              <h2>My Profile</h2>
              <div className="change">
                <img className="user-icon" src={user.avatar} alt="" />
                <input className="file" type="file" />
                <button className="img-bt">Change</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
