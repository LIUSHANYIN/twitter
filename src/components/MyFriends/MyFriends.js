import React, { useState, useEffect } from "react";
import AddFriends from "../AddFriends/index";
import UserService from "../../service/user";

import "./index.css";
export default function MyFriends() {
  const [friends, setFriends] = useState([]);

  const [stranger, setStranger] = useState([]);
  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    let bool = false;

    const fetchStrange = async () => {
      try {
        if (!bool) {
          const response = await UserService.handleFindStrange(userId);
          setStranger(response.data.data.data);
        }
      } catch (e) {
        if (!bool) {
          throw e;
        }
      }
    };
    fetchStrange();

    return () => {
      bool = true;
    };
  }, [userId]);

  useEffect(() => {
    let bool = false;

    const fetchFriend = async () => {
      try {
        if (!bool) {
          const response = await UserService.showFriend(userId);
          setFriends(response.data.data.data2);
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

  const addFriend = async (index) => {
    const result = await UserService.handleGetFriend(
      userId,
      stranger[index]._id
    );
    const temp = stranger[index];
    const temp2 = [...friends];
    temp2.push(temp);
    setFriends(temp2);
    console.log(result);
  };

  return (
    <div>
      <div>
        <div className="myfriend-container">
          <h2>My Friends</h2>
          <div>
            {friends &&
              friends.map((friend, i) => (
                <div className="myfriend" key={i}>
                  <div className="myfriend-left">
                    <img src={friend.avatar} alt="" />
                    <p>
                      {friend.firstName}
                      {friend.lastName}
                    </p>
                  </div>
                  <div className="myfriend-right">
                    <p>{friend.friends.length} </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="AddFriend">
        <h2>Friends you may know</h2>
        <div>
          {stranger &&
            stranger.map((friend, i) => (
              <AddFriends
                key={i}
                firstName={friend.firstName}
                lastName={friend.lastName}
                icon={friend.avatar}
                index={i}
                addFriend={addFriend}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
