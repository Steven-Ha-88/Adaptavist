import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import { findTestAttr } from "./../../Utils";
import toJson from "enzyme-to-json";

const setUp = (props = {}) => {
  const component = shallow(<Home {...props} />);
  return component;
};

describe("Home Component", () => {
  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      return (component = setUp());
    });

    it("mounts", () => {
      expect(component.exists()).toEqual(true);
    });

    it("Should render without errors", () => {
      const wrapper = findTestAttr(component, "HomeComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render title", () => {
      const wrapper = findTestAttr(component, "title");
      expect(wrapper.length).toBe(1);
    });

    it("Should render search", () => {
      const wrapper = findTestAttr(component, "search");
      expect(wrapper.length).toBe(1);
    });

    it("Should match snapshot", () => {
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
