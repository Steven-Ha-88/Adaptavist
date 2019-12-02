import weatherReducer from "./weatherReducer";
import { FETCH_WEATHER } from "./../Actions/types";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = weatherReducer(undefined, {});
    expect(newState).toEqual(newState);
  });

  it("Should return new state given the action type", () => {
    const tempArr = [
      { name: "test1", age: 2 },
      { name: "test2", age: 2 },
      { name: "test3", age: 2 }
    ];
    const newState = weatherReducer(undefined, {
      type: FETCH_WEATHER,
      payload: tempArr
    });
    expect(newState.forecast).toEqual(tempArr);
  });
});
