import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";



const modernTheme = extendTheme(
  {
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    },
  },
  withProse({
    baseStyle: {
      h3: {
        color: "#FF9E0D",
      },
      h4: {
        color: "#FF9E0D",
      },
      thead: {
        color: "#1796F3",
      },
      tbody: {
        color: "#1B4F8C",
      },
      li: {
        color: "#1B4F8C",
      },
      p: {
        color: "#1B4F8C",
      },
      u: {
        color: "#1B4F8C",
      },
    },
  }),
);

export default modernTheme;
