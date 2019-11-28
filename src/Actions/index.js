import { FETCH_WEATHER, FETCH_DETAILS, FETCH_WEATHER_ERROR } from "./types";
import weatherApi from "./../api";
import history from "./../history";

export const getData = city => async dispatch => {
  try {
    const response = await weatherApi.get("/data/2.5/forecast", {
      params: {
        q: city,
        appid: "bcf9d23e76dcc63bc158942ceea4c302"
      }
    });

    console.log(response.data);
    dispatch({ type: FETCH_WEATHER, payload: response.data.list });
    history.push("/forecast");
  } catch (e) {
    dispatch({
      type: FETCH_WEATHER_ERROR,
      payload: "City not found!"
    });
  }
};
