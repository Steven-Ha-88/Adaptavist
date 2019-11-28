import {
  FETCH_WEATHER,
  FETCH_DETAILS,
  FETCH_WEATHER_ERROR
} from "./../Actions/types";

const initialState = {
  forecast: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("FETCH_WEATHER_SUCCESS!");
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
};
