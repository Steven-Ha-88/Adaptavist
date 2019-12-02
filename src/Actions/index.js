import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_NAME,
  LOADING,
  FETCH_DETAILS
} from "./types";
import weatherApi from "./../api";
import history from "./../history";

const fetchDataSuccess = data => ({
  type: FETCH_WEATHER,
  payload: data
});

const fetchDataErr = err => ({
  type: FETCH_WEATHER_ERROR,
  payload: err
});

const fetchName = name => ({
  type: FETCH_NAME,
  payload: name
});

const loading = () => ({
  type: LOADING
});

const fetchDetailSuccess = data => ({
  type: FETCH_DETAILS,
  payload: data
});

export const getData = city => async dispatch => {
  dispatch(loading());
  try {
    const response = await weatherApi.get("/data/2.5/forecast", {
      params: {
        q: city,
        appid: process.env.REACT_APP_API_KEY
      }
    });
    // console.log("response", response.data.list);
    dispatch(fetchDataSuccess(response.data.list));
    dispatch(fetchName(response.data.city.name));
    history.push("/weather");
  } catch (e) {
    dispatch(fetchDataErr("City/State not found!"));
  }
};

export const getCurrentWeather = city => async dispatch => {
  try {
    const response = await weatherApi.get("/data/2.5/weather", {
      params: {
        q: city,
        appid: process.env.REACT_APP_API_KEY
      }
    });
    dispatch(fetchDetailSuccess(response.data));
    history.push("/weather");
  } catch (e) {
    dispatch(fetchDataErr("City/State not found!"));
  }
};
