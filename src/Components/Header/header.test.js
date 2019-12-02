import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findTestAttr } from "./../../Utils";
import toJson from "enzyme-to-json";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("mounts", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should render without errors", () => {
    const wrapper = findTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const wrapper = findTestAttr(component, "logo");
    expect(wrapper.length).toBe(1);
  });

  it("Should render search bar component", () => {
    const wrapper = findTestAttr(component, "search");
    expect(wrapper.length).toBe(1);
  });

  it("Should match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
