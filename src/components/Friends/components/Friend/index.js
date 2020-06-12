import React, { useState, useEffect } from "react";
import "./index.css";
import UserService from "../../../../service/user";

export default function Friend() {
  const [friendList, setFriendList] = useState([]);

  const userId = window.localStorage.getItem("userId");

  const bt =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1589498211/Shape_vtgskw.png";

  const handleDeleteFriend = async (index) => {
    const friendId = friendList[index]._id;
    await UserService.handleRemoveFriend(userId, friendId);
    const arr = [...friendList];
    arr.splice(index, 1);
    setFriendList(arr);
  };
  useEffect(() => {
    let bool = false;

    const fetchFriend = async () => {
      try {
        if (!bool) {
          const response = await UserService.showFriend(userId);
          setFriendList(response.data.data.data2);
        }
      } catch (e) {
        if (!bool) {
          throw e;
        }
      }
    };
    fetchFriend();

    return () => {
      bool = true;
    };
  }, [userId]);

  return (
    <div>
      <div className="Profile-top">
        <h2>My Friends</h2>
        <input type="text" placeholder="Search fro friends" />
      </div>

      <div className="friends-container">
        {friendList &&
          friendList.map(
            (friend, i) =>
              i < 100 && (
                <div key={i} className="single-container">
                  <div className="avatar">
                    <img src={friend.avatar} alt="" />
                  </div>
                  <div className="user-name">
                    <h2>
                      {friend.firstName} {friend.lastName}
                    </h2>
                    <p>
                      {friend.friends.length} <span> Friends</span>
                    </p>
                  </div>
                  <div>
                    <button onClick={() => handleDeleteFriend(i)}>
                      <img src={bt} alt="" />
                    </button>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
