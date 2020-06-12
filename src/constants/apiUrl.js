const devUrl = "http://localhost:3010";


const currentEnv = process.env.REACT_APP_ENV;

const getAPIUrl = () => {
  if (currentEnv === "dev") {
    return devUrl;
  }
  
};

export default getAPIUrl;
