import React from "react";

import MyFriends from "../MyFriends/MyFriends";
import AddStatus from "../AddStatus/index";
import Status from "../Friends/components/Status";
import PostService from "../../service/post";
import "./index.css";
export default function UserBlock() {
  const handleShareStatus = async (input, feel, userId) => {
    await PostService.handleCreatePost(input, feel, userId);

    window.location.reload();
  };
  return (
    <div className="block-container">
      <div>
        <MyFriends />
      </div>
      <div className="block">
        <AddStatus handleShareStatus={handleShareStatus} />
        <Status />
      </div>
    </div>
  );
}
