import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      /// brand colors go here
      dark: "black",
    },
  },
  textStyles: {
    "heading-dark": {
      color: "brand.dark",
      textAlign: ["center", "center", null, "left"],
      fontSize: ["3xl", "3xl", "4xl", "5xl"],
      fontWeight: "black",
      textTransform: "uppercase",
      marginY: [20],
    },
    "heading-light": {
      color: "white",
      textAlign: ["center", "center", null, "left"],
      fontSize: ["3xl", "3xl", "4xl", "5xl"],
      fontWeight: "black",
      textTransform: "uppercase",
      marginY: [20],
    },
  },
});

export default theme;
