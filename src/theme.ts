import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  components: {
    Heading: {
      baseStyle: {
        mb: 3,
      },
    },
    Text: {
      baseStyle: {
        mb: 2,
      },
    },
  },
});

export default theme;
