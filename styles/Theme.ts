import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
import { TextStyles as Text } from "../utils/components/Text";
// import { ButtonStyles as Button } from "./components/Button";

// Background Color
export const darkBg = "gray.800";
export const lightBg = "white";

// Text Color
export const lightText = "gray.800";
export const darkText = "white";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  // breakpoints: {
  //   sm: "19.9375em", // 319px
  //   md: "48.125em", //770px
  //   lg: "64.1875em", // 1027px
  //   xl: "90.125em", // 1443px
  //   "2xl": "160.125em", // 2562px
  // },
  styles: {
    global: {
      "html, body": {
        lineHeight: "1.7rem",
        boxSizing: "border-box",
        fontFamily: "Poppins",
      },
    },
  },
  components: {
    Text,
  },
  colors: {},
});

export default theme;
