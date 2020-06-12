import axios from "axios";

const url = "https://twitter-service-sy.herokuapp.com";

const handleRegister = (values) => {
  return axios.post(`${url}/auth/register`, values);
};
const handleLogin = ({ phone, password }) => {
  return axios.post(`${url}/auth/login`, {
    phone,
    password,
  });
};

const AuthService = {
  handleRegister,
  handleLogin,
};

export default AuthService;
