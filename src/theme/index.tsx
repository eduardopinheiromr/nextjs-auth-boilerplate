import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { components } from "./components";

const theme = extendTheme({
  styles,
  colors,
  fonts,
  components,
});

export default theme;
