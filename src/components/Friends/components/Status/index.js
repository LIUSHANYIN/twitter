import React, { useState, useEffect } from "react";
import "./index.css";
import PostService from "../../../../service/post";

export default function Status() {
  const userId = window.localStorage.getItem("userId");
  const [status, setStatus] = useState([]);
  const [input, setInput] = useState("");

  const heart =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1589401145/Fill_1161_x4jgjr.png";
  const eye =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1589401145/Fill_1159_rfkmhg.png";
  const comment =
    "https://res.cloudinary.com/dlapk94rx/image/upload/v1589401145/Fill_951_srrxl0.png";

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await PostService.handleFetchAllPost();
      setStatus(result.data.data);
    };
    fetchPosts();
  }, []);
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInput(text);
  };
  const handleSubmit = async (index) => {
    const postId = status[index]._id;
    await PostService.handleCreateComment(postId, userId, input);
    window.location.reload();
  };

  return (
    <div className="Friend-Status">
      {status &&
        status.map(
          (statu, i) =>
            i < 5 && (
              <div key={i} className="friendsStatus-container">
                <div className="status-top">
                  <div className="status-top-user">
                    <div className="user-top">
                      <img
                        className="head"
                        src={statu.author[0].avatar}
                        alt=""
                      />
                      <p>
                        <span>
                          {statu.author[0].firstName} {statu.author[0].lastName}
                        </span>
                        is feeling <span>{statu.mood}</span>
                      </p>
                    </div>
                    <button>...</button>
                  </div>
                  <div className="status-text">
                    <p>{statu.text}</p>
                  </div>
                  <div className="status-judge">
                    <button>
                      <img src={heart} alt="" />
                    </button>
                    <p>{statu.like.length}</p>
                    <button>
                      <img src={comment} alt="" />
                    </button>
                    <p>{statu.comment.length}</p>
                    <img src={eye} alt="" />
                    <p>{statu.view}</p>
                  </div>
                </div>
                <div>
                  <hr />
                </div>

                <div className="status-bottom">
                  <div className="status-bottom-top">
                    <button>View preview comments</button>
                    <p>2 of 13</p>
                  </div>
                  <div>
                    {statu.comment &&
                      statu.comment.map((com, i) => (
                        <div key={i} className="status-comment">
                          <div>
                            <img
                              src={statu.author[0].avatar}
                              alt=""
                              className="head"
                            />
                          </div>
                          <div className="comment">
                            <h2>
                              {statu.firstName} {statu.lastName}
                            </h2>

                            <p>{com.text}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="white-comment">
                    <img src={statu.author[0].avatar} alt="" className="head" />
                    <input
                      type="text"
                      placeholder="White a comment"
                      onChange={handleInputChange}
                    />
                    <button onClick={() => handleSubmit(i)}>Submit</button>
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
}
