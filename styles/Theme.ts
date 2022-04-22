import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import "@fontsource/poppins";
// import { ButtonStyles as Button } from "./components/Button";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "html, body": {
        fontFamily: "Poppins",
        lineHeight: "1.7rem",
        boxSizing: "border-box",
      },
    },
  },
  breakpoints: {
    sm: "427px",
    md: "770px",
    lg: "1027px",
    xl: "1442px",
    "2xl": "2562px",
  },
  components: {},
  colors: {},
});

export default theme;
