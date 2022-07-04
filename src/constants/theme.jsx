import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    primary: '#f52d56',
    primary1: '#122636',
    title: '#072F4A',
    slide1: '#20d2bb',
    slide2: '#febe29',
    slide3: '#f56b2a',
    orange: '#ea721c',
    white: '#FFF',
    dark: '#000',
    light: '#f7f7f7',
    grey: '#A9A9A9',
    yellow: '#ffb900',
    red: 'red',
    tranparent: 'rgba(0,0,0,0)',
};

export const WIDTH = {
    screenWidth: width,
    cardWidth: width / 2.5,
    imageWidth: width / 3.2,

    productCardWidth: width / 1.13,
    productImageWidth: width / 2.5,
}

export const HEIGHT = {
    screenHeight: height,
    cardHeight: height / 4,
    imageHeight: height / 7,
    
    productCardHeight: height / 5,
    productImageHeight: height / 5.4,
}