import axios from "axios";

const url = "https://twitter-service-sy.herokuapp.com";

const token = window.localStorage.getItem("token");

const handleCreatePost = (text, mood, authorId) => {
  return axios.post(
    `${url}/posts/`,
    {
      text,
      mood,
      authorId,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

const handleFetchAllPost = () => {
  return axios.get(`${url}/posts/fetch`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
const handleCreateComment = (postId, commentAuthorId, text) => {
  return axios.post(
    `${url}/posts/createComment`,
    {
      postId,
      commentAuthorId,
      text,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

const PostService = {
  handleCreatePost,
  handleFetchAllPost,
  handleCreateComment,
};

export default PostService;
