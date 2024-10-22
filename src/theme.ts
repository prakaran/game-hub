// 1. import extend theme option
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// 3. Extend the theme
const theme = extendTheme({ config });

export default theme;
