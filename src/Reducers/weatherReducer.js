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
      return { ...state, forecast: action.payload, error: "", loading: false };
    case FETCH_WEATHER_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCH_NAME:
      return { ...state, city: action.payload };
    case FETCH_DETAILS:
      return { ...state, current: action.payload, loading: false, error: "" };
    default:
      return state;
  }
};
