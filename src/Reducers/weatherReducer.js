import {
  FETCH_WEATHER,
  FETCH_DETAILS,
  FETCH_WEATHER_ERROR,
  FETCH_NAME
} from "./../Actions/types";

const initialState = {
  forecast: [],
  city: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("FETCH_WEATHER SUCCESS!");
      return { ...state, forecast: action.payload };
    case FETCH_NAME:
      console.log("FETCH_NAME SUCCESS");
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
