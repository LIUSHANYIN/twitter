import React from "react";

import "./index.css";
import { useState } from "react";

export default function AddFriends({
  firstName,
  lastName,
  icon,
  index,
  addFriend
}) {
  const finishAddImg =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1588980050/Shape_e4nitt.png";
  const addImg =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1588980050/Shape_1_olwgpv.png";

  const [img, setImg] = useState(addImg);


  const handleAddFriend = async () => {
    addFriend(index)
    setImg(finishAddImg);
  };

  return (
    <div className="strange">
      <div className="strange-left">
        <img src={icon} alt="" />
        <p>
          {firstName} {lastName}
        </p>
      </div>
      <div className="strange-right">
        <img onClick={() => handleAddFriend(index)} src={img} alt="" />
      </div>
    </div>
  );
}
