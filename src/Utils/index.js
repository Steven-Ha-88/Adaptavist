import {
  SVG1d,
  SVG1n,
  SVG2d,
  SVG2n,
  SVG3d,
  SVG3n,
  SVG4d,
  SVG4n,
  SVG9d,
  SVG9n,
  SVG10d,
  SVG10n,
  SVG11d,
  SVG11n,
  SVG13d,
  SVG13n,
  SVG50d,
  SVG50n
} from "../images/index";

export const findTestAttr = (component, attribute) => {
  const wrapper = component.find(`[data-test="${attribute}"]`);
  return wrapper;
};

export const toCelcius = kel => {
  const temp = Math.round(kel - 273.15);
  return temp;
};

export const weatherImg = term => {
  switch (term) {
    case "01d":
      return SVG1d;
    case "01n":
      return SVG1n;
    case "02d":
      return SVG2d;
    case "02n":
      return SVG2n;
    case "03d":
      return SVG3d;
    case "03n":
      return SVG3n;
    case "04d":
      return SVG4d;
    case "04n":
      return SVG4n;
    case "09d":
      return SVG9d;
    case "09n":
      return SVG9n;
    case "10d":
      return SVG10d;
    case "10n":
      return SVG10n;
    case "11d":
      return SVG11d;
    case "11n":
      return SVG11n;
    case "13d":
      return SVG13d;
    case "13n":
      return SVG13n;
    case "50d":
      return SVG50d;
    case "50n":
      return SVG50n;
    default:
      return null;
  }
};
