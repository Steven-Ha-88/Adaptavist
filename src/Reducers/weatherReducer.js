import {
  FETCH_WEATHER,
  LOADING,
  FETCH_WEATHER_ERROR,
  FETCH_NAME,
  FETCH_DETAILS
} from "./../Actions/types";

const initialState = {
  forecast: [],
  current: {},
  city: "",
  loading: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_WEATHER:
      console.log("FETCH_WEATHER SUCCESS!");
      return { ...state, forecast: action.payload, error: "", loading: false };
    case FETCH_WEATHER_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCH_NAME:
      console.log("FETCH_NAME SUCCESS");
      return { ...state, city: action.payload };
    case FETCH_DETAILS:
      console.log("FETCH_DETAILS SUCCESS");
      return { ...state, current: action.payload, loading: false, error: "" };
    default:
      return state;
  }
};
