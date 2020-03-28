import axios from "axios";

let urlApi = "";

if (process.env.NODE_ENV === `development`) {
  urlApi = "http://localhost";
} else {
}

export default axios.create({
  baseURL: `${urlApi}/midway/public/api/`
});
