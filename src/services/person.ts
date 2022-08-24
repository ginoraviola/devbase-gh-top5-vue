import axios from "axios";

const retrievePersonInfo = async (username: string) => {
  return await axios.get(`https://api.github.com/users/${username}`);
};

export default retrievePersonInfo;
