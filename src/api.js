import axios from "axios";

const KEY = "bcf9d23e76dcc63bc158942ceea4c302";

export default axios.create({
  baseURL: "https://api.openweathermap.org/"
});
