import axios from "axios";

const url = "https://twitter-service-sy.herokuapp.com";
const token = window.localStorage.getItem("token");

const handleGetFriend = (userId, friendId) => {
  const data = axios.post(
    `${url}/users/addFriends`,
    { userId, friendId },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
const handleRemoveFriend = (userId, friendId) => {
  return axios.post(
    `${url}/users/removeFriends`,
    { userId, friendId },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

const handleFindStrange = (userId) => {
  const data = axios.post(
    `${url}/users/stranger`,
    {
      userId,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
const handleFindFriendById = (userId) => {
  return axios.get(
    `${url}/users/friend`,
    {
      userId,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

// const handleFetchAllUser = () => {
//   return axios.get(`${url}/users/fetch`, {
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

const handleProfileUpdate = (userId, field, value) => {
  return axios.put(
    `${url}/users/`,
    { userId, field, value },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};
const showFriend = (userId) => {
  return axios.post(
    `${url}/users/show`,
    {
      userId,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
};

const UserService = {
  handleGetFriend,
  handleFindStrange,
  handleFindFriendById,
  showFriend,
  handleRemoveFriend,
  handleProfileUpdate,
};

export default UserService;
