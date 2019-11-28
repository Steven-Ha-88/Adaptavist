import {
  FETCH_WEATHER,
  LOADING,
  FETCH_WEATHER_ERROR,
  FETCH_NAME,
  FILTER_DAY
} from "./../Actions/types";

const initialState = {
  forecast: [],
  days: [],
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
      return { ...state, error: action.payload };
    case FETCH_NAME:
      console.log("FETCH_NAME SUCCESS");
      return { ...state, city: action.payload };
    case FILTER_DAY:
      console.log("FILTER_DAY SUCCESS");
      return { ...state, days: action.payload };
    default:
      return state;
  }
};
