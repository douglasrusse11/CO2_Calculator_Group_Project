import getAccessToken from "../helpers/helper";

const baseURL = 'https://www.carboninterface.com/api/v1/estimates';
const headers = {"Authorization": `Bearer ${getAccessToken()}`,
                 "Content-Type": "application/json"}