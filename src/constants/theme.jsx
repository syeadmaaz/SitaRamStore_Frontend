import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#f52d56",
  primary1: "#122636",
  title: "#072F4A",
  slide1: "#20d2bb",
  slide2: "#febe29",
  slide3: "#f56b2a",
  orange: "#ea721c",
  white: "#FFF",
  dark: "#000",
  light: "#f7f7f7",
  grey: "#A9A9A9",
  gray: "#474747",
  yellow: "#ffb900",
  green: "green",
  red: "red",
  blue: "#87cefa",
  tranparent: "rgba(0,0,0,0)",
};

export const FONT = {
  f1: 'normal',
  f2: 'notoserif',
  f3: 'sans-serif',
  f4: 'sans-serif-light',
  f5: 'sans-serif-thin',
  f6: 'sans-serif-condensed',
  f7: 'sans-serif-medium',
  f8: 'serif',
  f9: 'Roboto',
  f10: 'monospace',
};

export const WIDTH = {
  screenWidth: width,
  cardWidth: width / 2.5,
  productCardWidth: width / 1.13,
  productImageWidth: width / 2.5,
  imageWidth: width / 3.2,
  buttonWidth: width / 1.13,
};

export const HEIGHT = {
  screenHeight: height,
  headerHeight: height / 14,
  cardHeight: height / 4,
  adminCategoryCardHeight: height / 3.5,
  productCardHeight: height / 5,
  productImageHeight: height / 5.4,
  imageHeight: height / 7,
  billCardHeight: height / 2.06,
  adressCardHeight: height / 4,
  buttonHeight: height / 15,
  addButton: height / 11,
};
